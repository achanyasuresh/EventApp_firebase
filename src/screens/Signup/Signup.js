import React, { useEffect, useState, useRef} from 'react';
import   { useHistory} from"react-router-dom"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import "../Signup/Signup.css";
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {register} from "../contexts/AuthContext"


const Signup = () => {
  
  const [form,setForm] = useState({
    name: '',
    phone:'',
    email:'',
    password:'',
    confirmpassword:''
})
const history = useHistory();
const handleSubmit = async(e)=>{
  e.preventDefault();
  await register(form);
  history.push("/login");

}
 
  
  // const Tosignup = () =>{
  //   history.push("/login");

  // }
  return (
    <Grid>
      <Paper elevation={20} className="paperStyle">
      
        <Grid align='center'>
          <Avatar className='avatarStyle' color="primary">
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 className='headerStyle'>Signup</h2>
          <Typography variant='caption' gutterBottom>Please fill this from to createan account</Typography>
        </Grid>
        <form onSubmit={handleSubmit} >
          <TextField 
          id='name'
          fullWidth 
          label="Name" 
          placeholder='Enter your name' 
          onChange={(e) => 
            setForm({...form, name: e.target.value})}

          />
          <br />
          <br />
         
          <TextField 
          id='email'
          fullWidth 
          label="Email" 
          placeholder='Enter your email' 
          onChange={(e) => 
            setForm({...form, email: e.target.value})}
          />
          <br /><br />
          <TextField 
          id='phone'
          fullWidth 
          label="Phone Number" 
          placeholder='Enter your phone' 
          onChange={(e) => 
            setForm({...form, phone: e.target.value})}
          />
          <br /><br />
          <TextField 
          id='password'
          fullWidth 
          label="Password" 
          placeholder='Enter your password' 
          onChange={(e) => 
            setForm({...form, password: e.target.value})}
          />
          <br /><br />
          <TextField 
          id='confirmpassword'
          fullWidth 
          label="Confirm Password" 
          placeholder='confirm your passeword' 
          onChange={(e) => 
            setForm({...form, confirmpassword: e.target.value})}
          />
          <br /><br />
          <FormControlLabel
            control={<Checkbox
              name="checkedA" />}
            label="I accept theterms and conditions"
          />
          
          <Button 
          type='submit' 
          variant="contained" 
          color="primary" 
          > 
           Sign Up
          </Button>
          <br /><br />
        </form>
      </Paper>
    </Grid>

  )
}

export default Signup
