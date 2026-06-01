import { useState, useEffect, useRef, useCallback } from "react";

function useGoldPrice() {
  const [price, setPrice] = useState(3347);
  const [change, setChange] = useState(0);
  const [pct, setPct] = useState(0);
  const [high, setHigh] = useState(3365);
  const [low, setLow] = useState(3312);
  const openRef = useRef(3347);
  const [candles, setCandles] = useState(() => {
    const arr = []; let p = 3200;
    for (let i = 79; i >= 0; i--) {
      p += (Math.random() - 0.488) * 20;
      p = Math.max(3050, Math.min(3600, p));
      const o = p + (Math.random() - 0.5) * 10;
      arr.push({ o: +o.toFixed(1), c: +p.toFixed(1), h: +(Math.max(p,o)+Math.random()*12).toFixed(1), l: +(Math.min(p,o)-Math.random()*12).toFixed(1) });
    }
    return arr;
  });
