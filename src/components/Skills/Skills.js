import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Box} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Front end',
    // price: '0',
    description: ['JavaScript', 'HTML', 'CSS', 'SASS'],
    // buttonText: 'Sign up for free',
    // buttonVariant: 'outlined',
  },
  {
    title: 'Frameworks and Libraries',
    // price: '15',
    description: [
      'React.js',
      'Redux.js',
      'Material UI',
      'BootStrap',
      'jQuery',
    ],
    // buttonText: 'Get started',
    // buttonVariant: 'contained',
  },
  {
    title: 'Back end',
    // price: '30',
    description: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'websockets',
      'Ajax',
      'REST',
    ],
    // buttonText: 'Contact us',
    // buttonVariant: 'outlined',
  },
  {
    title: 'Others',
    // price: '30',
    description: [
      'Version Control',
      'Deployment',
      'OOP',
      'Web Security',
      'Linux',
      'Conversion Rate Optimization',
      'SEO',
      'CMS',
      'WordPress',
    ],
    // buttonText: 'Contact us',
    // buttonVariant: 'contained',
  },

];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Skills
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        A Full Stack Developer with several skills to contribute to your team and company. I also bring to the table my experience with SEO and Conversion Rate Optimization.        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>

                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">

        </Grid>
        <Box mt={5}>
        </Box>
      </Container>
    </React.Fragment>
  );
}
