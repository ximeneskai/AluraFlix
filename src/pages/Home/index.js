import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../../components/Section';
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <Banner />
            <Section 
                titulo={'FILMES'}
            />
            <Section 
                titulo={'SÉRIES'}
            />
            <Section 
            titulo={'NOVELAS'}
            />        
        </>
    )
}

export default Home;