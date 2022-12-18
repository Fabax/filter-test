import useSWR from 'swr';

const fetcher = (url) =>
    fetch(url).then((res) => {
        return res.json();
    });

function useProducts(apiUrl) {
    const { data, isLoading, error } = useSWR(`/api/shoes/${apiUrl}`, fetcher);

    return {
        data,
        isLoading,
        error,
    };
}

export default useProducts;
