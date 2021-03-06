import { Button } from '../Button'
import { Container, Image, ProductName, Price } from './styles'

export const Articulo = ({prod, agregarAlCarro}) => {
    return (
        <Container nombre={prod.nombre}>
            <Image imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>
            <Button onClick={()=>window.confirm("Desea agregar")} prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </Container>
    )
}