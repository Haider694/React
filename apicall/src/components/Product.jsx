import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';


function Prodect() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getdata = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false);


        }
        getdata();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-3 " style={{ lineHight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={160} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>

        )

    };
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6" >
                    <img src={product.image} alt={product.tital} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-block-50">{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">Rating{product.rating && product.rating.rate}</p>
                    <i className="fa fa-star"></i>
                    <h3 className="display-6 fw-bolder my-4">${product.price}</h3>
                    <p className="lead">{product.descripion}</p>
                    <button className="btn btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>Add To Card</button>
                    <Link to='cart' className="btn btn-dark ms-2 px-3 py-2"></Link>

                </div>
            </>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row py-5'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Prodect