import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import { Carrito, ContenedorCarrito, Eliminar, LI, ListaArticulos, UL } from './styles'

export const Carro = ({ cantidad, productos, eliminar }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <ContenedorCarrito>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Carrito onClick={handleMostrarCarro}>
                Carro
            </Carrito>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos>
                        <UL>
                            {
                                productos.map(x => {
                                    return (
                                        <LI>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><Eliminar eliminar={eliminar} productos={x}>X</Eliminar> {x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </LI>
                                    )
                                })
                            }
                            <LI>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </LI>
                            <LI>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </LI>
                            <LI>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </LI>
                        </UL>
                    </ListaArticulos>
            }
        </ContenedorCarrito>

    )
}

