import React, {useEffect} from 'react';
import ProductListView from './ProductListView';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getProducts} from "./../actions/products";


const Products = ({products: {products,loading},getProducts}) => {
    useEffect(() => {
        getProducts();
    }, [getProducts])

    return loading ?
    (<div className="progress">
    <div className="indeterminate"></div>
</div>)
:
(
  <div>
  <div className="collection mx-3">
   <a href="#!" className="collection-item active">
      Total Products: {products.length}
   </a>
  </div>
  {products.map(products=>
  <ProductListView  key={products.id} products={products}/>
      )}
  </div>
)
}

Products.propTypes = {
    products: PropTypes.object.isRequired,
    getProducts:PropTypes.func.isRequired,
}

const mapStateToProps = state =>  ({
    products: state.products
})

export default connect(mapStateToProps, {getProducts})(Products);
        
    



