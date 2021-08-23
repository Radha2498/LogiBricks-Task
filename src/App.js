import React from 'react'

import ReactDOM from 'react-dom';
import Card from '../src/Components/Card';
import '../src/styles.css'

export default function App() {
    return (
        <div>

          <Card />

        </div>
    )
}

const rootElemet =  document.getElementById("root");
ReactDOM.render(<App />,  rootElemet);