import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decCart, incCart, delCart, clrCart } from '../redux/action/index'
const Cart = () => {
    const state = useSelector((state) => state.handleCart);



    const dispatch = useDispatch();
    const decrement = (product) => {
        dispatch(decCart(product))
    }
    const increment = (product) => {
        dispatch(incCart(product));
    }
    const deleitem = (product) => {
        dispatch(delCart(product))
    }
    const deleteallitem = (state) => {
        dispatch(clrCart(state));

    }
    var ptotal = 0;
    const Cartitem = () => {
        return (
            <>
                <div>
                    <div>
                        <h2>You have sellected this carts</h2>
                    </div>
                    {
                        state.map((product) => {
                            ptotal += product.price * product.qty;
                            return (
                                <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                                    <div className="container py-4">
                                        <div className="btn-close float-end" onClick={() => deleitem(product)}></div>
                                        <div className="row">

                                            <div className="col-md-3">
                                                <img src={product.image} alt={product.title} height="200px" width="180px" />
                                            </div>
                                            <div className="col-md-3">
                                                <h3>{product.title}</h3>
                                                <p className="lead fw-bold">
                                                    {product.qty} x ${product.price}={product.total}
                                                </p>
                                                <div className="btn btn-outline-dark me-4" onClick={() => decrement(product)}>
                                                    <i className="fa fa-minus"></i>
                                                </div>
                                                <div className="btn btn-outline-dark me-4" onClick={() => increment(product)}>
                                                    <i className="fa fa-plus"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )

                        })
                    }
                    <div>
                        <div className="btn float-end" >{ptotal}</div>
                        <div className="btn float-end" onClick={() => deleteallitem(state)}>Delete All Item</div>

                    </div>
                </div>



            </>
        )
    };
    const Emptycart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h1>Empty Cart</h1>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row py-5'>
                    {state.length === 0 ? <Emptycart /> : <Cartitem />}
                </div>
            </div>
        </div>
    )
}
export default Cart;