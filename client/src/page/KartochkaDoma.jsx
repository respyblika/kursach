import styles from "../pagestyles/KartochkaDoma.module.css"
import dom from "../picture/img.svg";
import love from "../picture/btn_favorite.svg";
import rar from "../picture/arrow right.svg";
import bed from "../picture/bed (Traced).svg";

const KartochkaDoma = () => {
    return(
        <div className={styles.root}>
            <div className={styles.picture}>
                    <img src={dom} alt="dom" className={styles.img}/>
                <div className={styles.love}>
                    <img src={love} alt="love"/>
                </div>
                <div className={styles.rar}>
                    <img src={rar} alt="rar"/>
                </div>
            </div>
            <div className={styles.kartochka}>
                <div className={styles.title}>
                    <div className={styles.big}>
                        Горки-Сухаревские 1
                    </div>
                    <div className={styles.smol}>
                        Рублево-Успенское шоссе 24 км от МКАД
                    </div>
                </div>
                <div className={styles.hyna}>
                    <div className={styles.mesto}>
                        <div className={styles.bani}>
                            <img src={bed} alt="bed"/>
                            <a>25 спальных мест</a>
                        </div>
                        <div className={styles.bani}>
                            <img src={rar} alt="rar"/>
                        </div>
                        <div className={styles.bani}>
                            <img src={rar} alt="rar"/>
                        </div>
                        <div className={styles.bani}>
                            <img src={rar} alt="rar"/>
                        </div>
                    </div>
                    <div className={styles.rybl}>
                        <div className={styles.bani}>
                            <a>Будни</a>

                        </div>
                    </div>
                </div>
                <div className={styles.info}>

                </div>
            </div>

        </div>

    )
}

export default KartochkaDoma;