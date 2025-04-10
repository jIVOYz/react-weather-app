export interface CachedObject<T> {
  data: T
  cachedAt: number
}

export function cachedFetch<T>(url: string): T | null {
  const expiry = 5 * 60

  let cached: CachedObject<T> = JSON.parse(localStorage.getItem(url)!)

  if (cached !== null) {
    let age = (Date.now() - cached.cachedAt) / 1000

    if (age < expiry) {
      return cached.data
    } else {
      localStorage.removeItem(url)
      return null
    }
  } else return null
}
