import styles from "./components/Site.module.css"
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {Nike} from "./components/pages/Nike";
import {Model} from "./components/pages/Model";

const PATH = {
    HOME: "/",
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/nike',
    MODELS: '/:model/:id',
    ERROR: '/page/error',
    EXCEPTION: '*',
} as const;

function App() {

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.navWrapper}>
                        <NavLink className={ ({isActive})  =>
                        isActive ? styles.active : ''} to={PATH.PAGE1}>Adidas</NavLink></div>
                    <div className={styles.navWrapper}><NavLink className={ ({isActive})  =>
                        isActive ? styles.active : ''}  to={PATH.PAGE2}>Puma</NavLink></div>
                    <div className={styles.navWrapper}><NavLink className={ ({isActive})  =>
                        isActive ? styles.active : ''} to={PATH.PAGE3}>Nike</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.HOME} element={<Navigate to={"/adidas"}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Nike/>}/>

                        <Route path={PATH.MODELS} element={<Model/>} />


                        <Route path={PATH.EXCEPTION} element={<Error404/>}/>

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2025</div>
        </div>
    );
}

export default App;
