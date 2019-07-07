import React from 'react';
import {robots} from './Robots';
import Card from './Card';

const Cardlist=({robots})=>{    
    return(
        <div>
        {
            robots.map((user,i)=>{
            return (
            <Card
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                username={robots[i].username } 
                email={robots[i].email}
            />
        );
        })
        }       
        </div>
    );
}

export default Cardlist;