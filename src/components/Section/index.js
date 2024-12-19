import Card from '../Card';
import TitleClass from '../TitleClass';
import styles from './Section.module.css'

function Section({titulo}) {
    return (
    <section className={styles.container}>
        <TitleClass
        titulo={titulo} 
        />
        <div className={styles.carrossel}>
            <Card />
            <Card />
            <Card />
        </div>
    </section>
    )
}

export default Section;