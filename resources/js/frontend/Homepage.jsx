import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import Camera from "./components/Camera";
import FileInput from "./components/FileInput";

export default function Homepage() {
    const [file, setFile] = useState(null);

    function takeFile(inputFile){
        setFile(inputFile);
    }

    function handleSubmit(event){
        event.preventDefault();
        let fileData = new FormData();
        fileData.append('picture', file);
        axios.post('/upload-picture', fileData)
        .then(response => {
            console.log(response);
        });
    }

    return (
        <div>
            <h1>Upload image via camera</h1>
            <Camera />
            <p>or</p>
            <h1>Browse Image</h1>
            <FileInput fileFunc={takeFile} />
            <button onClick={handleSubmit}>
                Upload
            </button>
        </div>
    );
}

if (document.getElementById('homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}