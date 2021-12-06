import { Carro } from '../Carro'
import styles from './estilos'
import { Encabezado } from './styles'

export const Navbar = ({ cantidad, productos, eliminar }) => {
    return (
        <Encabezado>
            <p>Logo</p>
            <Carro cantidad={cantidad} productos={productos} eliminar={eliminar}/>
        </Encabezado>
    )
}