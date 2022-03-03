import React, { useState } from "react";
import './App.css';
import FinancialQuarters from "./components/FinancialQuarters";
import InputRows from "./components/InputRows";

function App() {
  const fieldsErrorEl = (document.getElementById('fields-err'));
  const [quartersError, setQuartersError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finance1100 = e.target.parentNode.querySelectorAll('input[name="1100"]');
    const finance1200 = e.target.parentNode.querySelectorAll('input[name="1200"]');
    const finance1600 = e.target.parentNode.querySelectorAll('input[name="1600"]');
    let finalObj = [];
    for (let i = 0; i < [...finance1600].length; i ++){
      if([...finance1100][i].className === 'success' && [...finance1200][i].className === 'success' && [...finance1600][i].className === 'success'){
        fieldsErrorEl.className = 'display-none';

      } else {
        console.log('Заполнены и сверены не все поля таблицы')
        fieldsErrorEl.className = 'error';
        return;
      }
    }
    
    const quarters = e.target.parentNode.querySelectorAll('#quarter');
    const children = [...quarters].map((quarter) => quarter.querySelectorAll('td'));

    for (let j = 0; j < children.length; j++){
      const newObj = {};
      const quarter = quarters[j].className
        for (let k = 0; k < children[j].length; k++){
          const value = children[j][k].lastChild.value;
          const name = children[j][k].lastChild.name;
          newObj.quarter = quarter;
          newObj[name] = value;
        }
      finalObj.push(newObj);
    }
    const jsonObj = JSON.stringify(finalObj);
    console.log(jsonObj);
  }

  const [quarters, setQuarters] = useState([]);
  
  return (
    <div className="App">
      <FinancialQuarters setQuarters={setQuarters}/>
      <div className='display-none' id='fields-err'>Заполнены и сверены не все поля таблицы</div>
      <div className={quartersError ? 'error' : 'display-none'} id='quarters-err'>Обе даты должны быть заданы. Дата конца периода должна быть больше даты начала периода</div>
      <br></br>
      <div className="table__wrapper">
        <form>
          <table border="0px">
            <tbody>
            <tr>
              <th>Наименование показателя</th>
              <td>Нематериальные активы</td>
              <td>Результаты исследований и разработок</td>
              <td>Нематериальные поисковые активы</td>
              <td>Материальные поисковые активы</td>
              <td>Основные средства</td>
              <td>Доходные вложения в материальные ценности</td>
              <td>Финансовые вложения</td>
              <td>Отложенные налоговые активы</td>
              <td>Прочие внеоборотные активы</td>
              <td><b>Итого по разделу I</b></td>
              <td>Запасы</td>
              <td>Налог на добавленную стоимость по приобретенным ценностям</td>
              <td>Дебиторская задолженность</td>
              <td>Финансовые вложения</td>
              <td>Денежные средства и денежные эквиваленты</td>
              <td>Прочие оборотные активы</td>
              <td><b>Итого по разделу II</b></td>
              <td><b>Итого</b></td>
            </tr>
            <tr>
              <th>Код</th>
              <td>1110</td>
              <td>1120</td>
              <td>1130</td>
              <td>1140</td>
              <td>1150</td>
              <td>1160</td>
              <td>1170</td>
              <td>1180</td>
              <td>1190</td>
              <td>1100</td>
              <td>1210</td>
              <td>1220</td>
              <td>1230</td>
              <td>1240</td>
              <td>1250</td>
              <td>1260</td>
              <td>1200</td>
              <td>1600</td>
            </tr>
              <InputRows quarters={quarters} setQuartersError={setQuartersError}/>
            </tbody>
          </table>
        <input type='submit' onClick={handleSubmit}></input>
        </form>
      </div>
    </div>
  );
}

export default App;
