import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import SearchFilters from '../src/components/SearchFilters';
import ProductList from '../src/components/ProductList';
import Pagination from '../src/components/Pagination';
import parseUrlParams from '../utils/parseUrlParams';
import useProducts from '../hooks/useProducts';
import useFilterReducer from '../hooks/useFilterReducer';
import styles from '../styles/FilterPage.module.scss';
import initialState from '../data/initalState';

export default function FilterPage() {
    const { filterState, dispatch } = useFilterReducer(initialState);
    const [apiUrl, setApiUrl] = useState('');
    const previousApiUrl = useRef('');
    const router = useRouter();

    const { data, isLoading, error } = useProducts(apiUrl);
    const resetState = (newState) => {
        dispatch({ type: 'SET_STATE', payload: newState });
    };
    const updatePage = (page) => {
        dispatch({ type: 'UPDATE_PAGE', payload: page });
    };

    useEffect(() => {
        if (router.isReady) {
            var urlParams = router.query['params'];

            if (urlParams !== undefined) {
                let params = parseUrlParams(urlParams);
                resetState(params);
            }
        }
    }, [router]);

    useEffect(() => {
        const { colors, categories, pricerange, page } = filterState;
        let urlArgs = [];

        if (colors.length > 0) {
            urlArgs.push(`colors=${colors.join(',')}`);
        }

        if (categories.length > 0) {
            urlArgs.push(`categories=${categories.join(',')}`);
        }

        if (Number(pricerange[0]) + Number(pricerange[1]) !== 0) {
            urlArgs.push(`pricerange=${pricerange.join(',')}`);
        }

        if (page !== 0) {
            urlArgs.push(`page=${page}`);
        }

        const url = urlArgs.join('&');
        previousApiUrl.current = apiUrl;

        setApiUrl(url);
    }, [filterState]);

    useEffect(() => {
        if (apiUrl !== '') {
            router.push(`/${apiUrl}`, undefined, { shallow: true });
        } else {
            if (previousApiUrl.current !== '') {
                router.push(`/${apiUrl}`, undefined, { shallow: true });
            }
        }
    }, [apiUrl]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div className={styles.container}>
            <SearchFilters state={filterState} dispatch={dispatch} />
            <ProductList items={data[0]} />
            <Pagination
                current={filterState.page}
                amount={data[1]}
                setPage={updatePage}
            />
        </div>
    );
}
