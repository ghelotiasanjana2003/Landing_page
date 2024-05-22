import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box  from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0),
  createData(2, 237, 9.0, 37, 4.3),
  createData(3, 262, 16.0, 24, 6.0),
  createData(4, 262, 16.0, 24, 6.0),
  createData(5, 262, 16.0, 24, 6.0),
  createData(6, 262, 16.0, 24, 6.0),
  createData(7, 262, 16.0, 24, 6.0),
  createData(8, 262, 16.0, 24, 6.0),
  createData(9, 262, 16.0, 24, 6.0),
  createData(10, 262, 16.0, 24, 6.0),
  createData(11, 262, 16.0, 24, 6.0),
  createData(12, 262, 16.0, 24, 6.0),
  createData(13, 262, 16.0, 24, 6.0),
  createData(14, 262, 16.0, 24, 6.0)
];


export default function TableData(){

  return(
    <>
 <TableContainer component={Paper}>

<Typography sx={{marginLeft: '10px'}}><h2>Engaged Assets</h2><h7> Assets Management Engaged Assets</h7></Typography>


<Box sx={{ width: '100%', marginTop: '20px' }}>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={2}>
    <Item>Employee</Item>
  </Grid>
  <Grid item xs={2}>
    <Item>Type</Item>
  </Grid>
  <Grid item xs={2}>
    <Item>Purpose</Item>
  </Grid>
  <Grid item xs={2}>
    <Item>Status</Item>
  </Grid>
  <Grid item xs={2}>
    <Item>dd/mm/yy</Item>
  </Grid>
  <Grid item xs={2}>
    <Item>dd/mm/yy</Item>
  </Grid>
</Grid>
</Box>

<Table sx={{ minWidth: 650 }} aria-label="caption table">
  <caption>A basic table example with a caption</caption>
  <TableHead>
    <TableRow>
      <TableCell>SN</TableCell>
      <TableCell align="right">Asset ID</TableCell>
      <TableCell align="right">Registration No.</TableCell>
      <TableCell align="right">Ownership Type</TableCell>
      <TableCell align="right">Brand & Model</TableCell>
      <TableCell align="right">Category & Sub Category</TableCell>
      <TableCell align="right">Allocated Time</TableCell>
      <TableCell align="right">Engaged Time</TableCell>
      <TableCell align="right">Expected O/P</TableCell>
      <TableCell align="right">Actual O/P</TableCell>
      <TableCell align="right">Difference in Engagement</TableCell>
      <TableCell align="right">Difference in O/P</TableCell>
      <TableCell align="right">Rider Details</TableCell>
      <TableCell align="right">Actions</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
    </>
  )

   
}


