import React from 'react';
import ReactDOM from 'react-dom';

export default function Homepage() {
    return (
        <div>
            <h1>This is homepage</h1>
            <button className="bg-red-600 text-white p-4">Push</button>
        </div>
    );
}

if (document.getElementById('homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}