import { useState } from 'react';
import styles from './Form.module.css';
import { useCards } from '../../context/CardContext';

function Form() {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        video: '',
        descricao: ''
    });

    const { addCard } = useCards();

    // Função para lidar com as mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Função para adicionar o card ao estado
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        addCard(formData);
        setFormData({
            titulo: "",
            categoria: "",
            imagem: "",
            video: "",
            descricao: ""
        });
    };

    // Função para resetar o formulário
    const handleReset = () => {
        setFormData({
            titulo: "",
            categoria: "",
            imagem: "",
            video: "",
            descricao: ""
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NOVO VÍDEO</h1>
            <p className={styles.subtitle}>Complete o formulário para criar um novo card de vídeo.</p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        placeholder="Insira o título"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
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
                        <option value="Documentário">Documentário</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="imagem">Imagem</label>
                    <input
                        type="text"
                        id="imagem"
                        name="imagem"
                        value={formData.imagem}
                        onChange={handleChange}
                        placeholder="Cole o link da imagem"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="video">Vídeo</label>
                    <input
                        type="text"
                        id="video"
                        name="video"
                        value={formData.video}
                        onChange={handleChange}
                        placeholder="Cole o link do vídeo"
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        placeholder="Sobre o que é esse vídeo?"
                        required
                    />
                </div>

                <div className={styles.actions}>
                    <button type="submit" className={styles.saveButton}>Guardar</button>
                    <button type="button" className={styles.resetButton} onClick={handleReset}>Limpar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
