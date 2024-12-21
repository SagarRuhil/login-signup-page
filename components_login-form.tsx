import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="email" className="text-blue-100">Email</Label>
        <Input id="email" placeholder="Enter your email" type="email" required className="bg-white/20 border-blue-200/30 text-white placeholder-blue-200" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-blue-100">Password</Label>
        <Input id="password" placeholder="Enter your password" type="password" required className="bg-white/20 border-blue-200/30 text-white placeholder-blue-200" />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Log in
      </Button>
    </motion.form>
  )
}

