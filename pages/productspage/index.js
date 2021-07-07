import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllProducts} from '../../store/bookstoreSlice'
import { useRouter } from "next/router";
import Link from "next/link";


function productPage() {
    const dispatch = useDispatch()
      const router = useRouter();

    const products = useSelector(state => state.bookstore.product)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [fetchAllProducts])
    
    if(!products) return <div>loading...</div> //FIXME: create loading modal
    console.log(products)
    return (
        <div>
            {/* <Link href={`/productspage/${product.handle}`}>hello</Link>  */}
            {/* {
                products.map((product,i)=>{
                    return <Link href={product.handle} key={i}>{product.title}</Link>
                })
            }  */}
        </div>
    )
}

export default productPage
