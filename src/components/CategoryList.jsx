import styles from './../../styles/CategoryList.module.scss';

const CategoryList = ({ labels, onAdd, onRemove, checkedList }) => {
    const handleClick = (event) => {
        if (event.target.checked) {
            onAdd(event.target.value);
        } else {
            onRemove(event.target.value);
        }
    };

    return (
        <div className={styles.container}>
            {labels.map((possibleCategory) => {
                return (
                    <div className={styles.item} key={possibleCategory}>
                        <input
                            value={possibleCategory}
                            type="checkbox"
                            onChange={handleClick}
                            className={styles.item__input}
                            id={possibleCategory}
                            checked={checkedList.includes(possibleCategory)}
                        />
                        <label
                            className={styles.item__label}
                            htmlFor={possibleCategory}
                        >
                            {possibleCategory}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoryList;
