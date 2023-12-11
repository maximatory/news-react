import { DirectionType, SkeletonType } from '../../interfaces/interfaxes'
import styles from './styles.module.css'

interface Props {
  count?: number
  type?: SkeletonType
  direction?: DirectionType
}

export default function Skeleton({count=1, type='banner', direction='column'}:Props) {
  return (
    <>
        {count > 1 ? 
        (<ul className={direction === 'column' ? styles.columnList : styles.rowList}>
            {[...Array(count)].map((_, index)=>{
                return (
                <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
                )
            })}
        </ul>)
        :
        (<li className={type === 'banner' ? styles.banner : styles.item}></li>)
    }
    </>
  )
}
