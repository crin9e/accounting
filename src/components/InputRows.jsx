import React, {useEffect} from 'react';
import InputRow from './InputRow';

const InputRows = (props) => {


    useEffect(() => {
    if (props.quarters === null) {
        props.setQuartersError(true);
        console.log('Обе даты должны быть заданы. Дата конца периода должна быть больше даты начала периода');
    } else
        props.setQuartersError(false);
    }, [props])
 
    if (props.quarters === null) {
        return null;
    } else 
        return (
            props.quarters.map((quarter, index)=>
                    <tr className={quarter} id="quarter" key={index}>
                        <InputRow quarter={quarter} number={index}/>
                    </tr>
                )
        );
};
export default InputRows;