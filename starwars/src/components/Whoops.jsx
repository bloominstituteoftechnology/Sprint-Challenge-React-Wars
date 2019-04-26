import React from 'react'
import '../App.css'

export default function Whoops(props) {

    return (
        <div>
            <h1>Whoops, {props.status || 500}</h1>
            <p>
                My bad bro, this app should've been written in a more robust language that doesn't have runtime errors (*cough* ELM *sneeze*), but my instructors made me do it in a flaky language...

                soo, again I'm sorry for providing an explosive user experience for you.
                Email me at <strong class="red-text">mosamuel98@gmail.com</strong> if you need any help or support.
            </p>
        </div>
    )
    
}