import type { Metadata } from 'next'
import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'

export const metadata: Metadata = {
  title: 'Fernando Peña',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="bg-[#333] text-white max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link 
            href="/" 
            className="
              bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 
              bg-clip-text 
              text-transparent 
              text-lg 
              font-bold
            "
          >
            Fernando
          </Link>
          <nav>
            <ul className="flex items-center gap-5 text-sm font-bold">
              {pages.map((page) => (
                <li key={page._id}>
                  <Link href={`/${page.slug}`} className="hover:underline">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="py-20">
          {children}
        </main>
      </body>
    </html>
  )
}
