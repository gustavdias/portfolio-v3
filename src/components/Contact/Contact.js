import React from 'react';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from '../Navbar/Navbar';
//import classes from '*.module.css';
//import {Translate} from '@material-ui/icons'
const useStyles = makeStyles((theme)=>({
    form:{
        top:'50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
    },
    button:{
        marginTop: '1rem',
        color: '#dbb700',
        borderColor: '#dbb700',
    }
}))
const InputField = withStyles({
root: {
    '& label.Mui-focused':{
        color:'#dbb700',
    },
    '& label':{
        color: '#1aa9bc',
    },
    '& .MuiOutlinedInput-root':{
        '& fieldset':{
            borderColor: '#1aa9bc',
        },
        '&:hover fieldset':{
            borderColor: '#1aa9bc',
        },
        '&.Mui-focused fieldset':{
            borderColor: '#1aa9bc',
        },
    }

    }
})(TextField);



const Contact = () => {
    const classes = useStyles();
    return (
        <Box component='div' style={{background:'#223', height: '100vh'}}>
            <Navbar/>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{color: '#dbb700',textAlign:'center', textTransform: 'uppercase'}}>Hire / Contact Me</Typography>
                    <br/>
                    <InputField fullWidth={true} label='Name' variant='outlined' inputProps={{style:{color:'white'}}} margin='dense' size='medium'></InputField>
                    <br/>
                    <InputField  fullWidth={true} label='Email' variant='outlined' inputProps={{style:{color:'white'}}} margin='dense' size='medium'></InputField>
                    <br/>
                    <InputField fullWidth={true} label='Company' variant='outlined' inputProps={{style:{color:'white'}}} margin='dense' size='medium'></InputField>

                <br/>
                <Button className={classes.button} fullWidth={true} variant='outlined' endIcon={<SendIcon/>}>
                    Contact Me
                </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact;
