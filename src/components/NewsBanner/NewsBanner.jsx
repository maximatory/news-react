import styles from './styles.module.css'
import Image from '../Image/Image';
import {formatTimeAgo} from '../../helpers/formatTimeAgo';

export default function NewsBanner({item}) {
    return (
        <div className={styles.banner}>
            <Image image={item?.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    )
}
