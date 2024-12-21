import { useCards } from '../../context/CardContext'; // Importando o hook do contexto
import Card from '../Card';
import TitleClass from '../TitleClass';
import styles from './Section.module.css';

function Section({ titulo }) {
  const { cards } = useCards(); // Usando o hook para acessar os cards

  return (
    <section className={styles.container}>
        <TitleClass titulo={titulo} />
        <div className={styles.carrossel}>
        {cards.filter
            (card => card.categoria === titulo).map(
                (card, index) => (
                    <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Section;