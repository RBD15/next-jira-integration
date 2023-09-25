import { createContext } from "react"

const authContext = createContext({
  auth: {
    email: undefined,
    name: undefined
  }
})

export {authContext}