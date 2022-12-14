import React, { useState } from 'react'
import {FormControl, InputLabel, Input, makeStyles, Button, FormControlLabel, Checkbox, FormLabel, Typography} from '@material-ui/core'
import axios from 'axios';
import { API_URL } from '../Constants/URL';
import { Link } from 'react-router-dom';

export const useStyle = makeStyles({
    formStyle: {
        width: '350px',
        height: '300px',
        paddingLeft: '30px',
        paddingTop: '30px',
        paddingBottom: '30px',
        borderRadius: '10px',
        marginTop: '100px',
        backgroundColor: 'white'
    },
    myBtn:{
        marginTop: '20px',
        width:'auto',
        marginLeft:'50px'
    },
    formControlLabel:{
        color: 'black',
        marginTop: 'auto',
        marginLeft:'50px'
    },
    inputForm:{
        marginTop: '10px',
        marginLeft:'50px'
    },
    mb:{
        marginBottom: '20px'
    }
});

function Create() {
    const classes = useStyle();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [toggle, setToggle] = useState(false);

    const addFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const addLastName = (e) => {
        setLastName(e.target.value)
    }
    const addEmail = (e) => {
        setEmail(e.target.value)    
    }
    const addMobile = (e) => {
        setMobile(e.target.value)
    }
    const Checked = () => {
        setToggle(!toggle)
    }
    const PostData = async () => {
        await axios.post(API_URL, {
            firstName,
            lastName,
            email,
            mobile,
            toggle
        })
    }
    
  return (
    <>
    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/read"><Button variant='contained' color='primary'>View Contacts</Button></Link>
    <form onSubmit={PostData} className={classes.formStyle}>
        <FormLabel component="legend">Sign Up</FormLabel>
        <FormControl className={classes.inputForm}>
            <InputLabel>First Name</InputLabel>
            <Input value={firstName} onChange={addFirstName} placeholder='Enter First Name'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>Last Name</InputLabel>
            <Input value={lastName} onChange={addLastName} placeholder='Enter Last Name'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>Email</InputLabel>
            <Input value={email}  onChange={addEmail} placeholder='Enter Email'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>Mobile</InputLabel>
            <Input value={mobile}  onChange={addMobile} placeholder='Enter Mobile Number'/>
        </FormControl>
        <FormControlLabel className={classes.formControlLabel} control={<Checkbox value={toggle}/>} onChange={Checked} label={<Typography className={classes.formControlLabel}>Add to Favorites</Typography>} /><br/>
        <Button type='submit' variant='contained' color='secondary' className={classes.myBtn} onClick={PostData} ><Link style={{textDecoration: 'none', color: 'inherit'}} to='/read'>Submit</Link></Button>
    </form>
    </>
  )
}

export default Create