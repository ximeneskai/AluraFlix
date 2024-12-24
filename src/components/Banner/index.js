import { useCards } from '../../context/CardContext';
import BlueLine from '../BlueLine';
import ItemDestaque from '../ItemDestaque';
import styles from './Banner.module.css'

function Banner() {

    const { cards } = useCards();

    const mockCard = {
        titulo: "Interestellar",
        descricao: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
        video: "https://www.youtube.com/",  // Link para o vídeo
        imagem: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-cartaz.jpg",  // Imagem mockada
      };

    // const randomCard = cards.length > 0 ? cards[Math.floor(Math.random() * cards.length)] : null;

    return (
        <>
            <section className={styles.container}>

                <div className={styles.banner}
                style={{
                backgroundImage: `url(${mockCard.imagem})`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.85)'}}
                >
                    <ItemDestaque card={mockCard} />
                </div>

                {/* {randomCard ? (
                    <div className={styles.banner}
                        style={{backgroundImage: `url(${randomCard.imagem})`,
                                backgroundSize: 'cover',
                                backgroundBlendMode: 'multiply',
                                backgroundColor: 'rgba(0, 0, 0, 0.85)'}}
                    >
                        <ItemDestaque card={randomCard} />
                    </div> 
                    ) : (
                    <div className={styles.banner}>
                        <p>Nenhum vídeo disponível. Adicione um vídeo para começar!</p>
                    </div>
                )} */}
                
            </section>
            <BlueLine />
        </>
        
    )
}

export default Banner;