import { ReactNode } from "react";

export type optionType = {
    name: string,
    lon : number,
    lat: number
}
export type MyComponentProps = {
  children: ReactNode;
};

export type forecastType = {
    name: string,
    country: string,
    sunrise: number,
    sunset: number,
    list: [
        {
            dt: number,
            main: {
                feels_like: number,
                humidity: number,
                pressure: number,
                temp: number,
                temp_max: number,
                temp_min: number
            }
            weather: [
                {
                    main: string,
                    description: string,
                    icon: string
                }
            ]
            wind: {
                speed: number,
                gust: number,
                deg: number
            }
            clouds: {
                all: number
            }
            pop: number, 
            visibility: number
        }
    ]  
}