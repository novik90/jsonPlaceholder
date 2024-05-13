import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

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
    <div>
      <div>
        <h1>clock</h1>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default App;