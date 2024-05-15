import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { Table, ModalToggleButton, Modal, ModalHeading} from '@trussworks/react-uswds';
import { Card } from "flowbite-react";

import PopUp from './PopUp';


export default function NbaStats(){
    const [values,setValues] = useState([]);
    const [modalData, setModalData] = useState(undefined);
    const modalRef = useRef()
        const url = 'https://api-nba-v1.p.rapidapi.com/players/statistics?game=12483&season=2023';
        useEffect(()=>{
        fetch(url,{
            method:'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_NBA_KEY,
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
                }
            })  
            .then(data => data.json())
            .then(returnedData => {
                console.log(returnedData.response)
                setValues(returnedData.response);
            
            })
            .catch(error => console.log(error));
        },[]);
    
   



    return(
        <>
        {/*  */}
        <Table striped fullWidth className="bg-primary-lighter">
    <thead>
        <tr>
           
        </tr>
    </thead>
    <tbody>
        {values.map((dir) =>{
      return (  
      <tr key={dir.id} dir={dir}>{/** need to set key so react knows which elements in the DOM to modify  */}
            <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      renderImage={() => <img width={250} height={250} src={dir.team.logo}alt="image 1" />}

       >
        
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {dir.player.firstname+" ' "+dir.player.lastname}
      {/* <img align="center" src={dir.team.logo} width='100px'/> */}
      </h5>
      <ModalToggleButton onClick={()=>setModalData(dir)} modalRef={modalRef} opener>{dir.player.firstname}'s stats</ModalToggleButton>

    </Card>
        
        </tr>
      );
})}
        
    </tbody>
</Table>
   <Modal  aria-modal='true' id='movie-form-modal' ref={modalRef}>
   <ModalHeading id='movie-form-modal-heading'>Player Stats</ModalHeading>
   <PopUp playerId={modalData} />
   </Modal>
       
       </>
    )


}