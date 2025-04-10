import { useState, lazy } from "react"
import { Container, Flex } from "@radix-ui/themes"
import Form from "./components/Form"
const CurrentWeather = lazy(() => import("./components/CurrentWeather"))
import { Current } from "./models"

function App() {
  const [current, setCurrent] = useState<Current | null>(null)

  return (
    <Container size="3">
      <Flex direction="column" gapY="3">
        <Form setCurrent={setCurrent} />
        {current !== null && <CurrentWeather current={current} />}
      </Flex>
    </Container>
  )
}

export default App
