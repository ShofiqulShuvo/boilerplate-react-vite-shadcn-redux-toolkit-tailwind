import { LoginForm } from "@/features/auth/components/LoginForm"

export function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-4">
      <section className="w-full rounded-xl border border-border bg-card p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Feature-based auth module example.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </section>
    </main>
  )
}
