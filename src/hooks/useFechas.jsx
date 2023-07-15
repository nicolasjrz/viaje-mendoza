import { useEffect, useState } from "react";

export const useFechas = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [finishDate] = useState("17 Jul 2023 11:30:00"); // Agrega la hora deseada a la fecha de finalización
  // const [finishDate] = useState("27 Jun 2023 04:06:00"); // Agrega la hora deseada a la fecha de finalización

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const changingDate = new Date(finishDate);
      const currentDate = new Date();
      const totalSeconds = Math.floor((changingDate - currentDate) / 1000);

      if (totalSeconds <= -1) {
        clearInterval(interval);
      } else {
        setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
        setHours(formatTime(Math.floor((totalSeconds / 3600) % 24)));
        setMinutes(formatTime(Math.floor((totalSeconds / 60) % 60)));
        setSeconds(formatTime(Math.floor(totalSeconds % 60)));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [finishDate]);

  return { days, hours, minutes, seconds };
};
