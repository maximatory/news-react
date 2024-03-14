import { useTheme } from '@/app/providers/ThemeProvider'
import styles from './Header.module.css'
import formatDate from '@/shared/helpers/formatDate'
import { ThemeButton } from '@/features/theme'

export default function Header() {
  const {isDark} = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className="info">
        <h1>Good morning</h1>
        <p>{formatDate(new Date())}</p>
      </div>
      <ThemeButton/>
    </header>
  )
}