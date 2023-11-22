import styles from '../pagestyles/mainPage.module.css'
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