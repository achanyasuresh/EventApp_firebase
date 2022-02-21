import React, { Fragment, useEffect, useState ,useRef} from 'react';
import firebase from 'firebase/app';
import "firebase/auth"
import { useHistory } from "react-router-dom"
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
import fireDb from "../../firebase";
import Header from '../../components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from '../../components/Header/head';
import FormHelperText from '@mui/material/FormHelperText';

const initialState = {
  eventname: '',
  eventdate: '',
  eventlocation: '',
  contactperson: '',
  contactnumber: '',
  email: '',
  eventtype: '',
  description: ''

};

const AddEvents = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const [val, setVal] = useState();
  const [profileData, setProfileData]= useState({});
  const [validate, setValidate] = useState(false);
  const [isError, setIsError] = useState(false);
  const { eventname, eventdate, eventlocation, contactperson, contactnumber, email, eventtype, description } = state;
  const history = useHistory();

  useEffect(() => {

    getProfileDetails();
//   firebase.auth().onAuthStateChanged(user => {
//     if(user) {
//      console.log("user iddddddd",user.uid)
//      console.log("userrrrrrrrrrrrr",user)
//      console.log("user ",user.name)
//      console.log("user iddddddd",user.phoneNumber)
 
//        console.log("user emaailll" ,user.email)
 
//      }
//  })
}, []);

const getProfileDetails = () =>{
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getUserData(user.uid)
        console.log("user iddddddd",user.uid)
    }
})
}
function getUserData(uid) {
  firebase.database().ref('users/' + uid).once("value", snap => {
      console.log("00000000000000000000000",snap.val())
      // const profile = snap.val();
      setProfileData(snap.val());
      console.log("daaataa", snap.val())
  })
  
  
}


  const handleSubmit = (e) => {
    setValidate(true);
    e.preventDefault();
    if (!eventname || !eventdate || !eventlocation || !contactnumber || !contactperson || !email || !eventtype || !description) {
     
    }
    
    else {
      fireDb.child("Events").push(state, (err) => {

        if (err) {

          alert(err);
        }
        else {

          toast.success("Event added successfully");
          setValidate(false);
        }
      });
      setTimeout(() => history.push("/home"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

  }

  return (
    <Grid >
      <Paper >
        {console.log ("progile dataaaaaaaaaaaaaaaa",profileData)}
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
                      
                      { validate== true && eventname ==  "" ?  <FormHelperText style={{ color: "red" }}>Please enter name</FormHelperText> : null

                       
                      }
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
                        </TextField>
                        { validate== true && eventdate ==  "" ?  <FormHelperText style={{ color: "red" }}>Please Enter Date</FormHelperText> : null

                       
                      }
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
                        </TextField>
                        { validate== true && eventlocation ==  "" ?  <FormHelperText style={{ color: "red" }}>Please Enter Location</FormHelperText> : null

                       
                      }
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
                        // value={profileData.contactperson}
                        value={contactperson}
                      >
                        </TextField>
                        { validate== true && contactperson ==  "" ?  <FormHelperText style={{ color: "red" }}>Please enter Contact Person</FormHelperText> : null

                       
                      }
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

                        // value={[profileData.contcatnumber]}
                        value={contactnumber}
                      >
                        </TextField>
                        { validate== true && contactnumber ==  "" && contactnumber.length !== 10 ?  <FormHelperText style={{ color: "red" }}>Please Enter Contact Number</FormHelperText> : null

                       
                      }
                      
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
                        // value={profileData.email}
                      >
                        </TextField>
                        { validate== true && email ==  "" ?  <FormHelperText style={{ color: "red" }}>Please Enter Email</FormHelperText> : null

                       
                      }
                    </Grid>
                    <Grid xs={12} md={4} item >
                      <TextField
                        fullWidth
                        className='textField'
                        id="description"
                        label="Description"
                        margin="dense"
                        variant="outlined"
                        required
                        name="description"
                        onChange={handleInputChange}
                        value={description}
                      >
                        </TextField>
                        { validate== true && description ==  "" ?  <FormHelperText style={{ color: "red" }}>Please Add some Description</FormHelperText> : null

                       
                      }
                    </Grid>
                    <Grid xs={12} md={4} item >
                      <TextField
                        fullWidth
                        className='textField'
                        id="eventtype"
                        label="Event Type"
                        placeholder='Event type Offline or Online'
                        margin="dense"
                        variant="outlined"
                        required
                        name="eventtype"
                        onChange={handleInputChange}
                        value={eventtype}
                      >
                        </TextField>
                        { validate== true && eventtype ==  "" ?  <FormHelperText style={{ color: "red" }}>Please Add Event type</FormHelperText> : null

                       
                      }

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
                    {/* <Button
                      disableElevation={true}
                      variant="contained"
                      className="clearButton"
                      value={val}
                      onClick={() => setVal(() => "")}
                    >
                      Clear
                    </Button> */}


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
                    <ToastContainer />
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
