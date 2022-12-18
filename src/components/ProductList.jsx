import ProductCard from './ProductCard';
import styles from './../../styles/ProductList.module.scss';

const ProductList = ({ items }) => {
    return (
        <div className={styles.container}>
            {items.length > 0 ? (
                items.map((item) => {
                    return (
                        <ProductCard
                            key={item.name}
                            name={item.name}
                            url={item.thumbnailImage.file.url}
                            price={
                                item.shopifyProductEu.variants.edges[0].node
                                    .price
                            }
                        />
                    );
                })
            ) : (
                <p style={{ color: 'red' }}>
                    No products found for this search
                </p>
            )}
        </div>
    );
};

export default ProductList;
