import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from "./components/Gallery";

export default function ResultPage() {
    return (
        <div>
            <div className="ml-5 mt-4 mb-5">
                <h1 className="font-bold text-2xl mb-2 underline">Data Evaluation</h1>
                <h1 className="text-xl">
                    <span className="font-semibold">Predicted Output:</span> <span className="font-bold">{tagName}</span>
                </h1>
                <h1 className="text-xl">
                    <span className="font-semibold">Accuracy:</span> <span className="font-bold">{probability + " %"}</span>
                </h1>
            </div>
            <Gallery />
        </div>
    );
}

if (document.getElementById('result-page')) {
    ReactDOM.render(<ResultPage />, document.getElementById('result-page'));
}