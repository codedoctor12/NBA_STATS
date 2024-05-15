import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { Table, ModalToggleButton, Modal, ModalHeading} from '@trussworks/react-uswds';
import {Card} from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import PopUp from './PopUp';
import CardMedia from '@mui/material/CardMedia';


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
                <strong>
                    <th className="text-centered">Welcom to my Fantasy NBA Site!</th>
                    </strong>
                  
               </tr>
           </thead>
           <tbody>
           
               {values.map((dir) => {
                   return (
                       <tr  dir={dir} key={dir.id}> { }
                          < Card sx={{ maxWidth: 500 }}>
                            {}
                          <CardContent>
                        
                                <Typography gutterBottom variant="h5" component="div">
                                {dir.player.firstname+" ' "+dir.player.lastname}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                            

                           <br></br>

                          
                           <br></br>
                           <CardMedia
                                sx={{ height: 300, width: 250 }}

                                title= {dir.team.name}
                                image={dir.team.logo}
                                
                            />
                                </Typography>
                            </CardContent> 
                            <ModalToggleButton onClick={()=>setModalData(dir)} modalRef={modalRef} opener>{dir.player.firstname}'s stats</ModalToggleButton>
                            <CardActions>
                            

                            </CardActions>
                            

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