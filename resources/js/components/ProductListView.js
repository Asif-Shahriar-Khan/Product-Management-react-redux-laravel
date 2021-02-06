import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import {deleteProduct} from './../actions/products';
import PropTypes from 'prop-types';

const ProductListView = ({products:{name,price,expiry_date,id},deleteProduct}) => {
    return (
        <Fragment>

<div>
                <ul className="collection mx-3">
                    <li className="collection-item avatar">
                        <i className="material-icons circle">info</i>
                        <span className="title">{name}</span>
                        <p>{price}</p>
                        <p>{expiry_date}</p>
                        <a
                            className="waves-effect waves-light btn"
                        
                        >
                            <i className="material-icons right">
                                edit
                            </i>Edit </a> 
                            

                            <a
                            className="secondary-content waves-effect waves-light  red darken-3 btn"
                                 onClick={()=>deleteProduct(id)}>
                        
                            <i className="material-icons left">
                                delete_forever
                            </i>
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

ProductListView.propTypes = {
    deleteProduct: PropTypes.func.isRequired,
}

export default connect(null,{deleteProduct})(ProductListView);
