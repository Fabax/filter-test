import ColorList from './ColorList';
import CategoryList from './CategoryList';
import PriceRange from './PriceRange';
import styles from './../../styles/SearchFilter.module.scss';
import possibleColors from '../../data/possibleColors';
import possibleCategories from '../../data/possibleCategories';
import initialState from '../../data/initalState';
import { useState, useEffect } from 'react';

const SearchFilters = ({ state, dispatch }) => {
    const [showClear, setShowClear] = useState(false);

    useEffect(() => {
        setShowClear(JSON.stringify(state) !== JSON.stringify(initialState));
    }, [state]);

    const addColor = (color) => {
        dispatch({ type: 'COLOR_ADD', payload: color });
    };

    const removeColor = (color) => {
        dispatch({ type: 'COLOR_REMOVE', payload: color });
    };

    const addCategory = (category) => {
        dispatch({ type: 'CATEGORY_ADD', payload: category });
    };

    const removeCategory = (category) => {
        dispatch({ type: 'CATEGORY_REMOVE', payload: category });
    };

    const updatePriceMin = (priceMin) => {
        dispatch({ type: 'PRICE_UPDATE_MIN', payload: priceMin });
    };

    const updatePriceMax = (priceMax) => {
        dispatch({ type: 'PRICE_UPDATE_MAX', payload: priceMax });
    };

    const resetFilters = () => {
        dispatch({ type: 'RESET_STATE' });
    };

    return (
        <div className={styles.container}>
            {showClear ? (
                <button className={styles.clear} onClick={resetFilters}>
                    clear filters
                </button>
            ) : null}
            <div className={styles.subContainer}>
                <CategoryList
                    labels={possibleCategories}
                    onAdd={addCategory}
                    onRemove={removeCategory}
                    checkedList={state.categories}
                />
            </div>
            <div className={styles.subContainer}>
                <ColorList
                    labels={possibleColors}
                    onAdd={addColor}
                    onRemove={removeColor}
                    checkedList={state.colors}
                />
            </div>
            <div className={styles.subContainer}>
                <PriceRange
                    onUpdateMin={updatePriceMin}
                    onUpdateMax={updatePriceMax}
                    minPrice={state.pricerange[0]}
                    maxPrice={state.pricerange[1]}
                />
            </div>
        </div>
    );
};

export default SearchFilters;
