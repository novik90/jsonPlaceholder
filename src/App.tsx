import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import classes from "./App.module.css";
import "./index.module.css";

function App() {
  const [date, setDate] = useState(dayjs().format("HH:mm:ss"));
  const [dates, setDates] = useState<String[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  const saveDate = () => {
    if (!dates.includes(date)) {
      setDates(prev => [date, ...prev]);
    }
  }

  const deleteDate = (e: String) => {
    setDates(prev => {
      const data = [...prev]
      data.splice(prev.indexOf(e), 1);
      return data;
    })
  }

  return (
    <div className={classes.main}>
      <h2 className={classes.clock}>{date}</h2>
      <button className={classes.button} onClick={() => saveDate()}>click</button>
      <div className={classes.date_list}>
        <ul>
          {dates.map((el, index) => {
            return <li key={index} className={classes.date_element}>
              {el}
              <button onClick={() => deleteDate(el)}>DELETE</button>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;