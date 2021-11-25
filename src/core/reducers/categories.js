import {types} from '../actions/categories';

const initialState = {
    fetching: false,
    categoryFetching: false,
    inputCategories: [],
    categories: [],
    searchCategories: [],
    category: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES_BY_TITLE: {
            const categories =
                action.payload.res === 'Все категории'
                    ? state.inputCategories
                    : state.inputCategories.filter(
                    category => category.name === action.payload.res
                    );

            return {
                ...state,
                fetching: false,
                error: null,
                categories,
            };
        }

        case types.SEARCH_CATEGORIES_BY_PART_OF_TITLE_OR_TAG: {
            const searchCategories = state.inputCategories.filter(category => {
                let contents;
                try {
                    contents = JSON.parse(category.contents);
                } catch (e) {
                    contents = category.contents;
                }
                const themes =
                    contents && contents.programm
                        ? contents.programm.map(item => item.theme)
                        : [];

                return (
                    category.name.toLowerCase().includes(action.payload.res)
                );
            });

            return {
                ...state,
                fetching: false,
                error: null,
                searchCategories,
            };
        }

        case types.CATEGORIES_CLOSE:
            return initialState;

        case types.CATEGORIES_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
            };

        case types.CATEGORIES_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                inputCategories: action.payload.res,
                categories: action.payload.res,
            };

        case types.CATEGORY_REQUEST:
            return {
                ...state,
                categoryFetching: true,
                error: null,
            };

        case types.CATEGORY_SUCCESS:
            return {
                ...state,
                categoryFetching: false,
                error: null,
                category: action.payload.res,
            };

        case types.CATEGORIES_FAILURE:
            return {
                ...state,
                fetching: false,
                inputCategories: [],
                categories: [],
                error: action.payload.error,
            };
        case types.CATEGORY_FAILURE:
            return {
                ...state,
                categoryFetching: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};
