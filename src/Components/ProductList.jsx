import React from 'react'
import { useFilterContext } from '../Context/FilterContext'
import GridView from './GridView';
import ListView from './ListView.jsx';

const ProductList = () => {

  const { filterProduct, grid_View } = useFilterContext();
  
  if (grid_View) {
    return <GridView products={filterProduct} />

  }

  if (grid_View === false) {
    return <ListView products={filterProduct} />

  }


}

export default ProductList