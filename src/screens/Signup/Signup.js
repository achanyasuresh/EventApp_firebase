import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import "../Signup/Styles.css";
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { ToastContainer, toast } from 'react-toastify';
import FormHelperText from '@mui/material/FormHelperText';
import 'react-toastify/dist/ReactToastify.css';
import { toaster } from 'evergreen-ui'
import { register } from "../contexts/AuthContext"


const Signup = (props) => {
  const avatarStyle = { backgroundColor: "blueviolet" }
  const [erroressage, setErrorMessage] = useState("");
  const [validate, setValidate] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })
  const history = useHistory();

  const handleSubmit = async (e) => {
    setValidate(true);
    try {
      e.preventDefault();
      await register(form);
      console.log(form)
      toast.success("User Signed In");
      history.push("/login");
      setValidate(false);
    }
    catch (err) {
      toaster.notify(err.message);
    }

  }


  const toLogin = () => {
    history.push("/login");

  }
  return (
    <Grid>
      <Paper elevation={20} className="paperStyle">

        <Grid align='center'>
          <Avatar className='avatarStyle' color="primary" style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 className='headerStyle'>Signup</h2>
          <Typography variant='caption' gutterBottom>Please fill this from to create an account</Typography>
        </Grid>
        <form onSubmit={handleSubmit} >
          <TextField
            id='name'
            fullWidth
            label="Name"
            placeholder='Enter your name'
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })}


          />
          {validate == true && form.name == "" ? <FormHelperText style={{ color: "red" }}>Please enter name</FormHelperText> : null


          }

          <br />
         

          <TextField
            id='email'
            fullWidth
            label="Email"
            placeholder='Enter your email'
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })}
          />
          {validate == true && form.email == "" ? <FormHelperText style={{ color: "red" }}>Please enter Email</FormHelperText> : null


          }
          <br />
          <TextField
            id='phone'
            fullWidth
            label="Phone Number"
            placeholder='Enter your phone'
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })}
          />
          {validate == true && form.phone == "" ? <FormHelperText style={{ color: "red" }}>Please enter Your Phone</FormHelperText> : null


          }
          <br />
          <TextField
            id='password'
            type="password"
            fullWidth
            label="Password"
            placeholder='Enter your password'
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })}
          />
          {validate == true && form.password == "" ? <FormHelperText style={{ color: "red" }}>Please enter a password</FormHelperText> : null


          }
          <br />  <br />
          {/* <TextField
            id='confirmpassword'
            fullWidth
            label="Confirm Password"
            placeholder='confirm your passeword'
            onChange={(e) =>
              setForm({ ...form, confirmpassword: e.target.value })}
          />
          <br /><br /> */}
          {/* <FormControlLabel
            control={<Checkbox
              name="checkedA" />}
            label="I accept the terms and conditions"
          /> */}

          <Button
            type='submit'
            variant="contained"
            color="primary"
            className='buttonStyle'
          >
            Sign Up
          </Button>
          <ToastContainer />
          <br />
          <Typography >
            Already have an account ?
            <Link href="#" onClick={toLogin}>
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>

  )
}

export default Signup
