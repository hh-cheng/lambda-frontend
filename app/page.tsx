import { GitHubForm } from '@/components/github-form'

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
            GitHub API Integration
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Interact with GitHub APIs using your personal access token
          </p>
        </div>
        <GitHubForm />
      </div>
    </div>
  )
}
