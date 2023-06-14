import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducers/ProductReducer'

const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products";


const initializeState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProduct: [],
    isSingleLoading: false,
    singleProducts: {},
}

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initializeState)

    const getData = async (url) => {
        dispatch({ type: "SET_LOADING" });

        try {
            const res = await axios.get(url)
            const products = res.data;
            

            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });

        }


    }


    // my 2nd api call for single product


    const getSingleProdData = async (url) => {

        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url)
            const singleProduct = res.data;

            dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_ERROR" });
        }
    }

    useEffect(() => {

        getData(API)
    }, [])


    return (
        <AppContext.Provider value={{ ...state, getSingleProdData }}>{children}</AppContext.Provider>
    );
};


//Custom Hook 

const useProductContext = () => {
    return useContext(AppContext)

}

export { AppProvider, AppContext, useProductContext }