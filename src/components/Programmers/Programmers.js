import React, { useEffect, useState } from 'react';
import './Programmers.css';
import Programmer from '../Programmer/Programmer';

const Programmers = () => {

    const [programmers, setProgrammers] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/sabbirahammadProf/data/main/fakedata.JSON')
        .then(res => res.json())
        .then(data => setProgrammers(data))
    }, []);

    return (
        <div className="container">
            <div className="grid">
                {
                    programmers.map((programmer)=> <Programmer key={programmer.id} programmer={programmer}/>)
                }
            </div>
        </div>
    );
};

export default Programmers;