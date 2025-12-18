'use client'

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { getGitHubMe, loginByToken } from '@/lib/api'
import type { GitHubMeResponse, LoginByTokenResponse } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Github, Loader2, User, CheckCircle2 } from 'lucide-react'

export function GitHubForm() {
  const [token, setToken] = useState('')
  const [githubMeData, setGithubMeData] = useState<GitHubMeResponse | null>(
    null,
  )
  const [loginData, setLoginData] = useState<LoginByTokenResponse | null>(null)

  const getGitHubMeMutation = useMutation({
    mutationFn: (token: string) => getGitHubMe(token),
    onSuccess: (data) => {
      setGithubMeData(data)
    },
  })

  const loginByTokenMutation = useMutation({
    mutationFn: (token: string) => loginByToken(token),
    onSuccess: (data) => {
      setLoginData(data)
    },
  })

  const handleGetGitHubMe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!token.trim()) return
    getGitHubMeMutation.mutate(token)
  }

  const handleLoginByToken = (e: React.FormEvent) => {
    e.preventDefault()
    if (!token.trim()) return
    loginByTokenMutation.mutate(token)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-6 w-6" />
            GitHub API Integration
          </CardTitle>
          <CardDescription>
            Enter your GitHub token to interact with the APIs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="token">GitHub Token</Label>
            <Input
              id="token"
              type="password"
              placeholder="Enter your GitHub token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="font-mono"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleGetGitHubMe}
              disabled={!token.trim() || getGitHubMeMutation.isPending}
              className="flex-1"
              variant="default"
            >
              {getGitHubMeMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Github className="mr-2 h-4 w-4" />
                  Get GitHub Info
                </>
              )}
            </Button>

            <Button
              onClick={handleLoginByToken}
              disabled={!token.trim() || loginByTokenMutation.isPending}
              className="flex-1"
              variant="secondary"
            >
              {loginByTokenMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <User className="mr-2 h-4 w-4" />
                  Login / Create User
                </>
              )}
            </Button>
          </div>

          {(getGitHubMeMutation.error || loginByTokenMutation.error) && (
            <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
              <p className="font-semibold">Error:</p>
              <p>
                {getGitHubMeMutation.error?.message ||
                  loginByTokenMutation.error?.message}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {githubMeData && (
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-5 w-5" />
              GitHub User Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              {githubMeData.githubUser.avatar_url && (
                <img
                  src={githubMeData.githubUser.avatar_url}
                  alt={githubMeData.githubUser.name}
                  className="w-20 h-20 rounded-full"
                />
              )}
              <div className="space-y-2 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">ID</p>
                    <p className="font-semibold">
                      {githubMeData.githubUser.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Login</p>
                    <p className="font-semibold">
                      {githubMeData.githubUser.login}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold">
                      {githubMeData.githubUser.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">
                      {githubMeData.githubUser.email}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-muted-foreground">Profile URL</p>
                    <a
                      href={githubMeData.githubUser.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      {githubMeData.githubUser.html_url}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {loginData && (
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <CheckCircle2 className="h-5 w-5" />
              User Created/Updated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              {loginData.user.avatar_url && (
                <img
                  src={loginData.user.avatar_url}
                  alt={loginData.user.name}
                  className="w-20 h-20 rounded-full"
                />
              )}
              <div className="space-y-2 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">User ID</p>
                    <p className="font-semibold">{loginData.user.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold">{loginData.user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{loginData.user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub Name</p>
                    <p className="font-semibold">
                      {loginData.user.github_name}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-muted-foreground">
                      GitHub Profile
                    </p>
                    <a
                      href={loginData.user.github_profile_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      {loginData.user.github_profile_url}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
