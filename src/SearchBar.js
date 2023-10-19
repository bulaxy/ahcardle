import React, {useRef, useState} from 'react';
import './assets/searchBar.css';
import {dataObjects} from "./data/dataObjects";
import { Dropdown } from 'semantic-ui-react';

const SearchBar = ({getAnswer, passClass}) => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const options = dataObjects.map(el => el.cardName);
    const usedValues = useRef([])
    const handleInputChange = (inputValue) => {
        console.log(inputValue,dataObjects)
        setValue(inputValue.value)
    }
    const handleCompareClick = (viaEnter, checkMore) => {
        let userAnswer
         if(!options.find(el => el[0] == value) && suggestions.length > 0){
            userAnswer = dataObjects.filter(el => el.id == suggestions[0])
            usedValues.current.push(suggestions[0].join(''))
        }
        else{
            userAnswer = dataObjects.filter(el => el.id == value)
            usedValues.current.push(value)
        }
        getAnswer(userAnswer)
        setValue(undefined)
    }

    return(
        <div>
            <div className={`searchBar + ${passClass}`}>
            <Dropdown
                placeholder='Type card name...'
                search
                selection
                value={value}
                onChange={(_,o)=>handleInputChange(o)}
                options={dataObjects.map(o=>({key:o.id, value:o.id, text:`${o.cardName} (${o.xp})`}))}
            />
            <button onClick={handleCompareClick}>➤</button>
            </div>

        </div>
 )
};

export default SearchBar;
