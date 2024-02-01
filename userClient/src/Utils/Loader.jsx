import React, { useEffect, useState } from 'react'
import { Fragment, useRef } from 'react'
import axios from 'axios'
import "./Loader.css"
const Loader = () => {
    const body = useRef();
    const [randomJoke, setRandomJoke] = useState("");
    const fetchJoke = async () => {
        let joke = await axios.get('https://api.chucknorris.io/jokes/random?category=food').then(data => data.data)
        let transformJoke = joke.value.replace(/Chuck Norris/g , "Switty");        
        setRandomJoke(transformJoke);
    }
    useEffect(() => {
        fetchJoke();
    }, [])
    return (
        <Fragment>
            <div className="container-fluid d-flex justify-content-center align-items-center bg-light" ref={body} style={{ height: "10rem" }}>
                <div className="spinner mt-5 d-block">
                    <svg viewBox="25 25 50 50" className='mt-5'>
                        <circle cx="50" cy="50" r="20" fill="none" className="path"></circle>
                    </svg>
                    <div className="loading_text text-gray">
                        {randomJoke}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Loader