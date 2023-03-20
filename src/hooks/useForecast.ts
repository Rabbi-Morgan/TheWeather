import { ChangeEvent, useEffect, useState } from "react"
import { optionType, forecastType } from "../types/index";

const useForecast = ()=>{
const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<[]>([]);
  // const [isOpen, setIsOpen] = useState<boolean>(false)
  const [city, setCity] = useState<optionType | null>(null)
  const [forecast, setForecast] = useState<forecastType | null>(null)


  const getSeacrchOptions = (value: string) => {

    fetch( `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=8&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(data => setOptions(data))  
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)

    if (value === '') return

    getSeacrchOptions(value)
  }

  const getForecast = (city: optionType) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&units=metric&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
        const forecastData = {
            ...data.city,
            list: data.list
        }
        setForecast(forecastData)
    })
  }

  const onSubmit = () => {
    if(!city) return

    getForecast(city)
  }

  const onOptionSelect = (option: optionType) => {
    setCity(option)

  }

  useEffect(()=>{
    if(city) {
      setTerm(city.name)
      setOptions([])
    }
  },[city])

  return {
    term,
    options,
    forecast,
    onSubmit,
    onInputChange,
    onOptionSelect
  }
}
  export default useForecast