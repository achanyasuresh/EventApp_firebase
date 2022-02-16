import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import "./Styles.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {

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
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: "1000px"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

}));

export default function Head() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [search, setSearch] = useState();
  const [tokenVal, setTokenVal] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setTokenVal(true);
    }
    else {
      setTokenVal(false);
    }
  }, [setTokenVal])


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

  };


  const toHome = () => {
    history.push("/home")
  }
  const addEvents = () => {
    history.push("/addevents")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?eventname=${search}`);
    setSearch("");
  }
  const toLogin = () => {
    history.push("/login")
  }
  const toLogout = () => {
    localStorage.removeItem("token");
    history.go(0)

    history.push("/home");

  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      <MenuItem onClick={handleMenuClose}></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
    //   onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Eventooo
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>

                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </form>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Home" placement="top-start">
              <IconButton aria-label="show 4 new mails" color="inherit" onClick={toHome}>

                < HomeIcon />


              </IconButton>
            </Tooltip>
            {tokenVal == true ?
              <Tooltip title="Add Events" position="top">
                <IconButton aria-label="show 17 new notifications" color="inherit" onClick={addEvents}>

                  <AddCircleTwoToneIcon />

                </IconButton>
              </Tooltip>
              : null}
            {tokenVal == false ?
              <button className='Button1' onClick={toLogin} >Login</button>
              : null}
            {tokenVal == true ?
              <button className='Button2' onClick={toLogout}>Log out</button>
              : null}
          </div>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}