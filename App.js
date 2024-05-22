import './App.css';
import React from "react";
 //import ClippedDrawer from './Navbar'
import TableData from './newproject/TableData';
import Header from './newproject/Header';
import { Toolbar } from '@mui/material';
import Box  from '@mui/material/Box';
import Drawer from './newproject/Drawer';
function App(){
  return(
    <>
    
    
    {/* <ClippedDrawer/> */}

   <Box sx={{margin: '20px'}}>

    <Header/>
    <Toolbar/>
    <TableData/>
    <Drawer/>
    </Box>
    
    </>
  );
}
export default App;