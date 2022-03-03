import React, { useState, Fragment } from 'react';

const InputRow = (props) => {
    const quarter = props.quarter;
    const [inputsObj1100, setInputsObj1100] = useState({});
    const [inputsObj1200, setInputsObj1200] = useState({});
    const [inputsObj1600, setInputsObj1600] = useState({});

    const myRef1100 = React.createRef();
    const myRef1200 = React.createRef();
    const myRef1600 = React.createRef();
    
    const handleInput1100 = (e) => {
        const classname = e.target.parentNode.parentNode.className;
        const newValueName = e.target.name;
        const newValue = e.target.value;
        inputsObj1100.quarter = classname;
        inputsObj1100[newValueName] = parseInt(newValue);
        setInputsObj1100(inputsObj1100);
    }

    const handleChange1100 = (e) => {
        const valueName = e.target.name;
        let total = 0;
        const newValue = e.target.value;
        inputsObj1100[valueName] = parseInt(newValue);
        for (const property in {...inputsObj1100}) {
            if (property !== "quarter") {
                total += parseInt({...inputsObj1100}[property]);
            };
        }
        if (total === inputsObj1600[1100]) {
            myRef1100.current.className = 'success';
        } else {
            myRef1100.current.className = 'error';
        }
    }

    const handleValidation1100 = (e) =>{
        const classname = e.target.parentNode.parentNode.className;
        const newValueName = e.target.name;
        const newvalidatedValue = parseInt(e.target.value);
        let total = 0;
        for (const property in {...inputsObj1100}) {
            // console.log(`${property}: ${{...inputsObj1100}[property]}`);
            if (property !== "quarter") {total += parseInt({...inputsObj1100}[property])};
        }
        if (total === newvalidatedValue) {
            inputsObj1600.quarter = classname;
            inputsObj1600[newValueName] = newvalidatedValue;
            e.target.className = 'success';
        } else {
            inputsObj1600.quarter = classname;
            inputsObj1600[newValueName] = newvalidatedValue;
            e.target.className = 'error';
        }
    };

    const handleInput1200 = (e) => {
        const classname = e.target.parentNode.parentNode.className;
        const newValueName = e.target.name;
        const newValue = e.target.value;
          inputsObj1200.quarter = classname;
        inputsObj1200[newValueName] = parseInt(newValue);
        setInputsObj1200(inputsObj1200);
    }

    const handleChange1200 = (e) => {
        const valueName = e.target.name;
        let total = 0;
        const newValue = e.target.value;
        inputsObj1200[valueName] = parseInt(newValue);
        for (const property in {...inputsObj1200}) {
            // console.log(`${property}: ${{...inputsObj1200}[property]}`);
            if (property !== "quarter") {total += parseInt({...inputsObj1200}[property])};
        }

        if (total === inputsObj1600[1200]) {
            myRef1200.current.className = 'success';
        } else {
            myRef1200.current.className = 'error';
        }
    }

    
    const handleValidation1200 = (e) =>{
        const classname = e.target.parentNode.parentNode.className;
        const newValueName = e.target.name;
        const newvalidatedValue = parseInt(e.target.value);
        let total = 0;
        for (const property in {...inputsObj1200}) {
            // console.log(`${property}: ${{...inputsObj1200}[property]}`);
            if (property !== "quarter") {total += parseInt({...inputsObj1200}[property])};
        }
        if (total === newvalidatedValue) {
            inputsObj1600.quarter = classname;
            inputsObj1600[newValueName] = newvalidatedValue;
            e.target.className = 'success';
        } else {
            inputsObj1600.quarter = classname;
            inputsObj1600[newValueName] = newvalidatedValue;
            e.target.className = 'error';
        }
    };

    const handleChange1600 = (e) =>{
        const validatedValue = e.target.value;
        const valueName = e.target.name;

        if (parseInt(validatedValue) + parseInt(inputsObj1600[(valueName === '1100' ? '1200' : '1100')]) ===  parseInt(inputsObj1600[1600]) &&  myRef1100.current.className !== 'error' && myRef1200.current.className !== 'error' ) {
            myRef1600.current.className = 'success';
            setInputsObj1600(inputsObj1600);
        } else {
            myRef1600.current.className = 'error';
        }
    };

    const handleValidation1600 = (e) =>{
        const newvalidatedValue = parseInt(e.target.value);
        if (parseInt(inputsObj1600[1100]) + parseInt(inputsObj1600[1200]) === newvalidatedValue &&  myRef1100.current.className !== 'error' && myRef1200.current.className !== 'error' ) {
            e.target.className = 'success';
            inputsObj1600[1600] = newvalidatedValue;
            setInputsObj1600(inputsObj1600);
        } else {
            e.target.className = 'error';
        }
    };

    return (
            <Fragment>
                <th>{quarter} года</th>
                <td><input type="text" name='1110' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1120' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1130' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1140' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1150' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1160' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1170' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1180' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1190' autoComplete="off" onBlur={handleInput1100} onChange={handleChange1100}/></td>
                <td><input type="text" name='1100' autoComplete="off" onBlur={handleValidation1100} onChange={handleChange1600} ref={myRef1100}/></td>
                <td><input type="text" name='1210' autoComplete="off" onBlur={handleInput1200} onChange={handleChange1200}/></td>
                <td><input type="text" name='1220' autoComplete="off" onBlur={handleInput1200} onChange={handleChange1200}/></td>
                <td><input type="text" name='1230' autoComplete="off" onBlur={handleInput1200} onChange={handleChange1200}/></td>
                <td><input type="text" name='1240' autoComplete="off" onBlur={handleInput1200} onChange={handleChange1200}/></td>
                <td><input type="text" name='1250' autoComplete="off" onBlur={handleInput1200} onChange={handleChange1200}/></td>
                <td><input type="text" name='1260' autoComplete="off" onBlur={handleInput1200} onChange={handleChange1200}/></td>
                <td><input type="text" name='1200' autoComplete="off" onBlur={handleValidation1200} onChange={handleChange1600} ref={myRef1200}/></td>
                <td><input type="text" name='1600' autoComplete="off" onChange={handleValidation1600} ref={myRef1600}/></td>
            </Fragment>
        );
};

export default InputRow;