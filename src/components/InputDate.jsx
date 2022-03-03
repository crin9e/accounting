import React, {useState} from 'react';

const InputDate = (props) => {

    const [date, setDate] = useState();
    const onChangeHandler = (e) => {
        setDate(e.target.value);
    };

    console.log(`${props.inputname} = ${date}`);
    const test = date;
    console.log(test);
    return (
        <div>
            <label htmlFor = {props.name}>{props.inputname}</label>
            <input type="date" name = {props.name} onChange={onChangeHandler}/>
        </div>
    );
};

export default InputDate;