import styles from "../pagestyles/Foter.module.css"
import logo from "../picture/logo_light.svg"
import frame from "../picture/Frame.svg"
import you from "../picture/logo_youtube.svg"
import inst from "../picture/logo_instagram.svg"
import vk from "../picture/logo_vk.svg"
import what from "../picture/whatsapp (Traced).svg"
import tg from "../picture/telegram (Traced).svg"

const Footer = () => {
   return(
       <div className={styles.root}>
           <div className={styles.left}>
               <div className={styles.logo}>
                   <img src={logo} alt="logo"/>
               </div>
               <div className={styles.text2}>
                   Политика конфиденциальности
               </div>
               <div className={styles.text2}>
                   Согласие на обработку персональных данных
               </div>
           </div>
           <div className={styles.spisoc}>
               <div className={styles.katalog}>Каталог</div>
               <div className={styles.text}>С бассейном</div>
               <div className={styles.text}>Семейные и уютные</div>
               <div className={styles.text}>Хиты продаж</div>
               <div className={styles.text}>Под свадьбы и корпоративы</div>
               <div className={styles.text}>С русской баней на дровах</div>
           </div>
           <div className={styles.spisoc}>
               <div className={styles.text}>Сотрудничество</div>
               <div className={styles.text}>Частые вопросы</div>
           </div>
           <div className={styles.pravo}>
               <div className={styles.telefon}>
                   <img src={frame} alt="frame"/>
                   <div>8 (843) 528-65-48</div>
               </div>
                   <div className={styles.picture}>
                       <img src={you} alt="you"/>
                       <img src={inst} alt="inst"/>
                       <img src={vk} alt="vk"/>
                       <img src={what} alt="what"/>
                       <img src={tg} alt="tg"/>
               </div>
            </div>
       </div>
   )
}

export default Footer;

