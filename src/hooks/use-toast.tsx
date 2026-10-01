'use client'

import { createContext, useContext, useReducer, useRef, ReactNode } from 'react'

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
  onClose: (id: string) => void
}

interface ToastState {
  toasts: Toast[]
}

type ToastAction =
  | { type: 'ADD_TOAST'; toast: Toast }
  | { type: 'REMOVE_TOAST'; id: string }

const ToastContext = createContext<{
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id' | 'onClose'>) => string
  removeToast: (id: string) => void
} | null>(null)

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case 'ADD_TOAST':
      return { toasts: [...state.toasts, action.toast] }
    case 'REMOVE_TOAST':
      return { toasts: state.toasts.filter((t) => t.id !== action.id) }
    default:
      return state
  }
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] })
  const idCounter = useRef(0)

  const generateId = () => `toast-${Date.now()}-${idCounter.current++}`

  const addToast = (toast: Omit<Toast, 'id' | 'onClose'>) => {
    const id = generateId()
    const newToast: Toast = {
      ...toast,
      id,
      onClose: removeToast,
    }
    dispatch({ type: 'ADD_TOAST', toast: newToast })

    setTimeout(() => {
      removeToast(id)
    }, 5000)

    return id
  }

  const removeToast = (id: string) => {
    dispatch({ type: 'REMOVE_TOAST', id })
  }

  return (
    <ToastContext.Provider value={{ toasts: state.toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function useToastHelpers() {
  const { addToast } = useToast()

  const toast = {
    success: (title: string, description?: string) => addToast({ title, description, variant: 'success' }),
    error: (title: string, description?: string) => addToast({ title, description, variant: 'error' }),
    warning: (title: string, description?: string) => addToast({ title, description, variant: 'warning' }),
    info: (title: string, description?: string) => addToast({ title, description, variant: 'info' }),
    default: (title: string, description?: string) => addToast({ title, description, variant: 'default' }),
  }

  return toast
}