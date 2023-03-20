import { feelsCool, getHumidityValue, getPop, getSunTime, getVisibilityValue, getWindDirection, readPressure } from '../helpers';
import { forecastType } from '../types'
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';
import BlurDiv from './UI/BlurDiv';
import Section from './UI/Section';
import BlurryCard from './BlurryCard';

type Props = {
  forecast: forecastType;
}

const Degree = ({temp}:{temp:number}):JSX.Element => {
  return <span>
    {temp}<sup>o</sup>
  </span>
}

const formDate = (dateFig : number): string => {
  const date = new Date(dateFig * 1000);

  const formatter = new Intl.DateTimeFormat('en-US', 
  {
    weekday: 'short',
    dayPeriod: 'long'
  });

  return formatter.format(date)
}
const Forecast = ({forecast}:Props):JSX.Element => {
  const today = forecast.list[0]
  return (
    <div className='w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
      <div className='mx-auto w-[300px]'>
        <section className='text-center'>
          <h2 className='text-2xl font-black'>
            {forecast.name} {' '}  
            <span className='font-thin'> 
              {forecast.country}
            </span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.floor(today.main.temp)}/>
          </h1>
          <p className='text-sm'>
            {today.weather[0].main} ( {today.weather[0].description} )
          </p>
          <p className="text-sm">
            H:<Degree temp={Math
            .ceil(today.main.temp_max)}/> L: <Degree temp={Math.floor(today.main.temp_min)}/>
          </p>
        </section>
        <section className='flex overflow-x-scroll mt-4 pb-2 mb-5'>

        {forecast.list.map((item, ind)=> <div className='inline-block items-center text-center w-[99px] flex-shrink-0
        ' key={ind}>
          <p className='text-sm'>{ind===0?"Now": formDate(item.dt)}</p>
          <img className='inline-block' alt={`weather-icon${item.weather[0].description}`} src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
          <p className='text-sm font-black'>
            <Degree temp={Math.round(item.main.temp)}/>
          </p>
        </div>)}
        </section>
        <Section>
              <BlurDiv> 
              <Sunrise/>
              <span className='mt-2 font-black text-lg'>
                {getSunTime(forecast.sunrise)}
              </span>
              </BlurDiv>
              <BlurDiv>
                <Sunset/>
                <span className='mt-2 font-black text-lg'>
                {getSunTime(forecast.sunset)}
              </span>
              </BlurDiv>
        </Section>
        <Section>
          <BlurryCard icon="wind" title="Wind" info={`${Math.round(today.wind.speed)}km/h`} description={`${getWindDirection(today.wind.deg)}, ${Math.round(today.wind.gust)} gusts ${today.wind.speed} km/h `}/>
          <BlurryCard icon="feels" title='Feels' info={`${Math.round(today
          .main.feels_like)}`} description={`${feelsCool(today.main.feels_like)}`}/>
        </Section>
        <Section>
          <BlurryCard icon='humidity' title="Humidity" info={`${Math.round(today.main.humidity)}%`} description={`${getHumidityValue(today.main.humidity)}`}/>
          <BlurryCard icon='pop' title="Presipitation" info={`${Math.round(today.pop)}%`} description={`${getPop(today.pop)}, ${today.weather[0].description}`}/>
        </Section>
        <Section>
          <BlurryCard icon='pressure' title='Pressure' info={`${today.main.pressure} hPa`} description={`${readPressure(today.main.pressure)}`}/>
          <BlurryCard icon='visibility' title='Visibility' info={`${today.visibility} km`} description={`${getVisibilityValue(today.visibility)}`}/>
        </Section>
      </div>
    </div>
  )
}

export default Forecast