import axios, { AxiosError, AxiosResponse } from "axios"
import { cachedFetch } from "./cache"
import { Current } from "../models"

export async function fetchWeather(
  location: string,
): Promise<Current> {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=\\${location.toLowerCase().trim()}`

    let isCached = cachedFetch<Current>(URL)

    if (isCached !== null) {
      return isCached
    } else {
      const data: AxiosResponse<Current> = await axios.get(URL)
      localStorage.setItem(URL, JSON.stringify({ data: data.data, cachedAt: Date.now() }))
      return Promise.resolve(data.data)
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      return Promise.reject(err?.response?.data.error.message)
    }
  }
}
