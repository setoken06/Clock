import { useState, useEffect, useRef } from "react";
import { Data } from "./types";

const calcTimeLag = (oldTime: string | null) => {
  if (oldTime === null) return "00:00:00";
  const timeLag = Date.now() - Number(oldTime);
  let h = Math.floor(timeLag / 3600000);
  let m = Math.floor((timeLag % 3600000) / 60000);
  let s = Math.floor(((timeLag % 360000) % 60000) / 1000);

  return `${("0" + h).slice(-2)}:${("0" + m).slice(-2)}:${("0" + s).slice(-2)}`;
};

const useData = () => {
  const [data, setData] = useState<Data[]>(() => [
    { type: "eat", text: "食べてから", time: "00:00:00", icon: "utensils" },
    { type: "sleep", text: "起きてから", time: "00:00:00", icon: "bed" },
    { type: "bath", text: "浴びてから", time: "00:00:00", icon: "bath" }
  ]);
  const ref = useRef(data);

  useEffect(() => {
    ref.current = data;
  }, [data]);
  useEffect(() => {
    setInterval(() => {
      const nextData = data.map(item => {
        //これでダメな理由 is...
        // if (window.localStorage.getItem(item.type) === null) return item;
        item.time = calcTimeLag(window.localStorage.getItem(item.type));
        return item;
      });
      setData(nextData);
    }, 1000);
  }, []);

  return data;
};

export default useData;
