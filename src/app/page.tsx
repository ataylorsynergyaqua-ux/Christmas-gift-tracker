"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <main style={{ padding: 24 }}>
      {!session ? (
        <button onClick={() => signIn("google")}>
          Login with Google
        </button>
      ) : (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>
            Logout
          </button>
        </div>
      )}
    </main>
  )
}
