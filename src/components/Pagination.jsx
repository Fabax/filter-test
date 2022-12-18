import { useState, useEffect } from 'react';
import styles from './../../styles/Pagination.module.scss';

const Pagination = ({ current, amount, setPage }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        let pageArray = [];
        for (let i = 0; i < amount; i++) {
            pageArray.push(i);
        }
        setPages(pageArray);
    }, [amount]);

    return amount > 0 ? (
        <div className={styles.container}>
            <button
                disabled={current === 0}
                onClick={() => setPage(current - 1)}
            >
                Previous
            </button>

            {pages.map((pageNumber) => {
                return (
                    <button
                        key={pageNumber}
                        style={current === pageNumber ? { color: 'red' } : {}}
                        onClick={() => setPage(pageNumber)}
                    >
                        {pageNumber + 1}
                    </button>
                );
            })}
            <button
                disabled={current === amount - 1}
                onClick={() => setPage(current + 1)}
            >
                Next
            </button>
        </div>
    ) : null;
};

export default Pagination;
