import styles from './styles.module.css'

export default function Categories({categories, selectedCategory, setSelectedCategory}) {
  return (
    <div className={styles.categories}>
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
