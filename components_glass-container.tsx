import { motion } from 'framer-motion'

export function GlassContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 backdrop-filter backdrop-blur-xl rounded-xl p-8 shadow-lg border border-white/20"
    >
      {children}
    </motion.div>
  )
}

