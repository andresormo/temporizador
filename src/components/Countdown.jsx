import React, { useEffect, useState } from 'react'
import './Countdown.css'


const Countdown = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("2024-01-01")
  useEffect(() => {
    let countDownDate = new Date(date).getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 24));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60 * 60)) / (1000));


      setTime(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's');

      if (distance < 0) {
        clearInterval(x);
        setTime("Cuenta finalizada");
      }
    }, 1000);
    return () => clearInterval(x);
  }, [date]);


  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div className='countdown'>
      <input className='input-date' type='date' value={setDate} onChange={handleDateChange}/>
      <p className='date'>{date}</p>
      <p className='date'>{time}</p>
    </div>
  )
}

export default Countdown
