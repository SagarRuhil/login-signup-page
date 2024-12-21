import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function FormToggle({ isLogin, onToggle }: { isLogin: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-6 text-center"
    >
      <p className="text-sm text-blue-100 mb-2">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
      </p>
      <Button variant="outline" onClick={onToggle} className="w-full border-blue-200/30 text-blue-100 hover:bg-blue-700/50">
        {isLogin ? "Sign up" : "Log in"}
      </Button>
    </motion.div>
  )
}

