import styles from './../../styles/ColorList.module.scss';

const ColorList = ({ labels, onAdd, onRemove, checkedList }) => {
    const handleClick = (event) => {
        if (event.target.checked) {
            onAdd(event.target.value);
        } else {
            onRemove(event.target.value);
        }
    };

    return (
        <div className={styles.container}>
            {labels.map((color) => {
                return (
                    <div className={styles.item} key={color}>
                        <input
                            value={color}
                            type="checkbox"
                            onChange={handleClick}
                            className={styles.item__input}
                            id={color}
                            checked={checkedList.includes(color)}
                        />
                        <label
                            className={styles.item__label}
                            htmlFor={color}
                            style={{ backgroundColor: color }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ColorList;
