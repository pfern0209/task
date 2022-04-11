import { createContext,useState } from "react";

const ProductContext=createContext();

export const ProductProvider=({children})=>{
  const [product,setProduct]=useState([
    {
      id:1,
      name: 'Airpods Wireless Bluetooth Headphones',
      image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      brand: 'Apple',
      category: 'Electronics',
      price: 89.99
    },
    {
      id:2,
      name: 'iPhone 11 Pro 256GB Memory',
      image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
      brand: 'Apple',
      category: 'Electronics',
      price: 599.99
    },
    {
      id:3,
      name: 'Cannon EOS 80D DSLR Camera',
      image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      brand: 'Cannon',
      category: 'Electronics',
      price: 929.99
    },
    {
      id:4,
      name: 'Sony Playstation 4 Pro White Version',
      image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
      brand: 'Sony',
      category: 'Electronics',
      price: 399.99
    },
    {
      id:5,
      name: 'Logitech G-Series Gaming Mouse',
      image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
      brand: 'Logitech',
      category: 'Electronics',
      price: 49.99
    },
    {
      id:6,
      name: 'Amazon Echo Dot 3rd Generation',
      image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99
    }
  ])



 



  return <ProductContext.Provider value={{
    product
  }}>
    {children}
  </ProductContext.Provider>
}


export default ProductContext;