import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import {CONSTANTS} from '../../constants';

function QuoteCarousel(props)
{     
    return (
        <Carousel interval = {5000}>
            {
                CONSTANTS.QUOTES.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.quote}</p>
            <Button className="CheckButton"></Button>
        </Paper>
    )
}

export default QuoteCarousel;