import { MyComponentProps } from "../../types"




const BlurDiv = ({children}: MyComponentProps):JSX.Element => {
  return (
    <div className="text-xs font-bold text-center flex flex-col w-[140px] items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-4 mb-5 ">
        {children}
    </div>
  )
}

export default BlurDiv