import React from 'react';

//The Css file will be injected directly to index.html file by the help of Webpack inbuilt library
import './Person.css'


const person = (details) => {
    return (
        <div className='Person'>
            <p onClick={details.click}>I'm {details.name} and I am {details.age}!!</p>

            <div>
                {details.children}
            </div>
            <input type='text' onChange={details.changed} value={details.name}></input>

        </div>
    )
}



export default person;


/* Comments
1. details.name --> will put names in text boxes. However, we can only edit manu name because onchange even is handled in for that
only

*/