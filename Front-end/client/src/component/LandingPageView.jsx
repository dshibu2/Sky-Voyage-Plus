import React from "react";
import './LandingPageView.css';
import { Paper, Stack } from "@mui/material"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



function LandingPageView (props) {


    return (
        <div>
            <Stack direction='column' justifyContent='center'>

                <Paper elevation={6}>
                    <div className='inner-search-form'>
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
                    </div>
                </Paper>

                <div>recommendations</div>
            
            </Stack>
        
        
        </div>


    );
};

export default LandingPageView;