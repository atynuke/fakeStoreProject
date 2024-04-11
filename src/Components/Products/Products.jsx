import React, { useEffect, useState } from 'react'
import Carts from '../Carts/Cart'
import './Products.css'


const StoreCart = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState([false])

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        setLoading(true);
        try {
            await fetch("https://fakestoreapi.com/products")
                .then(async (res) => {
                    setProduct(await res.json());
                    setLoading(false);
                });
        }
        catch {
            (err) => {
                setLoading(false);
                return console.log(err)
            }
        }
    }


    return (
        <>
            {product.length}
            {
                loading ? <p style={{ textAlign: "center" }} >please wait,loading...</p>:
                    <div style={{ display: "flex", gap: "70px", flexWrap: "wrap" }}>
                        {
                         product.map((cart)=>{
                                return(
                                    <StoreCart key={cart.id} title={cart.title} price={cart.price} description={cart.description} category={cart.category} image={cart.image} />
                                )
                            })
                        }
                    </div>





            }
        </>


    )
}


export default StoreCart