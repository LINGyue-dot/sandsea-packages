import React, { useState } from 'react'
import { useEffect } from 'react'
const ErrorComponent = () => {
  const [fakeArr, setFakeArr] = useState({})

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(fakeArr.lenght.name)
  }, [])
  return <div></div>
}

export default ErrorComponent
