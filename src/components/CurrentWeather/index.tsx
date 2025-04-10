import { Box, Flex, Text, Tooltip } from "@radix-ui/themes"
import styled from "styled-components"
import { Current } from "../../models"
import { memo } from "react"

interface Props {
  current: Current
}

const Card = styled(Flex)`
  background-color: var(--accent-3);
  border-radius: var(--radius-2);
`

const CurrentWeather = memo(function ({ current }: Props) {
  return (
    <Card p="2" height="18rem" width={{ initial: "100%", sm: "22rem" }} direction="column" gap="3">
      <Flex justify="between">
        <Flex direction="column">
          <Text size="6" weight="medium" data-testid="location">
            {current.location.name}
          </Text>
          <Text data-testid="country">{current.location.country}</Text>
        </Flex>
        <Box width="100px" height="100px">
          <img src={current.current.condition.icon} style={{ width: "100%" }} data-testid="condition_icon" />
        </Box>
      </Flex>
      <Box mb="auto">
        <Flex gap="2" align="center" mb="2" wrap="wrap" justify="between">
          <Flex direction="column">
            <Text size="4" weight="bold" data-testid="temp_c">
              {current.current.temp_c}℃
            </Text>
            <Text size="3" weight="medium" data-testid="condition_text">
              {current.current.condition.text}
            </Text>
            <Text size="2" weight="regular" data-testid="feels_like">
              Feels like {current.current.feelslike_c}℃
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Text weight="regular" size="2">
        Last updated: {current.current.last_updated}
      </Text>
    </Card>
  )
})

export default CurrentWeather
