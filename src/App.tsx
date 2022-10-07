import { useState } from 'react'
import { Button } from './components/Button'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button color='primary'/>
      <Button color='secondary' />
      <Button color='danger' />
      <Button color='success' />
      <Button />
    </>
  )
}
