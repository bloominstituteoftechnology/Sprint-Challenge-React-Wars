import React from 'react';
import {render} from 'react-dom';
import './index.css';

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import App from './App';
import Whoops from './components/Whoops';



// Create a client engine instance
const engine = new Styletron();

try {
    // Provide the engine to the app
    render(
    <StyletronProvider value={engine}>
      <App />
    </StyletronProvider>
  );

  console.warn('countdown till explosion: 5 seconds', )
  blowUpAppAfter(5000) // this app will crash in 5 seconds
  
} catch(e) {
    try {
        console.error(e)
        render(<App />, document.getElementById('backup'));
    }  catch(e) {
        console.error(e)
        render(<Whoops status={501} />, document.getElementById('fireSquad'))
    }
}


function blowUpAppAfter(ms) {
    return setTimeout(tick, ms)
}

function tick(countdown) {
    var counter = countdown;
    var nuke = setInterval(function(){
        console.log(counter);
        counter--

        switch(counter) {
            case 3000:
            case 3: 
            console.warn('3')

            case 2000:
            case 2: 
            console.warn('1')

            case 1000:
            case 1: 
            console.warn('1')

            default: 
                console.log('eminent death approaching...')
        }
        
        if (counter === 0) {
            console.error("Welp, this is the end. Goodbye.");
            clearInterval(nuke);

            console.log('*sees the light*')

            throw new Error('blowing up your app...')
        }
    }, 1000);   
}






