import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducers/FilterReducer'

const FilterContext = createContext();

const initalState = {
    filterProduct: [],
    allProducts: [],
    isLoading: false,
    grid_View: true,
    sorting_Value: "lowest"
}


const FilterProvider = ({ children }) => {

    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initalState);

    // grid view function
    const gridViewLayout = () => {
        dispatch({ type: "SET_GRIDVIEW" })
    };

    // list view function
    const listViewLayout = () => {
        dispatch({ type: "SET_LISTVIEW" })
    };

    const sorting = () => {
        dispatch({ type: "SET_SORTING" })
    };


    useEffect(() => {
        dispatch({ type: "SORT_PRODUCTS", payload: products })
        // eslint-disable-next-line
    }, [state.sorting_Value])


    useEffect(() => {
        dispatch({ type: "FILTER_DATA_SET", payload: products });

    }, [products]);



    return (
        <FilterContext.Provider value={{ ...state, gridViewLayout, listViewLayout, sorting }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext)
}


export { useFilterContext, FilterProvider }