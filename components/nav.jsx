import Image from "next/image"
import Logo from '../images/interact logo white.png'
import styles from '@/styles/Home.module.css'
export default function nav(params) {
    return(
        <div className={styles.center}>
            <Image src={Logo} alt="logointeract" className={styles.logo}/>
        </div>
    )
}