import React, { Fragment , useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import "../Events/Styles.css";
import {toast} from "react-toastify";
import  fireDb from "../../firebase";
import Header from '../../components/Header/Header';
import Head from '../../components/Header/head';

const initialState = {
  eventname : '',
  eventdate: '',
  eventlocation : '',
  contactperson : '',
  contactnumber : '',
  email : '',
  eventtype : '',
  description: ''

};

const AddEvents = () => {
  const [state, setState] =useState(initialState);
  const[data, setData] = useState({});

  const [isError, setIsError] = useState(false);
  const {eventname,eventdate,eventlocation,contactperson,contactnumber,email,eventtype,description} = state;
  const history = useHistory();

  const handleSubmit = (e) => {
  
    e.preventDefault();
    if(!eventname || !eventdate || !eventlocation || !contactnumber || !contactperson || !email || !eventtype ||!description) {
      alert("Please enter the field value");
      
    }
    else {
      fireDb.child("Events").push(state, (err) => {
        
        if(err)
        {
          
          alert(err); 
        }
        else 
        {
         
          toast.success("contact added successfully");
        }
      });
      setTimeout(() => history.push("/dashboard"),500);
    }
  };

  const handleInputChange = (e) =>{
    const {name , value} = e.target;
    setState({...state, [name]:value}); 
    
}
  return (
    <Grid >
      <Paper >
        <Head />
        <div>
          <Fragment>
            <div>
              <Paper elevation={0} className='paper' >
                <Typography variant='h4' align='center' color="">
                  You can add event here
                </Typography>
                <br /> <br />
                <form onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                  <Grid xs={12} md={4} item >
                    <TextField
                      fullWidth
                      className='textField'
                      label="Event Name"
                      id="eventname"
                      margin="dense"
                      variant="outlined"
                      required
                      name="eventname"
                      value={eventname}
                      onChange={handleInputChange}
                    >
                    </TextField>
                  </Grid>

                  <Grid xs={12} md={4} item >
                    <TextField
                      id="eventdate"
                      type="datetime-local"
                      fullWidth
                      className='textField'
                      // label="Event Date and Time"
                      defaultValue="2017-05-24T10:30"
                      margin="dense"
                      variant="outlined"
                      required
                      name="eventdate"
                      onChange={handleInputChange}
                      value={eventdate}
                    >
                      /</TextField>
                  </Grid>
                  <Grid xs={12} md={4} item >
                    <TextField
                      fullWidth
                      className='textField'
                      label="Event Location"
                      id="eventlocation"
                      margin="dense"
                      variant="outlined"
                      required
                      name="eventlocation"
                      onChange={handleInputChange}
                      value={eventlocation}
                    >
                      /</TextField>
                  </Grid>
                  <Grid xs={12} md={4} item >
                    <TextField
                      fullWidth
                      className='textField'
                      label="Contact Person"
                      id="contactperson"
                      margin="dense"
                      variant="outlined"
                      required
                      name="contactperson"
                      onChange={handleInputChange}
                      value={contactperson}
                    >
                      /</TextField>
                  </Grid>
                  <Grid xs={12} md={4} item >
                    <TextField
                      fullWidth
                      className='textField'
                      label="Contact Number"
                      id="contactnumber"
                      margin="dense"
                      variant="outlined"
                      required
                      name="contactnumber"
                      onChange={handleInputChange}
                      
                      value={contactnumber}
                    >
                      /</TextField>
                  </Grid>
                  <Grid xs={12} md={4} item >
                    <TextField
                      fullWidth
                      className='textField'
                      label="Email"
                      id="email"
                      margin="dense"
                      variant="outlined"
                      required
                      name="email"
                      onChange={handleInputChange}
                      value={email}
                    >
                      /</TextField>
                  </Grid>
                  <Grid xs={12} md={4} item >
                    <TextField
                      fullWidth
                      className='textField'
                      id="description"
                      label="Description"
                      multiline
                      maxRows={4}
                      margin="dense"
                      variant="outlined"
                      required
                      name="description"
                      onChange={handleInputChange}
                      value={description}
                    >
                      /</TextField>
                  </Grid>
                  <Grid xs={12} md={4} item >
                  <TextField
                      fullWidth
                      className='textField'
                      id="eventtype"
                      label="Event Type"
                      multiline
                      maxRows={4}
                      margin="dense"
                      variant="outlined"
                      required
                      name="eventtype"
                      onChange={handleInputChange}
                      value={eventtype}
                    >
                      /</TextField>
                   
                  </Grid>



                </Grid>
                </form>

                <Grid
                  xs={12}
                  style={{
                    // paddingRight: "25%",
                    paddingLeft: "70%",
                    paddingTop: "90px",
                    // paddingBottom:"20px"
                  }}
                  container
                  spacing={4}
                >
                  <Grid
                    item
                    xs={12}
                    md={3}
                    style={{
                      textAlign: "right",

                    }}
                    spacing={4}

                  >
                    <Button
                      disableElevation={true}
                      variant="contained"
                      className="clearButton"
                    // onClick={() => this.handleClear()}
                    >
                      Clear
                    </Button>


                  </Grid>
                  <Grid item xs={12} md={3} className="btnGrid">
                    <Button
                      disableElevation={true}
                      elevation={0}
                      variant="contained"
                      color="secondary"
                      className="button"
                      value="save"
                    onClick={handleSubmit}
                    >
                      ADD
                    </Button>
                  </Grid>
                </Grid>
                {/* </form> */}
              </Paper>
            </div>
          </Fragment>

        </div>
      </Paper>
    </Grid>

  )
}

export default AddEvents
