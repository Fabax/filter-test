import styles from './../../styles/ProductCard.module.scss';

const ProductCard = ({ name, url, price }) => {
    return (
        <div className={styles.card__container}>
            <img className={styles.card__img} src={url} alt={name} />
            <div className={styles.card__description}>
                <div className={styles.card__name}>{name}</div>
                <div className={styles.card__price}>{price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
