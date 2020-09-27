import React from 'react';
import Result from './Result';

function Results({ results, openPopup }) {
    console.log(results);
    return (
        <section className="results">
            {(results !== undefined) ? results.map(result => (
                <Result key={result.imdbID} result={result} openPopup={openPopup}/>
            )) : <h1 className="notfound">Nothing Found</h1>} 
        </section>
    );
}

export default Results;