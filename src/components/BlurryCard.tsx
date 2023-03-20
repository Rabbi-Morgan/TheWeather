import Feels from './Icons/Feels'
import Pop from './Icons/Pop'
import Pressure from './Icons/Pressure'
import Visibility from './Icons/Visibility'
import Wind from './Icons/Wind'
import BlurDiv from './UI/BlurDiv'
import Humidity from './Icons/Humidity'



type Props = {
    icon: 'wind' | 'feels' | 'pressure' | 'pop' | 'visibility' | 'humidity',
    title: string,
    description: string | JSX.Element,
    info: string    
}

const Icons = {
    wind: Wind,
    feels: Feels,
    pressure: Pressure,
    pop: Pop,
    visibility: Visibility,
    humidity: Humidity
}
const BlurryCard = ({icon, title,info, description}:Props):JSX.Element => {
    const Icon= Icons[icon]
  return (
          <BlurDiv>
              <div className='flex'>
                <Icon/><span className='pl-2'>{title}</span>
                </div>
                <h1 className='mt-2 text-red-500 text-lg'>{info}</h1>
                <p className='mt-2 text-xs'>{description}</p>
          </BlurDiv>
  )
}

export default BlurryCard