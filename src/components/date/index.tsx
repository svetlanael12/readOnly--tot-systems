import {FC, useEffect, useState} from 'react'

interface IDateProps {
  date: number
}

const DateComponent: FC<IDateProps> = ({date}) => {
  const [dateState, setDateState] = useState('')

  useEffect(() => {
    const data = new Date(date)
    const minute = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    const hours = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()
    setDateState(`${data.getDate()}.${data.getMonth() + 1}.${data.getFullYear()} ${hours}:${minute}`)
  }, [])

  return (
    <>
      {dateState}
    </>
  )
}
export default DateComponent