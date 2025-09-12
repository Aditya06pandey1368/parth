import { LoginForm } from "@/components/login-form"
import { LoginHero } from "@/components/login-hero"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Left side - Hero section with illustration */}
        <LoginHero />

        {/* Right side - Login form */}
        <div className="flex-1 flex items-center justify-center p-8 bg-white dark:bg-gray-800">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
