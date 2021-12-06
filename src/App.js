import { Fragment, useState } from 'react'
import { Articulos } from "./components/Articulos"
import { ListaArticulos } from './components/Carro/styles'
import { Navbar } from './components/Navbar'
// import React, {useState, useEffect} from 'react'

// base de datos
const informacion = {
  articulos: [
    {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
    {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
    {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
    {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
  ],
  carrito: [
    //{id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg', cantidad: 2},
  ]
}


function App() {
  const [data, setData] = useState(informacion)
  
  const agregarAlCarro = (producto) => {
    // 1- Verificar si el producto clickeado ya està en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      // 2- En caso de ya estar en el carrito, aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }

    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }

  const eliminar = (producto)=>{
    if (data.carrito.find(x => x.id === producto.id)){
        data.carrito.forEach((x,idx)=>{
          if(x.id===producto.id)
          data.carrito.splice(x.id,1)
        })
        setData({...data})
    }
  } 
  // App > Navbar > Carro > Burbuja > Numero de productos

  // let cantidad = data.carrito.length
  let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)

  return (
    <Fragment>
      <Navbar cantidad={cantidad} productos={data.carrito} eliminar={eliminar}/>
      <Articulos agregarAlCarro={agregarAlCarro} data={data} />
    </Fragment>
  );
}

// eliminar=(producto)=>{
//   var opcion=window.confirm("Desea eliminar el producto"+producto.id);
//   if(opcion){
//     var contador=0;
//     var lista=this.useState.data;
//     lista.map((producto)=>{
//       if(producto.id){
//         lista.splice(contador,1);
//       }
//     })
//     this.setData({data: lista});
//   }
// }

  // const [cuenta, setCuenta] = useState(0);
  // useEffect(()=>{
  //   console.log(`Que puntaje le das a los productos ${cuenta}`);
  // });
  // return (
  //   <div>
  //     <h1>El puntaje a los productos es: {cuenta}</h1>
  //     <button onClick={()=> setCuenta(cuenta + 1)}>Voto</button>
  //   </div>
  // );

export default App;
