import React, { useState, useEffect } from 'react';
import {useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MoreIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Grid from '@material-ui/core/Grid';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: 4,
  left: 750,
  right: 0,
  margin: '0 auto',
});

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const[search, setSearch] = useState();
    const [data, setData] = useState(false);
    const [tokenVal, setTokenVal] = useState(false);
    let history = useHistory();
  

    useEffect (() => {
      const token = localStorage.getItem("token")
      console.log("token", token);
      if (token){
        setTokenVal(true);
      }
      else{
        setTokenVal(false);
      }
    } ,[setTokenVal])

     
    const toSignup = () => {
      history.push("/signup")
    };
    const addEvent = () => {
      history.push("/addevents");
    };
    const toHome = () => {
        history.push("/dashboard");
      };
    const toLogout = () => {

    }
      const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?eventname=${search}`);
        setSearch("");
      }
  return (
    <Grid>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 110, display: { xs: 'none', md: 'flex' } }}
          >
           Eventoo
          </Typography>
          <Button variant="contained" color="secondary" onClick={toHome}>
                Home
          </Button>
  
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
          </Box>
          
            {tokenVal == true ? 

            
          <StyledFab color="secondary" aria-label="add">
              <AddIcon 
              onClick = {addEvent}
              />
          </StyledFab>  
          : null }    
          

            <form onSubmit={handleSubmit}>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
          </Search>
          </form>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <Button variant="contained" color="secondary" onClick={toSignup}>
                Sign Up
          </Button>
            </Tooltip>
            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <Button variant="contained" color="secondary" onClick={toLogout}>
                Logout
          </Button>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Grid>
  )
}

export default Header
