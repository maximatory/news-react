import styles from './styles.module.css'

export default function Categories({categories, selectedCategory, setSelectedCategory}) {
  return (
    <div className={styles.categories}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={()=>{setSelectedCategory(null)}}
        >All</button>
        {categories.map(category=>{
            return <button 
                        key={category}
                        className={selectedCategory === category ? styles.active : styles.item}
                        onClick={()=> {setSelectedCategory(category)}}
                    >{category}</button>
        })}
    </div>
  )
}
