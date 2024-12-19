import styles from './TitleClass.module.css'


function TitleClass({titulo}) {
    return (
        <div className={styles.title}>
           <h1>
           {titulo}
           </h1>
        </div>
    )
}

export default TitleClass;