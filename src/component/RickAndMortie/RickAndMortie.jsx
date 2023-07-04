import styles from './RickAndMortie.module.css'
const RickAndMortie = (props) =>{
    const {name, alive, location, firstSeeIn, photo} = props;
    return(
        <div>
            <div className={styles.flex}>
                <img className={styles.width} src={photo} alt=""/>
            <div>
                <div>{name}</div>
                <div>Alive-{alive}</div>
                <div>Last known location:</div>
                <div>{location}</div>
                <div>First seen in:</div>
                <div>{firstSeeIn}</div>
            </div>
            </div>

        </div>
    )
}
export default RickAndMortie;