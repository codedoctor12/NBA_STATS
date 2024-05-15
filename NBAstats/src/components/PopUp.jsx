import React from 'react'
import {Button,Table} from '@trussworks/react-uswds';
import {useState,useEffect} from 'react'
export default function PopUp({playerId})
{
    console.log({playerId})
    const[stats,setStats] = useState()
    if(playerId!=undefined)
    {
        return (
            <>
           <div>
            <p>Points: {playerId.points}</p>
            <p>rebounds: {playerId.offReb+playerId.defReb}</p>
            <p>assists: {playerId.assists}</p>
            <p>blocks:{playerId.blocks}</p>
            <p>blocks:{playerId.turnovers}</p>


            
           </div>
           <Button data-close-modal='true'>close</Button>

            </>
        )
    }
    const t = false
    var getInitalData=[]
    
    console.log(getInitalData)
    return (
        <>
       <div>
        <h1></h1>
       </div>
       <Button data-close-modal='true'></Button>
        </>
    )
}