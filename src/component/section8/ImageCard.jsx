import style from './ImageCard.module.css'
import { FiShoppingCart } from 'react-icons/fi';
function ImageCard() {
  return (
    <div style={{backgroundImage:'url(https://4kwallpapers.com/images/wallpapers/yosemite-national-park-mountains-winter-sunny-day-landscape-1024x1024-37.jpg)'}} className={style.wrapperdiv}>
        <h1 className={style.titleText}>Esse aliquip do, magni! </h1>
        <button><FiShoppingCart/> Lorem </button>
    </div>
  )
}

export default ImageCard
