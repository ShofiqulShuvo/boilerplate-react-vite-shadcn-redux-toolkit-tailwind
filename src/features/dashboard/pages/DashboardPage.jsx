import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/features/auth/hooks/useAuth"

export function DashboardPage() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Boilerplate Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            React + Vite + shadcn/ui + Redux Toolkit + Tailwind
          </p>
        </div>
        {isAuthenticated ? (
          <Button variant="outline" onClick={logout}>
            Sign Out
          </Button>
        ) : (
          <Button asChild>
            <Link to="/login">Go to Login</Link>
          </Button>
        )}
      </header>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-medium">Auth State</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {isAuthenticated
            ? `Signed in as ${user?.email ?? "unknown user"}`
            : "Not signed in"}
        </p>
      </section>
    </main>
  )
}
