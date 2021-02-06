import React, { Fragment,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import ProductForm from './ProductForm';
import Products from './Products';
import store from '../store';
import {Provider} from 'react-redux';
import {getProducts} from './../actions/products';

const Example = () => {
    useEffect(() => {
        store.dispatch(getProducts());
    }, []);
    return (

        <Provider store={store}>
        <Fragment>
        

            
                <Navbar/>
                <div className="container">
                <ProductForm/>
                
                <Products/>
                

                </div>
            

        
        </Fragment>
        </Provider>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
