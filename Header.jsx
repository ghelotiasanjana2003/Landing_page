
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Girl from '../Assets/girl.jfif';
import notification from '../Assets/notification.svg';
import dropdown from '../Assets/dropdown.svg'
import logo from '../Assets/logo.svg'
import Dashboard from '../Assets/deselected_dashboard.svg'


export default function Header() {

    // drawerHandler(props){
    //     {props.work}
    // }


    return (
        <>

            <AppBar
                position="fixed"
                sx={{ width: '100%' }}

            >

                <Toolbar sx={{ backgroundColor: 'white', justifyContent: 'space-between' }}>


                    <div style={{ display: 'flex' }}>

                        <img style={{ height: '26px', width: '26px', marginTop: '10px', marginRight: '20px' }} src={Dashboard} />

                        <img sx={{ justifyContent: 'left', height: '90px', width: '170px' }} src={logo} />

                    </div>


                    <div style={{ display: 'flex', width: '250px', justifyContent: 'space-around' }}>


                        <img style={{ marginLeft: '10px' }} src={notification} />
                        <Avatar
                            alt="Remy Sharp"
                            src={Girl}
                            sx={{ width: 26, height: 26, marginLeft: '10px' }}
                        />
                        <Typography sx={{ color: 'black', marginLeft: '10px' }}>user's name</Typography>
                        <img src={dropdown} /> </div>


                </Toolbar>
            </AppBar>
        </>
    )
}