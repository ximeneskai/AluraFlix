import { useCards } from '../../context/CardContext'; // Importando o hook do contexto
import Card from '../Card';
import TitleClass from '../TitleClass';
import styles from './Section.module.css';

function Section({ titulo }) {
  const { cards } = useCards(); // Usando o hook para acessar os cards

  // Mapeamento de cores para as categorias
  const categoriaCores = {
    Romance: 'rgba(255, 99, 71, 0.5)',
    Comédia: 'rgba(255, 215, 0, 0.5)',
    Terror: 'rgba(139, 0, 0, 0.5)',
    Ação: 'rgba(34, 139, 34, 0.5)',
    Música: 'rgba(30, 144, 255, 0.5)',
    Drama: 'rgba(128, 0, 128, 0.5)',
    Animação: 'rgba(255, 69, 0, 0.5)',
    Suspense: 'rgba(0, 0, 139, 0.5)',
    Infantil: 'rgba(255, 20, 147, 0.5)',
    Ficção: 'rgba(138, 43, 226, 0.5)',
    Fantasia: 'rgba(0, 250, 154, 0.5)',
    Histórico: 'rgba(214, 105, 30, 0.5)',
    Guerra: 'rgba(178, 34, 34, 0.5)',
    Mistério: 'rgba(165, 42, 42, 0.5)',
    Thriller: 'rgba(220, 20, 60, 0.5)',
    Policial: 'rgba(0, 100, 0, 0.5)',
    Documentário: 'rgba(255, 215, 0, 0.5)'
    };

  // Cor da categoria
  const corCategoria = categoriaCores[titulo] || '#FFFFFF'; // Padrão: branco, se a categoria não for encontrada

  return (
    <section className={styles.container}>
      <TitleClass titulo={titulo} corCategoria={corCategoria} />
      <div className={styles.carrossel}>
        {/* Filtra os cards pela categoria e renderiza */}
        {cards.filter(card => card.categoria === titulo).map((card, index) => (
          <Card key={index} {...card} corCategoria={corCategoria} />
        ))}
      </div>
    </section>
  );
}

export default Section;
