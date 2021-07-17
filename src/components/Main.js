import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'

const Main = () => {
    const [cases, setcases] = useState('')
    const [recover, setrecover] = useState('')
    const [death, setdeath] = useState('')
    const [time, settime] = useState('')
    const [active, setactive] = useState('')

    axios.get('https://api.covid19india.org/data.json')
        .then(function (response) {
            setcases(response.data.statewise[0].confirmed)
            setdeath(response.data.statewise[0].deaths)
            setrecover(response.data.statewise[0].recovered)
            settime(response.data.statewise[0].lastupdatedtime)
            setactive(response.data.statewise[0].active)
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
    return (
        <>
            <h1 style={{ color: 'red', marginLeft: "37%", marginTop: "2%" }}>Covid19 Tracker</h1>
            <div className="box">
                <h1>Country</h1>
                <h2>India 🇮🇳</h2>
            </div>
            <div className="box">
                <h1>Total Cases</h1>
                <h2>{cases}</h2>
            </div>
            <div className="box">
                <h1>Total death</h1>
                <h2>{death}</h2>
            </div>
            <div className="box">
                <h1 >Total recover</h1>
                <h2>{recover}</h2>
            </div>
            <div className="box">
                <h1>Total Active</h1>
                <h2>{active}</h2>
            </div>
            <div className="box">
                <h1 >Total time</h1>
                <h2>{time}</h2>
            </div>
        </>
    )
}

export default Main;
