'use client'
import Image from "next/image"
import { Roboto_Slab, Source_Serif_Pro } from "next/font/google";
const robo = Roboto_Slab({
    subsets: ['latin']

})
const source = Source_Serif_Pro({
    subsets: ['latin'],
    weight: '600',
})
export default function Report({ weather_report }) {
    const { location, current } = weather_report
    return (
        <div className={robo.className}>
            <div className="relative left-96 flex flex-col items-center rounded-md pt-12 pr-20 pl-20 pb-12 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                <div>{current?.condition.text}</div>
                <div className="flex flex-row justify-between items-center">
                    <div>{current && <Image
                        src={`https://${current.condition.icon}`}
                        width={90}
                        height={90}
                        className=" object-contain"
                        alt="unable to detect location"
                    />}</div>
                    <div className="text-2xl"> {current?.temp_c}&deg;C</div>
                </div>
                <div className={source.className}>
                    <div>Time:<div className="text-2xl">{location?.localtime}</div></div>
                    <div>region:<div className="text-2xl">{location?.region}</div></div>
                    <div>country:<div className="text-2xl">{location?.country}</div></div>
                </div>
            </div>
        </div>
    )
}
{/* <div className="flex flex-col mb-40">
    <div className="flex flex-col">

    </div>
    <div className="flex flex-col">
        {`,
             
            
           `}
    </div>
</div> */}