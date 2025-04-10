import { Box, Text, Button, Flex, TextField } from "@radix-ui/themes"
import { ChangeEvent, FormEvent, useState } from "react"
import { cachedFetch } from "../../utils/cache"
import axios, { AxiosError, AxiosResponse } from "axios"
import { Current } from "../../models"
import { fetchWeather } from "../../utils/fetch"

interface Props {
  // onSubmit: (e: FormEvent<HTMLFormElement>) => void
  setCurrent: Function
  // loading: boolean
}

function Form({ setCurrent }: Props) {
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [location, setLocation] = useState<string>("")

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      let data = await fetchWeather(location)
      setCurrent(data)
      setError("")
    } catch(err) {
      console.error(err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Flex direction="column">
      <Box asChild width="100%">
        <form onSubmit={onSubmit}>
          <TextField.Root
            disabled={loading}
            placeholder="City"
            size="2"
            required={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value.trim())}
          >
            <TextField.Slot side="right" pr="0">
              <Button size="2" disabled={loading} data-testid="submit_btn">
                Search
              </Button>
            </TextField.Slot>
          </TextField.Root>
        </form>
      </Box>
      <Text data-testid="error_message" color="red">
        {error}
      </Text>
    </Flex>
  )
}

export default Form
