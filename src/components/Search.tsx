import { ChangeEvent } from "react"
import { optionType } from "../types"


type Props = {
    term: string,
    options: [],
    onInputChange: (e: ChangeEvent<HTMLInputElement>)=> void,
    onOptionSelect: (option: optionType)=> void,
    onSubmit: ()=> void,

}
const Search = ({term, options, onSubmit, onInputChange, onOptionSelect }: Props): JSX.Element => {
  return (
    <section className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded w-full md:max-w-[500px] p-4 flex flex-col text-center items-center h-full md:px-10 lg:p-24 lg:h-[500px] text-zinc-700 justify-center">
       <h1 className="text-4xl font-thin ">Weather <span className="font-black">Forecast</span> </h1>
       <p className="text-sm mt-2">Enter below a place you want to know the weather of and select an option from the dropdown</p>
       <div className="flex relative mt-10 md:mt-4">       <input type="text" name="" value={term} className="px-2 py-1 rounded-l-md border-2 border-white focus:outline-zinc-400" id="" onChange={onInputChange}/>
       <button onClick={onSubmit} className=" rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer bg-gradient-to-br from-rose-400 to-lime-400 ">Search</button>
       <ul className="bg-white absolute top-9 ml-1 rounded-b-md">
        {options.map((option: optionType, ind: number) => 
        <li key={`${option.name}_${ind}`} className='cursor-pointer' data-option={option}>
          <button onClick={()=>onOptionSelect(option)} className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1">
            {option.name}
          </button>
          </li>)}
      </ul>
       </div>
      </section>
  )
}

export default Search