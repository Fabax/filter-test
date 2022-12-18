import { useState } from 'react';
import styles from './../../styles/PriceRange.module.scss';

const PriceRange = ({ onUpdateMin, onUpdateMax, minPrice, maxPrice }) => {
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);

    const handleChangeMin = () => {
        onUpdateMin(Number(min));
    };

    const handleChangeMax = () => {
        onUpdateMax(Number(max));
    };

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <label htmlFor="min" className={styles.label}>
                    Min Price
                </label>
                <input
                    id="min"
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    onBlur={handleChangeMin}
                    value={min}
                    className={styles.input}
                />
            </div>
            <div className={styles.subContainer}>
                <label htmlFor="max" className={styles.label}>
                    Max Price
                </label>
                <input
                    id="max"
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    onBlur={handleChangeMax}
                    value={max}
                    className={styles.input}
                />
            </div>
        </div>
    );
};

export default PriceRange;
