import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { signIn } from "@/features/auth/store/authSlice"
import { isValidEmail } from "@/features/auth/utils/authValidation"

export function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("demo@example.com")
  const [error, setError] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setError("")
    dispatch(
      signIn({
        id: "u_1",
        name: "Demo User",
        email,
      })
    )
    navigate("/")
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  )
}
