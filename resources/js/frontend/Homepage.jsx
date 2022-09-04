import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import Camera from "./components/Camera";
import FileInput from "./components/FileInput";

export default function Homepage() {
    return (
        <div className="text-center pt-8">
            <h1 className="font-bold text-4xl mb-4">Welcome to Foodies' Theasaurus</h1>
            <h1 className="font-semibold text-xl mb-2">Upload image via camera</h1>
            <Camera />
            <p className="font-semibold mt-4 mb-4">or</p>
            <h1 className="font-semibold text-xl mb-2">Browse image to upload</h1>
            <FileInput />
        </div>
    );
}

if (document.getElementById('homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}