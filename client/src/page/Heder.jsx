import styles from "../pagestyles/Heder.module.css"
import logo from "../picture/logo_dark.jpg"
import map from "../picture/map-locator 1.svg"
import frame from "../picture/Frame.svg"
import favorite from "../picture/icon_favorite.svg"
import search from "../picture/icon_search.svg"

const Heder = () => {
    return(
        <div className={styles.root}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.map}>
                <img src={map} alt="map"/>
                Казань
            </div>
            <div>
                <button className={styles.pyk}> Катаlог </button>
            </div>
            <div className={styles.choto}>
                <div> Частые вопросы</div>
                <div> Сотрудничество</div>
            </div>
            <div className={styles.telefon}>
                <img src={frame} alt="frame"/>
                <div>8 (843) 528-65-48</div>
            </div>
            <div className={styles.poisk}>
                <img src={favorite} alt="favorite"/>
                <img src={search} alt="search"/>
                <div>Поиск по названию</div>
            </div>
        </div>
    )
}
export default Heder;