import { Inter, Josefin_Sans, Anton } from "next/font/google"
const Josefin = Josefin_Sans({
    subsets: ['vietnamese',],
})
const anton = Anton({
    weight: '400',
    subsets: ['vietnamese', 'latin'],
})
export default function Body() {
    return (
        <div className={`${anton.className}${Josefin.className}`}>
            <div className='flex flex-col justify-evenly transition-all delay-1000'>
                <div className='flex flex-col justify-between sm:flex-row'>
                    <span id='explore' className='text-7xl font-extrabold bg-clip-text text-transparent 
                bg-gradient-to-r from-pink-500 to-violet-500 transition-all'>
                        EXPLORE!
                    </span>
                    <span id='discover' className='text-7xl font-extrabold' >
                        DISCOVER!
                    </span>
                    <span id='unevil' className=' text-7xl font-extrabold transition-all'>
                        UNEVIL!
                    </span></div>
                <div className='mt-12 text-3xl font-serif transition-all'>
                    Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating, there is really no such thing as bad weather, only different kinds of good weather.
                </div>
                <div className=' text-center mt-14 drop-shadow-2xl text-3xl font-bold'>
                    DESIGNED BY :YASWANTH KOSURU
                </div>
            </div></div>
    )
}