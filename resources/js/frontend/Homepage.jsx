import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import Camera from "./components/Camera";
import FileInput from "./components/FileInput";

export default function Homepage() {
    return (
        <div>
            <h1>Upload image via camera</h1>
            <Camera />
            <p>or</p>
            <h1>Browse Image</h1>
            <FileInput />
        </div>
    );
}

if (document.getElementById('homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}