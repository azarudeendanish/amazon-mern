import { useState } from 'react'
import './App.css'
import { sampleProducts } from './data'

function App() {

  return (
    <>
      <header>Azar Amazon</header>
      <main>
        <ul>
          {sampleProducts.map((product, index)=>
            <li key={index}>
              <img src={product.image} alt={product.name} className='product-image' />
              <h2>{product.name}</h2>
              <p>$ {product.price}</p>
            </li>
          )}
        </ul>
      </main>
      <footer>Footer section</footer>
    </>
  )
}

export default App
