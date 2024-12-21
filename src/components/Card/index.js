import { Link } from 'react-router-dom';
import styles from './Card.module.css';


function Card({ titulo }) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`https://www.youtube.com/embed/ZYKJZBGIqnM?si=tyKYWFyzih9ftMVn`}>
                <img 
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/SENSACIONAL_-_Show_Don_L_%2852189882930%29_%28cropped%29.jpg/640px-SENSACIONAL_-_Show_Don_L_%2852189882930%29_%28cropped%29.jpg'} 
                    alt={titulo} 
                    className={styles.capa} 
                />
                <h2>DON L</h2>
            </Link>
            <div className={styles.buttons}>
                <button className={styles.button}>
                    <img src='/assets/remove.png' className={styles.icon} alt='Icone de Deletar' />
                    DELETAR
                </button>
                <button className={styles.button}>
                    <img src='/assets/edit.png' className={styles.icon} alt='Icone de Editar' />
                    EDITAR
                </button>
            </div>
        </div>
    );
}

export default Card;

