import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <hr/>
            <footer className={styles.footer}>
            <img src='/assets/logo.png' alt='logo do AluraFlix'/>
            </footer>
        
        </>
        
    )
}

export default Footer;