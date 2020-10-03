import React from 'react';
import './App.css';
import Animation from './Animation';
import Mountains from './Mountains';

function App() {
    return (
        <div className="App">
            <div className="flying-clouds">
                <Animation
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.35"
                    ratioY="0.32"
                />
                <Animation
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.25"
                    ratioY="0.21"
                />
                <Animation
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.28"
                    ratioY="0.34"
                />
                <Animation
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.52"
                    ratioY="0.49"
                />
                <Animation
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.19"
                    ratioY="0.63"
                />
                <Animation
                    className="cloud"
                    src="/cloud.png"
                    ratioX="0.47"
                    ratioY="0.25"
                />
                <Animation
                    className="balloon"
                    src="/air-balloon-big.png"
                    ratioX="0.07"
                    ratioY="0.3"
                />
                <Animation
                    className="balloon"
                    src="/air-balloon-mid.png"
                    ratioX="0.12"
                    ratioY="0.4"
                />
                <Animation
                    className="balloon"
                    src="/air-balloon-small.png"
                    ratioX="0.15"
                    ratioY="0.5"
                />
                <Mountains
                    className="mountain-left"
                    src="/mountain1.png"
                />
                <Mountains
                    className="mountain-right"
                    src="/mountain2.png"
                />
                <Mountains
                    className="sun"
                    src="/sun.png"
                />
            </div>
        </div>
    );
}

export default App;
