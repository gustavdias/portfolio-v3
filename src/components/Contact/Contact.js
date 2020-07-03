import React from 'react';
import {makeStyles, withStyles } from '@material-ui/core/styles';
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme)=>({
    form:{
        marginTop: '6rem',

        // top:'50%',
        // left:'50%',
        // transform: 'translate(-50%,-50%)',
        // position: 'absolute',
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
        // <Box component='div'>
                    <Box component='div' style={{background:'#223', height: '100vh'}}>

            {/* <Grid container justify='center'>
                <Box component='form' name="contact" method="POST" data-netlify="true" className={classes.form}>
                    <Typography variant='h5' style={{color: '#dbb700',textAlign:'center', textTransform: 'uppercase'}}>Contact Me</Typography>
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
            </Grid> */}

            <Grid container justify='center'>
                
                <form  name="contact" netlify netlify-honeypot="bot-field" hidden className={classes.form}>
                    
                    <Typography variant='h5' style={{color: '#dbb700',textAlign:'center', textTransform: 'uppercase'}}>Contact Me</Typography>
                    <br/>
                    <InputField fullWidth={true} type='text' name='name' label='Name' variant='outlined' inputProps={{style:{color:'white'}}} margin='dense' size='medium'></InputField>
                    <br/>
                    <InputField  fullWidth={true} type='email' name='email' label='Email' variant='outlined' inputProps={{style:{color:'white'}}} margin='dense' size='medium'></InputField>
                    <br/>
                    <InputField fullWidth={true} type='text' name='message' label='Company' variant='outlined' inputProps={{style:{color:'white'}}} margin='dense' size='medium'></InputField>

                <br/>
                <Button type='submit' className={classes.button} fullWidth={true} variant='outlined' endIcon={<SendIcon/>}>
                    Contact Me
                </Button>
                </form>
            </Grid>
        </Box>
    )
}

export default Contact;
