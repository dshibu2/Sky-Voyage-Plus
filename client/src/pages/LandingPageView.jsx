import React from "react";
import { useState } from "react";

import './LandingPageView.css';
import { Button, Container, Paper, Stack, TextField, Box, ThemeProvider } from "@mui/material"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



function LandingPageView (props) {

    const [date, setDate] = useState(new Date());
    const handleDate = (event) => {
        setDate(event.target.value);
    }

    const [returnDate, setReturnDate] = useState(new Date());
    const handleReturnDate = (event) => {
        setReturnDate(event.target.value);
    }

    return (
    <> 
    <Container maxWidth='sm'>
        <Paper elevation={6}>
            <div className='inner-search-form'>
                <h3>Enter Search Criteria</h3>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="oneWay"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                        <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
                    </RadioGroup>
                </FormControl>

                <div>
                <TextField 
                    label='From'
                    variant='outlined'
                />
                &nbsp;
                <TextField 
                    label='To'
                    variant='outlined'
                />
                </div>

                <br />

                <div>
                <TextField 
                    onChange={handleDate}
                    label='Date'
                    variant='outlined'
                    type='date'
                    value={date}
                />
                &nbsp;
                <TextField 
                    onChange={handleReturnDate}
                    label='Return date'
                    variant='outlined'
                    type='date'
                    value={returnDate}
                />
                &nbsp;
                <TextField 
                    label='# travellers'
                    variant='outlined'
                />
                </div>

                <br />
   
                <Button size='large' variant='contained' color='success'> SEARCH </Button>
          
            </div>
        </Paper> 

    </Container>          
        
        <br />
   
    <Container maxWidth='xl' >

            <Paper elevation={6}>
                <h3>Recommendations</h3>

                <div className='recommendations' >
                <ThemeProvider
                    theme={{
                        palette: {
                            primary: {
                                main: '#007FFF',
                                dark: '#0066CC',
                            },
                        },
                    }}
                >
                <Box
                    sx={{
                        width: 200,
                        height: 200,
                        border: 'solid 2px orange'
                    }}
                />
                <Box
                    sx={{
                        width: 200,
                        height: 200,
                        border: 'solid 2px orange'
                    }}
                />
                <Box
                    sx={{
                        width: 200,
                        height: 200,
                        border: 'solid 2px orange'
                    }}
                />
                <Box
                    sx={{
                        width: 200,
                        height: 200,
                        border: 'solid 2px orange'
                    }}
                />
            </ThemeProvider>
            </div>
        </Paper>
      
    </Container>
        
       


    </>

    );
};

export default LandingPageView;