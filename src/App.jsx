import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@trussworks/react-uswds/lib/uswds.css';
import{Title, Header, PrimaryNav} from '@trussworks/react-uswds'
import{BrowserRouter, Link, Route,Routes} from 'react-router-dom'
import {GridContainer,Grid,Button, ModalToggleButton,Modal,ModalHeading} from '@trussworks/react-uswds';

import NbaStats from './components/NbaStats'
import Upload from './components/Upload';
import Navbar from './components/NavBar';
function App() {
  
  return (
    <>
   
        <Navbar/>
        <NbaStats />
            

        </>
  )
}

export default App
