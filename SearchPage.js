import { Button } from '@material-ui/core'
import React from 'react'
import './searchPage.css'
import SearchResult from './SearchResult'


function SearchPage() {
    return (
        <div className="searchPage">
        <div className='searchPage_info'>
            <p>62 stays - 26 August to 30 August - 2 guest </p>
            <h1>Stays nearby</h1>
            <Button
            variant="outlined">Cancellation Flexibility</Button>
            <Button
            variant="outlined">Type of place</Button>
            <Button
            variant="outlined">Price</Button>
            <Button
            variant="outlined">Rooms and beds</Button>
            <Button
            variant="outlined">More filters</Button>
        <SearchResult 
            img="https://a0.muscache.com/im/pictures/192830c3-20f2-4c51-a757-42cafe0962a3.jpg?im_w=720"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - 
            kitchen - free parking - washing machine"
            star={4.73}
            price="$30 / night"
            total="$117 total"
        />
        <SearchResult 
            img="https://a0.muscache.com/im/pictures/a541c48b-ded9-411e-9e6a-811abc668415.jpg?im_w=720"
            location="Private room in center of Fairfax"
            title="Entire house in Fairfax"
            description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - 
            kitchen - free parking - washing machine"
            star={4.80}
            price="$63 / night"
            total="$120 total"
        />
        <SearchResult 
            img="https://a0.muscache.com/im/pictures/cb43026a-97ca-4846-8250-dac1596edfd3.jpg?im_w=720"
            location="Private room in center of Virginia"
            title="Stay at this spacious Edwardian House"
            description="2 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - 
            kitchen - free parking - washing machine"
            star={5.0}
            price="$40 / night"
            total="$110 total"
        />
        </div>
        </div>
    )
}

export default SearchPage
