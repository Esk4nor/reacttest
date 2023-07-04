import styles from './simpsonComponent.module.css'
const SimpsonComponent = (props) =>{
    const {name, surName, age, gender, photo} = props;
    return(
        <div>
            <div >
                <img className={styles.width} src={photo} alt=""/>
            </div>
            <div>{name}-{surName}</div>
            <div>{age}</div>
            <div>{gender}</div>
        </div>
    )
}
export default SimpsonComponent;