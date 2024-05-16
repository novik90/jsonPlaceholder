import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import classes from "./App.module.css";
import "./index.module.css";

function App() {
  const [date, setDate] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <div className={classes.main}>
      <h2 className={classes.clock}>{date}</h2>
    </div>
  );
}

export default App;