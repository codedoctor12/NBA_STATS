import React from 'react'
import {Button,Table} from '@trussworks/react-uswds';
import {useState,useEffect} from 'react'
import PlayerInfo from './all_seasons.csv'
export default function PopUp({playerId})
{
    console.log({playerId})
    const[stats,setStats] = useState()
    if(playerId!=null){
    var name = playerId.fname+" "+playerId.lname;
    const player = PlayerInfo.find((element) => element.player_name==name);
    if(playerId!=undefined)
    {
        return (
            <>
           <div>
            <p>Player Name: {player.player_name}</p>
            <p>College: {player.college}</p>
            <p>Country: {player.country}</p>
            <p>Draft Year: {player.draft_year}</p>


            <p>height: {playerId.height}</p>
            <p>weight: {playerId.weight}</p>
            <p>Game points: {player.gp} </p>
            <p>Avg ppg: {player.pts} </p>
            <p>Rebounds: {player.reb} </p>


            {/* college,country,draft_year */}
            {/* gp,pts,reb,ast,net_rating,oreb_pct,dreb_pct,usg_pct,ts_pct,ast_pct */}

            
           </div>
           <Button data-close-modal='true'>close</Button>

            </>
        )
    }
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