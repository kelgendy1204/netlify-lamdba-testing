import React, { useEffect } from 'react';
import axios from 'axios';
import Login from './login';

function App() {
    useEffect(() => {
        axios.get('/.netlify/functions/hello').then(({ data }) => console.log(data));
    }, []);

    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
