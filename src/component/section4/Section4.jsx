import Card from "./Card";
import style from './Card.module.css'
function Section4() {
  return (
    <div className={style.sec4wrapper}>
        <div className={style.heading}>
            <h1>Officia ut</h1>
            <span>ipsum Lorem</span>
        </div>
    <div className={style.sec4cardWrapper}>

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
  )
}



export default Section4;

