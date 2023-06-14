const FilterReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_DATA_SET":
            return {
                ...state,
                isLoading: false,
                filterProduct: [...action.payload],
                allProduct: [...action.payload]
            }

        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_View: true,
            }
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_View: false,
            }
        case "SET_SORTING":
            const userSortValue = document.getElementById("sort");
            let sortedValue = userSortValue.options[userSortValue.selectedIndex].value;
            console.log(sortedValue)
            return {
                ...state,
                sorting_Value: sortedValue,
            };

        case "SORT_PRODUCTS":
            let newSortData;
            let tempSortData = [...action.payload]

            if (state.sorting_Value === "highest") {
                newSortData = tempSortData.sort((a, b) => (b.price - a.price))
            };


            if (state.sorting_Value === "lowest") {
                newSortData = tempSortData.sort((a, b) => (a.price - b.price))
            };


            if (state.sorting_Value === "a-z") {
                newSortData = tempSortData.sort((a, b) => (a.name.localeCompare(b.name)))
            };


            if (state.sorting_Value === "z-a") {
                newSortData = tempSortData.sort((a, b) => (b.name.localeCompare(a.name)))
            }
            return {
                ...state,
                filterProduct: newSortData
            }
        default:
            return state;
    }
}

export default FilterReducer