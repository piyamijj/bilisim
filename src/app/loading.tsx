'use client'

import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-950" role="status" aria-label="Yükleniyor">
      <div className="text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-6"
        >
          <Brain className="h-10 w-10 text-white" aria-hidden="true" />
        </motion.div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">Yükleniyor...</p>
      </div>
    </div>
  )
}
