import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export default async function Home() {
  const filePath = path.join(process.cwd(), 'src', 'content', 'assessment.md')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { content } = matter(fileContent)

  return (
    <div className="min-h-screen">
     <header className="sticky top-0 z-10 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            My Vercel Assessment Website
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
       <article className="prose prose-zinc lg:prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </main>
      
      <footer className="mx-auto max-w-4xl px-6 py-8 text-sm text-zinc-500">
        Built with Next.js & deployed on Vercel.
      </footer>
    </div>
  )
}

