import { useState } from "react"
import { fetchdata } from '../server/fetchdata_seach'

export default function Searchbar({ setfetched, setweather_report, setsearchbar }) {
    const [options, setoptions] = useState([{ id: 2801268, name: 'london', country: 'united kingdom', region: "paris" }])
    const [open, setopen] = useState(false)
    const [formdata, setformd] = useState('')
    const [loading, setloading] = useState(false);

    const handleinputclick = (event) => {
        setopen(prev => !prev)
    }
    const handleinputchange = (event) => {
        setformd(event.target.value)
        if (formdata.length >= 2) {
            fetchdata("search.json", formdata)
                .then(returnoptions => {
                    const mainoptions = returnoptions.map(item => ({
                        id: item.id,
                        name: item.name,
                        country: item.country,
                        region: item.region
                    }));
                    setoptions(mainoptions)
                    // Use the transformed data here
                })
                .catch(error => {
                    console.log(error);
                    // Handle errors here
                });
        }
    }
    const handleoptionClick = (event) => {
        const clickedoption = event.target.getAttribute('data_value')
        setloading(true)
        fetchdata("current.json", clickedoption)
            .then(options => {
                setweather_report(options)
            })
            .catch(error => {
                console.log(error);

            });
        setloading(false)
        setfetched(true)
        setsearchbar(prev => !prev)
        setopen(false)
    }
    const styledoptions = options.map(option => {
        return <div
            key={option.id}
            onClick={handleoptionClick}
            data_value={option.region}
            className=" drop-shadow-2xl mt-1  rounded-md text-xl  cursor-pointer h-full p-3 hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white ">
            {`${option.name},${option.region},${option.country}`}
        </div>
    })
    return (

        <div className="bg-slate-100 rounded-3xl pt-10 pl-3 pr-3 pb-40">
            <section>            <label htmlFor="location">
                <input
                    id="location"
                    placeholder="enter location to search"
                    className=" w-full text-xl border pl-6 h-12 border-gray-300 focus:outline-none  focus:border-blue-500 focus:ring-blue-500 focus:ring-2 rounded-md"
                    onClick={handleinputclick}
                    onChange={handleinputchange}
                    value={formdata}
                />
            </label>
                {loading && 'Loading...'}
                {open && styledoptions}
            </section>       </div>
    )
}