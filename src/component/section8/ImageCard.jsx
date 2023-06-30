import style from './ImageCard.module.css'
import { FiShoppingCart } from 'react-icons/fi';

function ImageCard({imgLink,cardText,btnTxt}) {
  return (
   
    <div style={{backgroundImage:`url(${imgLink})`}} className={style.wrapperdiv}>
  
        <h1 className={style.titleText}>{cardText} </h1>
        <button><FiShoppingCart/>  {btnTxt} </button>

    </div>
  )
}

export default ImageCard
