import styles from '../pagestyles/mainPage.module.css'
import Navbar from "../components/Navbar/Navbar";
import {useLocation} from "react-router-dom";
import UrlDisplay from "../components/UrlDisplay/UrlDisplay";
import axios from '../utils/axios';
import {useQuery} from "react-query";
import Heder from "./Heder";
import Footer from "./Footer";
import KartochkaDoma from "./KartochkaDoma";

async function getTest(){
    const {data} = await axios.get('/test')
    return data;
}

const MainPage = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    const{data, isLoading, IsError} = useQuery('test', getTest)

    return(
        <div className={styles.root}>
            <Heder></Heder>
            <Footer></Footer>
            <KartochkaDoma></KartochkaDoma>
        </div>
    )
}

export default MainPage;