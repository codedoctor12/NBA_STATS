import React from 'react'
import {useState,useRef } from 'react'
import {  ModalToggleButton, Modal, ModalHeading} from '@trussworks/react-uswds';
import PopUp from './PopUp';
import {Card} from 'flowbite-react';
import CSV from './players.csv';
import './Grid.css'
const gallery = Object.values(import.meta.glob('@assets/img/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, query: '?url',import: 'default' }))
const tempImage = gallery[0].substring(1,7)
console.log(tempImage)
var temp = 'assets/101108-DjOO6dK8';
const pre = gallery[0].substring(0,7);
const suff = gallery[0].substring(temp.indexOf("-"),temp.length)

console.log("pre "+pre+" suff "+suff);
export default function NbaStats(){
    const [modalData, setModalData] = useState(undefined);
    const modalRef = useRef()
    const rows = 5;
    const cols = 50;
    const grid = [];   
        const url = 'https://api.balldontlie.io/v1/stats?seasons[]=2023';
        const urlh = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'
        const suffix = '.png'
        for (let i = 0; i < rows; i++) {
          const row = [];
          for (let j = 0; j < cols; j++) {
            row.push(<div className="card" key={`${i}-${j}`}>
              <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      renderImage={() => <img width={50} height={50} src={pre+ CSV[j].playerid+suff}  alt="image 1" />}
       >
       
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {CSV[j].fname+" "+CSV[j].lname}
      {/* <img align="center" src={dir.team.logo} width='100px'/> */}
      </h5>
      <ModalToggleButton onClick={()=>setModalData(CSV[j])} modalRef={modalRef} opener>{CSV[j].fname+" "+CSV[j].lname}'s stats</ModalToggleButton>
    </Card>
              </div>);
          }
          grid.push(<div className="row" key={i}>{row}</div>);
        }

    return(
      <>
      <div className="grid">{grid}</div>
      <Modal  aria-modal='true' id='movie-form-modal' ref={modalRef}>
   <ModalHeading id='movie-form-modal-heading'>Player Stats</ModalHeading>
   <PopUp playerId={modalData} />
   </Modal>
      </>
    )
               

    


}


