import React from 'react'
import SingleProduct from './SingleProduct'
import Allproducts from './data'

const ProductView = () =>{
      return(<main>
      <section className='container'>
        <h3>Our available products</h3>

      <section className='info'>
        {Allproducts.map((product) =>{
          return(
            <SingleProduct product={product} key={product.id}/>
            )
          }
          )}
          </section>
        </section>
      </main>)}

export default ProductView