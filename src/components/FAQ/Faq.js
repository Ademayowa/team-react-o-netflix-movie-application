import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import './Faq.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bgAcc:{
    backgroundColor: '#303030',
    color: '#fff',
    marginBottom: '5px'
  },
  TypeFont: {
    fontSize: '24px',
  },
  TypeIcon: {
    color: '#fff!important',
    
  },
  bd: {
    borderBottom: '1px solid #000',
    padding:'0.75rem 1rem'
  }
}));

function FAQ() {
   const classes = useStyles();
  return (
    <div className="bg-black">
      <div className="container faq-content">
          <Box mx="auto" width="75%">
            <h1 className="faq-title"> Frequently Asked Questions</h1>
             <div className={classes.root}>
              <Accordion className={classes.bgAcc}>
              <AccordionSummary
                expandIcon={<AddIcon className={classes.TypeIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.bd}
                  
              >
                <Typography className={classes.heading}>What is Netflix?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.TypeFont}>
                    Netflix is a streaming service that offers a wide variety of award - winning TV shows, movies, anime, documentaries, and more on thousands of internet - connected devices.
                       <br/><br/>
                    You can watch as much as you want, whenever you want without a single commercial– all
                    for one low monthly price.There 's always something new to discover and new TV shows and movies are added every week!
                </Typography>
              </AccordionDetails>
            </Accordion >
              <Accordion className={classes.bgAcc}>
              <AccordionSummary
                expandIcon={<AddIcon className={classes.TypeIcon}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.bd}
              >
                <Typography className={classes.heading}>How much does Netflix cost?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.TypeFont}>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all
                  for one fixed monthly fee.Plans range from₦ 2, 900 to₦ 4, 400 a month.No extra costs, no contracts.
                </Typography>
              </AccordionDetails>
            </Accordion >
            <Accordion className={classes.bgAcc}>
              <AccordionSummary
                expandIcon={<AddIcon className={classes.TypeIcon}/>}
                aria-controls="panel2a-content"
                  id="panel2a-header"
                  className={classes.bd}
              >
                <Typography className={classes.heading}>Where can I watch?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.TypeFont}>
                    Netflix is a streaming service that offers a wide variety of award - winning TV shows, movies, anime, documentaries, and more on thousands of internet - connected devices.
                       <br /> <br />
                    You can also download your favorite shows with the iOS, Android, or Windows 10 app.Use downloads to watch
                    while you 're on the go and without an internet connection. Take Netflix with you anywhere.
                </Typography>
              </AccordionDetails>
              </Accordion>
              <Accordion className={classes.bgAcc}>
              <AccordionSummary
                expandIcon={<AddIcon className={classes.TypeIcon}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.bd}
              >
                <Typography className={classes.heading}>How do I cancel?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.TypeFont}>
                    Netflix is flexible.There are no pesky contracts and no commitments.
                    You can easily cancel your account online in two clicks.There are no cancellation fees– start or stop your account anytime.
                </Typography>
              </AccordionDetails>
              </Accordion>
              <Accordion className={classes.bgAcc}>
              <AccordionSummary
                expandIcon={<AddIcon className={classes.TypeIcon}/>}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.bd}
              >
                <Typography className={classes.heading}>What can I watch on Netflix?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.TypeFont}>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
                    award - winning Netflix originals, and more.Watch as much as you want, anytime you want.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default FAQ