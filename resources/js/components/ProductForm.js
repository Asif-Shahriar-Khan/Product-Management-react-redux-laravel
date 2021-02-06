import React, { Fragment,useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "./../actions/products";


const ProductForm = ({addProduct}) => {

    const [formData, setFormData] = useState(
        {
            name: "",
            price: "",
            expiry_date: ""
        },
        []
    );
    const { name, price, expiry_date } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addProduct(formData);
        setFormData({ name: "", price: "", expiry_date: "" });
    };


    return (
        
<Fragment>
        
            
            <div className="mb-5">
                <form onSubmit={e => {
                        onSubmit(e);
                    }} >
                    <div className="">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">
                                account_circle
                            </i>
                            <input
                                id="icon_prefix"
                                type="text"
                                className="validate"
                                name="name"
                                value={name}
                                onChange={e => onChange(e)}
                                
                            />
                            <label htmlFor="icon_prefix">Enter Name</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">money</i>

                            <textarea
                                id="textarea1"
                                className="materialize-textarea"
                                name="price"
                                value={price}
                                onChange={e => onChange(e)}
                               
                            ></textarea>

                            <label htmlFor="textarea1">Enter Price</label>
                        </div>

                        <div className="input-field col s12">
                            <i className="material-icons prefix">access_time</i>

                            <textarea
                                id="textarea1"
                                className="materialize-textarea"
                                name="expiry_date"
                                value={expiry_date}
                                onChange={e => onChange(e)}
                               
                            ></textarea>

                            <label htmlFor="textarea1">Expiry Date</label>
                        </div>

                        </div>
                    <button
                        className="waves-effect waves-light btn"
                        type="submit"
                        name="action"
                    >Add
                    </button>
                </form>
            </div>

              
</Fragment>
        
    );
};

ProductForm.propTypes = {
    addProduct: PropTypes.func.isRequired
};

export default connect(null, {addProduct})(ProductForm);
