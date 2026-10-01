'use client'

import { useToast } from '@/hooks/use-toast'
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const toastIcons = {
  default: AlertCircle,
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const toastColors = {
  default: 'border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800',
  success: 'border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-900/20',
  error: 'border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20',
  warning: 'border-yellow-200 dark:border-yellow-900/50 bg-yellow-50 dark:bg-yellow-900/20',
  info: 'border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/20',
}

const iconColors = {
  default: 'text-gray-500',
  success: 'text-green-500',
  error: 'text-red-500',
  warning: 'text-yellow-500',
  info: 'text-blue-500',
}

interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
  onClose: (id: string) => void
}

function Toast({ id, title, description, variant = 'default', onClose }: ToastProps) {
  const Icon = toastIcons[variant]

  return (
    <motion.div
      initial={{ x: 400, opacity: 0, scale: 0.95 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: 400, opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className={cn(
        'flex items-start gap-3 p-4 rounded-xl border shadow-lg min-w-[320px] max-w-md',
        toastColors[variant]
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0 mt-0.5">
        <Icon className={cn('h-5 w-5', iconColors[variant])} aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{title}</h4>
        )}
        {description && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        )}
      </div>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
        aria-label="Bildirim'i kapat"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </motion.div>
  )
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none" aria-live="polite" aria-label="Bildirimler">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast
              id={toast.id}
              title={toast.title}
              description={toast.description}
              variant={toast.variant}
              onClose={toast.onClose}
            />
          </div>
        ))}
      </div>
    </AnimatePresence>
  )
}