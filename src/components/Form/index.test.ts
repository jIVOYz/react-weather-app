import { describe, it, expect } from "vitest"
import { fetchWeather } from "../../utils/fetch"

describe("show an error", () => {
  it("shows an error if city is not found", async () => {
    await expect(fetchWeather("#g$gjdkfjyi5$gjtkfh(*)")).rejects.toThrow("No matching location found")
  })
})
