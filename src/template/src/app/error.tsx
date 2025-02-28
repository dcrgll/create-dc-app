'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <main className="bg-background flex min-h-screen w-full flex-col items-center justify-center">
      woops!
      <Link className="underline" href="/">
        take me home
      </Link>
    </main>
  )
}
