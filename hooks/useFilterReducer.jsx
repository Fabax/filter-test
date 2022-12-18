import { useReducer } from 'react';
import initialState from '../data/initalState';

// Reducer ---------------
const COLOR_ADD = 'COLOR_ADD';
const COLOR_REMOVE = 'COLOR_REMOVE';
const CATEGORY_ADD = 'CATEGORY_ADD';
const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
const PRICE_UPDATE_MIN = 'PRICE_UPDATE_MIN';
const PRICE_UPDATE_MAX = 'PRICE_UPDATE_MAX';
const UPDATE_PAGE = 'UPDATE_PAGE';
const SET_STATE = 'SET_STATE';
const RESET_STATE = 'RESET_STATE';

const reducer = (state, action) => {
    if (action.type === COLOR_ADD) {
        return Object.assign({}, state, {
            colors: [...state.colors, action.payload],
            page: 0,
        });
    }
    if (action.type === COLOR_REMOVE) {
        return Object.assign({}, state, {
            colors: state.colors.filter((color) => color !== action.payload),
            page: 0,
        });
    }

    if (action.type === CATEGORY_ADD) {
        return Object.assign({}, state, {
            categories: [...state.categories, action.payload],
            page: 0,
        });
    }
    if (action.type === CATEGORY_REMOVE) {
        return Object.assign({}, state, {
            categories: state.categories.filter(
                (color) => color !== action.payload
            ),
            page: 0,
        });
    }

    if (action.type === PRICE_UPDATE_MIN) {
        return Object.assign({}, state, {
            pricerange: [action.payload, state.pricerange[1]],
            page: 0,
        });
    }
    if (action.type === PRICE_UPDATE_MAX) {
        return Object.assign({}, state, {
            pricerange: [state.pricerange[0], action.payload],
            page: 0,
        });
    }

    if (action.type === UPDATE_PAGE) {
        return Object.assign({}, state, {
            page: Number(action.payload),
        });
    }

    if (action.type === SET_STATE) {
        return Object.assign({}, state, {
            colors: action.payload.colors,
            categories: action.payload.categories,
            pricerange: action.payload.pricerange,
            page: action.payload.page,
        });
    }

    if (action.type === RESET_STATE) {
        return Object.assign({}, state, initialState);
    }

    return state;
};

function useFilterReducer(initialState) {
    const [filterState, dispatch] = useReducer(reducer, initialState);

    return {
        filterState,
        dispatch,
    };
}

export default useFilterReducer;
