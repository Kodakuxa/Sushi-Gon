import React from 'react'
import classes from './DatosSushi.module.css';
import Card from '../UI/Card';
import ProductosItem from './ProductosItem/ProductosItem';

const Productos = [
    {
      id: '1',
      name: 'Crazy Gon',
      description: 'Adentro:Camarón, empanizado con salsa spicy, aguacate y queso crema. Afuera: salmón sellado.',
      price: 7,
    },
    {
      id: '2',
      name: 'Dra Gon',
      description: 'Adentro:Camarón tempura, queso crema, zanahoria dulce picante, chiles toreados. Afuera: aguacate.',
      price: 5.5,
    },
    {
      id: '3',
      name: 'Maji Gon',
      description: 'Adentro:Kanikama, chiles toreados, zanahoria dulce, tampico, aguacate, queso crema. Afuera: queso manchego empanizado.',
      price: 6.99,
    },
    {
      id: '4',
      name: 'Orochi gon',
      description: 'Adentro:kanikama, aguacate, queso philadelphia, kakiage, chiles toreados y tampico Afuera: Atun y aguacate.',
      price: 6.99,
    },
  ];

const DatosSushi = () => {

    const ListaProductos = Productos.map((producto) => (
        <ProductosItem
            id = {producto.id}
            key = {producto.id}
            name = {producto.name}
            description = {producto.description}
            price = {producto.price}
        />
    ));

  return (
    <section className={classes.platillos}>
        <Card>
            <ul>{ListaProductos}</ul>
        </Card>
    </section>
  )
}

export default DatosSushi