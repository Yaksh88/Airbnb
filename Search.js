import React, {useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css" //main style file
import "react-date-range/dist/theme/default.css" //theme css file
import {DateRangePicker} from "react-date-range";
import {Button} from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/People';
import {useHistory} from "react-router-dom"

    function Search() {
        const history = useHistory();
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());

        const selectionRange = {  //this object is by default used for imports of react-date-range
            startDate: startDate,
            endDate: endDate,
            key: "selection",
        };

        //Now we will make a function for when we select the date
        //This function is also by default in library so we just need to print it here
        function handleSelect(ranges) {
            setStartDate(ranges.selection.startDate);
            setEndDate(ranges.selection.endDate);
        }
    
    return (
        <div className='search'>
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect} />
        <h2>
            Number of guests
            <PeopleIcon />
        </h2>    
            <input 
            min={0}
            defaultValue={2}
            type="number" />
            <Button onClick={()=> history.push('/Search')}>Search Airbnb</Button>
        
            
            
        </div>
    )
}

export default Search
