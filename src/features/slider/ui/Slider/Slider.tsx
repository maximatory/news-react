import React, { ReactElement, useRef } from "react";
import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeProvider";

interface Props {
  children: ReactElement
  step?: number
}

const Slider = ({ children, step=150 }:Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);
  const {isDark} = useTheme()

  const scrollLeft = ()=>{
    if(!sliderRef.current) return
    sliderRef.current.scrollLeft -= step
  }

  const scrollRight = ()=>{
    if(!sliderRef.current) return
    sliderRef.current.scrollLeft += step
  }

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button className={`${styles.arrow} ${isDark ? styles.dark : styles.light}`} onClick={scrollLeft}>❮</button>
       {React.cloneElement(children, {ref: sliderRef})}
       <button className={styles.arrow} onClick={scrollRight}>❯</button>
    </div>
  );
};

export default Slider;