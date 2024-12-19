import { Link } from 'react-router-dom';
import styles from './Card.module.css'

function Card({id, capa, titulo}) {
    return (
        <div className={styles.container}>
            <Link 
                className={styles.link} 
                to={`https://www.youtube.com/embed/ZYKJZBGIqnM?si=tyKYWFyzih9ftMVn`}>
                <img src={'https://musicainstantanea.com.br/wp-content/uploads/2023/09/Don-L-700x875.jpg'} 
                alt={titulo} 
                className={styles.capa} 
                />
                <h2>DON L - CLIPE</h2>
            </Link>
        </div>
    )
}

export default Card;