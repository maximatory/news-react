
import formatDate from '../../helpers/formatDate'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>Good morning</h1>
        <p>{formatDate(new Date())}</p>
    </header>
  )
}
