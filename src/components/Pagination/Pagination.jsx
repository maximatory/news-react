import styles from './styles.module.css'

export default function Pagination({ currentPage, totalPage, handleNextPage, handlePreviousPage, handlePageClick }) {
    return (
        <div className={styles.pagination}>
            <button onClick={handlePreviousPage} className={styles.arrow} disabled={currentPage <= 1 }>❮</button>
            <div className={styles.listButtons}>
                {
                    [...Array(totalPage)].map((_, index) => {
                        return <button
                            className={styles.pageButton} 
                            key={index}
                            onClick={()=> handlePageClick(index + 1)}
                            disabled={currentPage === index + 1}
                        >{index + 1}</button>
                    })
                }
            </div>
            <button onClick={handleNextPage} className={styles.arrow} disabled={currentPage >= totalPage }>❯</button>
        </div>
    )
}
