import React, { useState} from 'react';

const FinancialQuarters = ({setQuarters}) => {
    
    const [passedBeginDate, setBeginDate] = useState("");
    const [passedEndDate, setEndDate] = useState("");

    const onChangeHandlerBeginDate = (e) => {
        setBeginDate(e.target.value);
    };
    const onChangeHandlerEndDate = (e) => {
        setEndDate(e.target.value);
    };

    const functionHandler = () => {
        const quartersArr = countQuarters(passedBeginDate, passedEndDate)
        setQuarters(quartersArr);
    }

    const lastPeriodHandler = () => {
        const dateFromRef = document.querySelector("#date-from");
        const dateToRef = document.querySelector("#date-to");
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];

        const datefrommonth = months[month - 5 >= 0 ? month - 5 : month + 7];
        const datefromyear = month - 5 >= 0 ? year : year - 1;
        const datefromval  = `${datefromyear}-${datefrommonth}`;

        const datetomonth = months[month - 1 >= 0 ? month - 1 : 11];
        const datetoyear = month - 1 >= 0 ? year : year - 1;
        const datetoval  = `${datetoyear}-${datetomonth}`;

        dateFromRef.value = datefromval;
        dateToRef.value = datetoval;
        setBeginDate(datefromval)
        setEndDate(datetoval);
    }

    const lastYearHandler = () => {
        const dateFromRef = document.querySelector("#date-from");
        const dateToRef = document.querySelector("#date-to");
        const datefrom = new Date();
        const yearfrom = datefrom.getFullYear();
        const datefromval = `${yearfrom - 1}-01`;
        const datetoval = `${yearfrom - 1}-12`;
        dateFromRef.value = datefromval;
        dateToRef.value = datetoval;
        setBeginDate(datefromval)
        setEndDate(datetoval);
    }


    function countQuarters(beginDate, endDate) {
        if (beginDate !== undefined && endDate !== undefined && beginDate < endDate) {
            const datefrom = new Date(beginDate);
            const yearfrom = datefrom.getFullYear();
            const monthfrom = datefrom.getMonth();

            const dateto = new Date(endDate);
            const yearto = dateto.getFullYear();
            const monthto = dateto.getMonth();

            const quarters = ['I квартал', 'II квартал', 'III квартал', 'IV квартал'];
            const options = [];
          
          for (let pastYear = yearfrom; pastYear < yearto; pastYear++) {
            quarters.forEach(q => options.push(q + ' ' + pastYear));
          }
          quarters.slice(0, parseInt(((monthto + 1 ) / 3))).forEach(q => options.push(q + ' ' + yearto));
          const quartersArr = [...options].slice(Math.ceil(monthfrom / 3), options.length);
          return quartersArr;
        } else return null;
    }
    

    return (
        <div className='Financial-quarters'>
            <label htmlFor = "date-from" style={{minWidth: "120px"}}>Начало периода</label>
            <input type="month" name="date-from" id="date-from" style={{width: "150px"}} onChange={onChangeHandlerBeginDate}/>
            <br></br>
            <label htmlFor = "date-to" style={{minWidth: "120px"}}>Конец периода</label>
            <input type="month" name="date-to" id="date-to" style={{width: "150px"}} onChange={onChangeHandlerEndDate}/>
            <br></br>
            <button onClick={lastYearHandler}>Последний год</button>
            <button onClick={lastPeriodHandler}>Последний завершенный квартал</button>
            <br></br>
            <button onClick={functionHandler}>Показать кварталы</button>
            <br></br>
        </div>
    );
};

export default FinancialQuarters;