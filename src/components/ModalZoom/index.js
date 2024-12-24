import { useState } from 'react';
import styles from './ModalZoom.module.css';

function ModalZoom({ isOpen, onClose, onSave, cardData }) {
    // Os hooks agora são sempre chamados, respeitando as regras do React
    const [titulo, setTitulo] = useState(cardData?.titulo || '');
    const [imagem, setImagem] = useState(cardData?.imagem || '');
    const [descricao, setDescricao] = useState(cardData?.descricao || '');
    const [categoria, setCategoria] = useState(cardData?.categoria || '');
    const [video, setVideo] = useState(cardData?.video || '');

    const handleSave = () => {
        // Salva as alterações feitas no modal
        onSave({ titulo, imagem, descricao, categoria, video });
        onClose(); // Fecha o modal após salvar
    };

    // Renderiza o modal apenas se isOpen for true
    return (
        isOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <h2>Editar Filme</h2>
                    
                    <label>
                        <strong>Título:</strong>
                        <input 
                            type="text" 
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                        />
                    </label>
                    
                    <label>
                        <strong>Descrição:</strong>
                        <textarea
                            rows="3"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </label>
                    
                    <label>
                        <strong>Categoria:</strong>
                        <select 
                            value={categoria} 
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="Romance">Romance</option>
                            <option value="Comédia">Comédia</option>
                            <option value="Terror">Terror</option>
                            <option value="Ação">Ação</option>
                            <option value="Música">Música</option>
                            <option value="Drama">Drama</option>
                            <option value="Animação">Animação</option>
                            <option value="Suspense">Suspense</option>
                            <option value="Infantil">Infantil</option>
                            <option value="Ficção">Ficção</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Histórico">Histórico</option>
                            <option value="Guerra">Guerra</option>
                            <option value="Mistério">Mistério</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Policial">Policial</option>
                            <option value="Documentário">Documentário</option>
                        </select>
                    </label>
                    
                    <label>
                        <strong>URL do Vídeo:</strong>
                        <input 
                            type="text" 
                            value={video} 
                            onChange={(e) => setVideo(e.target.value)} 
                        />
                    </label>
                    
                    <label>
                        <strong>URL da Imagem:</strong>
                        <input 
                            type="text" 
                            value={imagem} 
                            onChange={(e) => setImagem(e.target.value)} 
                        />
                    </label>
                    
                    <div className={styles.buttons}>
                        <button onClick={onClose} className={styles.cancelButton}>Cancelar</button>
                        <button onClick={handleSave} className={styles.saveButton}>Salvar</button>
                    </div>
                </div>
            </div>
        )
    );
}

export default ModalZoom;
