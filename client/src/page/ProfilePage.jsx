import styles from '../pagestyles/mainPage.module.css'
import Navbar from "../components/Navbar/Navbar";
import {useLocation} from "react-router-dom";
import UrlDisplay from "../components/UrlDisplay/UrlDisplay";

const ProfilePage = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return(
        <div className={styles.root}>
            <Navbar />
            <div className={styles.title}>Профиль</div>
            <UrlDisplay currentUrl={currentUrl} />
        </div>
    )
}

export default ProfilePage;