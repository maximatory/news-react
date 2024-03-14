import { useTheme } from "@/app/providers/ThemeProvider"

export default function ThemeButton() {
  const {isDark, toogleTheme} = useTheme()
  return (
    <img 
    onClick={toogleTheme} 
    src={`/src/shared/assets/theme/${isDark ? 'dark' : 'light'}.png`} 
    alt="theme" width="40" />
  )
}
