import React, { useState } from 'react'

//declare object that can be used inside the props interface
interface Person {
  firstName: string
  lastName: string
}

//create object interface for props
interface Props {
  text: string
  ok?: boolean
  i?: number
  fn?: (bob: string) => string
  person: Person
}

//status interface
interface Status {
  text: string
}

//access props by destructuring
export const TextInput: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState<number | null | undefined>(0)
  const [status, setStatus] = useState<Status>({text:'hello'})
  
  setCount(null)
  setStatus({text:'TS Rocks 🤘'})

  return (
    <div>{text}</div>
  )
}
