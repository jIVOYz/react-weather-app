import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { describe, it, expect } from "vitest"
import CurrentWeather from "."

const current = {
  location: {
    name: "Lviv",
    region: "",
    country: "Ukraine",
    lat: 49.8333,
    lon: 24,
    tz_id: "Europe/Kiev",
    localtime_epoch: 1744124642,
    localtime: "2025-04-08 18:04",
  },
  current: {
    last_updated_epoch: 1744124400,
    last_updated: "2025-04-08 18:00",
    temp_c: 2.9,
    temp_f: 37.2,
    is_day: 1,
    condition: {
      text: "Moderate or heavy snow showers",
      icon: "//cdn.weatherapi.com/weather/64x64/day/371.png",
      code: 1258,
    },
    wind_mph: 13.4,
    wind_kph: 21.6,
    wind_degree: 354,
    wind_dir: "N",
    pressure_mb: 1020,
    pressure_in: 30.13,
    precip_mm: 0.25,
    precip_in: 0.01,
    humidity: 58,
    cloud: 100,
    feelslike_c: -1.8,
    feelslike_f: 28.7,
    windchill_c: -1.8,
    windchill_f: 28.7,
    heatindex_c: 2.9,
    heatindex_f: 37.2,
    dewpoint_c: -4.5,
    dewpoint_f: 24,
    vis_km: 7,
    vis_miles: 4,
    uv: 0.5,
    gust_mph: 19.8,
    gust_kph: 31.9,
  },
}

describe("Current weather component", () => {
  it("show correct data", () => {
    render(<CurrentWeather current={current} />)
    const temp_c = screen.getByTestId("temp_c")
    const feels_like = screen.getByTestId("feels_like")
    const condition_icon = screen.getByTestId("condition_icon")
    const condition_text = screen.getByTestId("condition_text")
    const country = screen.getByTestId("country")
    const location = screen.getByTestId("location")

    expect(temp_c).toHaveTextContent(String(current.current.temp_c))
    expect(feels_like).toHaveTextContent(String(current.current.feelslike_c))
    expect(condition_icon).toHaveAttribute("src", current.current.condition.icon)
    expect(condition_text).toHaveTextContent(current.current.condition.text)
    expect(country).toHaveTextContent(current.location.country)
    expect(location).toHaveTextContent(current.location.name)
  })
})
