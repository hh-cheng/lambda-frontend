// GitHub API Types
export interface GitHubUser {
  id: number
  login: string
  name: string
  email: string
  avatar_url: string
  html_url: string
}

export interface GitHubMeResponse {
  success: boolean
  githubUser: GitHubUser
}

export interface User {
  id: string
  name: string
  email: string
  github_name: string
  github_profile_url: string
  avatar_url: string
}

export interface LoginByTokenResponse {
  success: boolean
  user: User
}
