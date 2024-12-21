import { useState } from 'react';
import styles from  './Form.module.css'
import Card from '../Card';

function Form() {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        video:'',
        descricao:''
    });

    const [cards, setCards] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();

        setCards([...cards, formData]);

        setFormData({
            titulo: "",
            categoria: "",
            imagem: '',
            video: '',
            descricao: ''
        });
    };

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
            
            <form className={styles.form} onSubmit={''}>
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
                        placeholder='Selecione uma categoria'
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="Romance">Romance</option>
                        <option value="Comédia">Comédia</option>
                        <option value="Terror">Terror</option>
                        <option value="Ação">Ação</option>
                        <option value="Música">Música</option>
                        <option value="Drama">Drama</option>
                        <option value="Animação">Animação</option>
                        <option value="Suspense">Suspense</option>
                        <option value="Infantil">Infantil</option>
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
                    <button type="submit" className={styles.saveButton} onClick={''}>Guardar</button>
                    <button type="button" className={styles.resetButton} onClick={handleReset}>Limpar</button>
                </div>
            </form>

            <div className={styles.cards}> 
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        id={index}
                        capa={card.imagem}
                        titulo={card.titulo}
                        categoria={card.categoria}
                        descricao={card.descricao}
                    />
                ))}
            </div>
        </div>
    );
}

export default Form;