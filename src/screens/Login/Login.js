import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import "./Styles.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { login } from "../contexts/AuthContext"

const Login = () => {
  const avatarStyle = { backgroundColor: "green" }
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
    
    history.push("/dashboard")
  }

  const toSignup = () => {
    history.push("/signup")
  }
  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align='center'>
          <Avatar className="avatarStyle" color="primary" style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className='headerStyle'>Login</h2>
          <Typography variant='caption' gutterBottom>Login With your credenials</Typography>
        </Grid>
        <Grid>
          <form onSubmit={handleSubmit} >
            <TextField id="email" fullWidth label="Email" placeholder='Enter your Email' required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })}
            />
            <br /> <br />

            <TextField id='password' fullWidth label="Password" type="password" placeholder='Enter your password' required
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })}
            />
            <FormControlLabel
              control={<Checkbox
                name="checkedA" />}
              label="Remember Me"
            />
            <br /> <br />
            <div>
              <Button
                className='buttonStyle'
                fullWidth
                type='submit'
                variant="contained"
                color="primary"
              >
                Login
              </Button>
              <br /> <br />
              <Typography >
                <Link href="#" >
                  Forgot Password
                </Link>
              </Typography>
              <br />
              <Typography >
                Do you have an account ?
                <Link href="#" onClick={toSignup}>
                  Sign Up
                </Link>
              </Typography>
            </div>
          </form>
        </Grid>

      </Paper>
    </Grid>
  )
}

export default Login
