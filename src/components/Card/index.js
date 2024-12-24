import { data, Link } from 'react-router-dom';
import styles from './Card.module.css';
import { useState } from 'react';
import ModalZoom from '../ModalZoom';

function Card({ titulo, categoria, corCategoria, imagem, onEdit, modalAberto, fecharModal, salvarAlteracoes, cardSelecionado}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleEdit = (data) => {
        onEdit(data);
        setModalOpen(false);
    };

    return (

        <div className={styles.container} style={{ borderColor: corCategoria }}>
            <Link className={styles.link} to={''}>
                <img 
                    src={imagem} 
                    alt={titulo} 
                    className={styles.capa} 
                />
                <h2>{titulo}</h2>
                <span>{categoria}</span>
            </Link>
            <div className={styles.buttons}>
                <button className={styles.button}>
                    <img src='/assets/remove.png' className={styles.icon} alt='Icone de Deletar' />
                    DELETAR
                </button>
                <button 
                    className={styles.button}
                    onClick={() => setModalOpen(true)}>
                    <img src='/assets/edit.png' className={styles.icon} alt='Icone de Editar' />
                    EDITAR
                </button>
            </div>
            <ModalZoom 
                isOpen={modalAberto} 
                onClose={fecharModal} 
                onSave={salvarAlteracoes} 
                cardData={cardSelecionado} 
            />
        </div>
    );
}

export default Card;
