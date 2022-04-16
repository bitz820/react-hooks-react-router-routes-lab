import React from 'react'

function Director({ data }) {
    const renderList = data.movies.map(item => <li key={item}>{item}</li>)
    console.log(data)
    return (
        <>
            <h2>
                {data.name}
            </h2>
            <ul>
                <h3>Films</h3>
                {renderList}
            </ul>
        </>
    )
}

export default Director