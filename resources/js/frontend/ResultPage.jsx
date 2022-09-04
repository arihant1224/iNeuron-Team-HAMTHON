import React from 'react';
import ReactDOM from 'react-dom';

export default function ResultPage() {
    return (
        <div>
            This is result page
        </div>
    );
}

if (document.getElementById('result-page')) {
    ReactDOM.render(<ResultPage />, document.getElementById('result-page'));
}