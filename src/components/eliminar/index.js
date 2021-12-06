import { Eliminar } from "../Carro/styles"

export const Eliminar = ({children, eliminar, producto}) => {
    return (
        <Eliminar onClick={() => window.confirm("Desea eliminar el producto")?eliminar(producto):null} >{children}</Eliminar>
    )
}
