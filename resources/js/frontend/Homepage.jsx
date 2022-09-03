import React from 'react';
import ReactDOM from 'react-dom';
import Camera from "./components/Camera";

export default function Homepage() {
    return (
        <div>
            <Camera />
        </div>
    );
}

if (document.getElementById('homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}