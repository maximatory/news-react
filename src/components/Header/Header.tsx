import formatDate from '../../helpers/formatDate'
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css'

export default function Header() {
  const {isDark, toogleTheme} = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className="info">
        <h1>Good morning</h1>
        <p>{formatDate(new Date())}</p>
      </div>
      <img 
        onClick={toogleTheme} 
        src={`/src/assets/theme/${isDark ? 'dark' : 'light'}.png`} 
        alt="theme" width="40" />
    </header>
  )
}

