'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Background } from '../components/background'
import { GlassContainer } from '../components/glass-container'
import { LoginForm } from '../components/login-form'
import { SignupForm } from '../components/signup-form'
import { FormToggle } from '../components/form-toggle'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Background />
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassContainer>
              <motion.div
                key={isLogin ? 'login' : 'signup'}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                <h1 className="text-3xl font-bold text-center text-white mb-6">
                  {isLogin ? 'Welcome Back' : 'Create an Account'}
                </h1>
                <AnimatePresence mode="wait">
                  {isLogin ? <LoginForm /> : <SignupForm />}
                </AnimatePresence>
                <FormToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
              </motion.div>
            </GlassContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

