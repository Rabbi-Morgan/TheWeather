import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
const App = () : JSX.Element => {
 const {term, options, forecast, onSubmit, onInputChange, onOptionSelect} = useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast?<Forecast forecast={forecast}/>:<Search term={term} options={options} onSubmit={onSubmit} onOptionSelect={onOptionSelect} onInputChange={onInputChange}/>}
    </main>
  )
}

export default App
