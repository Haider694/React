import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


function ProdectList() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const componentMounted = true;

    useEffect(() => {
        const getdata = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products`);
            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
                console.log(data);
                console.log(filter);


            }
            return () => {
                componentMounted = false
            }

        }
        getdata();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={260} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={260} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={260} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={260} />
                </div>
            </>
        )

    };
    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }
    const ShowitemNavbar = () => {
        return (
            <div>
                <div className='button d-flex justify-content-center mb-2 pd-2'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark  me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                <div>
                    {
                        filter.map((item) => {
                            return (
                                <>
                                    <div className='float-start col-md-3 '>
                                        <div className="card m-3 w-3 h-100 text-center" key={item.id}>
                                            <img className='card-img-top' height='200px' src={item.image} alt={item.title} />
                                            <div className="card-body">
                                                
                                                <h5 className="card-title mb-0">{item.title.substring(0,12)}</h5>
                                                <p className="card-text lead fw-bold">{item.price}</p>
                                                <Link to={`/products/${item.id}`} className="btn btn-outline-dark">By Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 md-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest item</h1>
                        <hr />
                    </div>
                    <div className='row'>
                        {loading ? <Loading /> : <ShowitemNavbar />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdectList