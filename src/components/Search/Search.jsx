import styles from './styles.module.css'

export default function Search({keywords, setKeywords}) {
  return (
    <div className={styles.search}>
        <input 
            type="text" 
            className={styles.input} 
            placeholder='Javascript'
            value={keywords}
            onChange={(e)=>{setKeywords(e.target.value)}}
        />
    </div>
  )
}
