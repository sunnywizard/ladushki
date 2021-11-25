import CategoriesServices from '../services/categories';

export const types = {
    CATEGORIES_REQUEST: 'CATEGORIES_REQUEST',
    CATEGORY_REQUEST: 'CATEGORY_REQUEST',
    CATEGORIES_FAILURE: 'CATEGORIES_FAILURE',
    CATEGORY_FAILURE: 'CATEGORY_FAILURE',
    CATEGORIES_SUCCESS: 'CATEGORIES_SUCCESS',
    CATEGORY_SUCCESS: 'CATEGORY_SUCCESS',
    CATEGORIES_CLOSE: 'CATEGORIES_CLOSE',
    GET_CATEGORIES_BY_TITLE: 'GET_CATEGORIES_BY_TITLE',
    GET_CATEGORIES_BY_ID: 'GET_CATEGORIES_BY_ID',
    SEARCH_CATEGORIES_BY_PART_OF_TITLE_OR_TAG:
        'SEARCH_CATEGORIES_BY_PART_OF_TITLE_OR_TAG',
};

export const getCategories = (param = true) => dispatch => {
    if (param) {
        dispatch({ type: types.CATEGORIES_REQUEST });
        CategoriesServices.getCategories()
            .then(res => {
                dispatch({ type: types.CATEGORIES_SUCCESS, payload: { res } });
            })
            .catch(error => {
                dispatch({ type: types.CATEGORIES_FAILURE, payload: { error } });
            });
    } else {
        dispatch({ type: types.CATEGORIES_CLOSE });
    }
};

export const getCategory = id => dispatch => {
    dispatch({ type: types.CATEGORY_REQUEST });
    CategoriesServices.getCategory(id)
        .then(res => {
            dispatch({ type: types.CATEGORY_SUCCESS, payload: { res } });
        })
        .catch(error => {
            dispatch({ type: types.CATEGORY_FAILURE, payload: { error } });
        });
};

export const getCategoriesByTitle = (
    title = 'Все предметы',
    param = true
) => dispatch => {
    if (param) {
        const res = title;
        dispatch({ type: types.GET_CATEGORIES_BY_TITLE, payload: { res } });
    } else {
        dispatch({ type: types.CATEGORIES_CLOSE });
    }
};

export const searchCategoriesByPartOfTitleOrTag = (
    text = '',
    param = true
) => dispatch => {
    if (param) {
        if (text !== '') {
            const res = text.trim().toLowerCase();
            dispatch({
                type: types.SEARCH_CATEGORIES_BY_PART_OF_TITLE_OR_TAG,
                payload: { res },
            });
        }
    } else {
        dispatch({ type: types.CATEGORIES_CLOSE });
    }
};

export const getItemsByCategory = id => dispatch => {
    dispatch({ type: types.CATEGORY_REQUEST });
    CategoriesServices.getItemsByCategory(id)
        .then(res => {
            dispatch({ type: types.CATEGORY_SUCCESS, payload: { res } });
        })
        .catch(error => {
            dispatch({ type: types.CATEGORY_FAILURE, payload: { error } });
        });
};
