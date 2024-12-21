import { Link } from 'react-router-dom';
import styles from './Card.module.css';


function Card({ titulo, imagem }) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={''}>
                <img 
                    src={imagem} 
                    alt={titulo} 
                    className={styles.capa} 
                />
                <h2>{titulo}</h2>
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

