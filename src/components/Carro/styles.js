import styled from "styled-components";

export const ContenedorCarrito = styled.div`
position: relative;
` 
export const Carrito = styled.button`
background-color: #118002 ;
border: none;
border-radius: 5px;
color: #fff ;
padding: 10px 15px;
cursor: pointer;
`

export const ListaArticulos = styled.div`
border-radius: 5px;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
background-color: #fff ;
color: #000 ;
padding: 10px;
position: absolute;
right: 0px;
top: 50px;
width:  400px;
`
export const UL = styled.ul`
list-style-type: none;
margin: 0px;
padding: 0px;
`
export const LI = styled.li`
align-items: center;
border-bottom: 1px dashed #ccc;
display: flex;
justify-content: space-between;
margin-bottom: 10px;
padding-bottom: 5px;
`
export const Eliminar = styled.button`
border: none;
background-color: #fb0207;
border-radius: 50%;
color: #fff;
cursor: pointer;
font-size: 0.6em;
padding: 2px 5px;
`
