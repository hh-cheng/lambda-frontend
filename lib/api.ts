import type { GitHubMeResponse, LoginByTokenResponse } from './types'

// const BASE_URL = 'https://huv3z8uax1.execute-api.us-east-1.amazonaws.com/dev'
const BASE_URL = 'http://localhost:3001'

/**
 * Get GitHub user information
 * @param token - GitHub token
 */
export async function getGitHubMe(token: string): Promise<GitHubMeResponse> {
  const url = new URL(`${BASE_URL}/github/me`)
  url.searchParams.append('token', token)

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Create or update user by GitHub token
 * @param token - GitHub token
 */
export async function loginByToken(
  token: string,
): Promise<LoginByTokenResponse> {
  const response = await fetch(`${BASE_URL}/github/login-by-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })

  if (!response.ok) {
    throw new Error(`Failed to login by token: ${response.statusText}`)
  }

  return response.json()
}
