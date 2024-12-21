import { useCards } from '../../context/CardContext'; // Importando o hook do contexto
import Card from '../Card';
import TitleClass from '../TitleClass';
import styles from './Section.module.css';

function Section({ titulo }) {
  const { cards } = useCards(); // Usando o hook para acessar os cards

  // Mapeamento de cores para as categorias
  const categoriaCores = {
    Romance: '#FF6347',    // Tomato
    Comédia: '#FFD700',    // Gold
    Terror: '#8B0000',     // Dark Red
    Ação: '#228B22',       // Forest Green
    Música: '#1E90FF',     // Dodger Blue
    Drama: '#800080',      // Purple
    Animação: '#FF4500',   // Orange Red
    Suspense: '#00008B',   // Dark Blue
    Infantil: '#FF1493',   // Deep Pink
    Ficção: '#8A2BE2',     // Blue Violet
    Fantasia: '#00FA9A',   // Medium Spring Green
    Histórico: '#D2691E',  // Chocolate
    Guerra: '#B22222',     // Firebrick
    Mistério: '#A52A2A',   // Brown
    Thriller: '#DC143C',   // Crimson
    Policial: '#006400',   // Dark Green
    Documentário: '#FFD700' // Gold (para documentários, pode ser uma cor distinta)
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
