import { MyComponentProps } from '../../types';


const Section = ({ children }: MyComponentProps)=> {
  return <section className='flex justify-between text-zinc-700'>{children}</section>;
}
export default Section