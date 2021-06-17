import React, {useState} from 'react'
import Item from './Item';


function ItemList() {
    const carrito = [
        { id: "I-1", name: "Monitor", description: "Asus 144hz", price: 30000,pictureUrl: "", stock: 10},
        { id: "I-2", name: "Mouse", description: "Zowie EC-2", price: 5000, pictureUrl: "", stock: 30},
        { id: "I-3", name: "Teclado", description: "Redragon Draconic 60%", price: 10000, pictureUrl: "", stock:6},
    ];
    
    const [products, setProducts] = useState([])
    
    function getCartItems() {
        let miPromesa = new Promise( (resolve, reject) => {
    
            setTimeout( function() {
                const error = false;
                if(!error) {
                    resolve(carrito);
                }
                reject("Error obteniendo los datos :(");
            }, 200);
        });
    
        miPromesa.then( function(valor) {
            setProducts(carrito);
        }).catch(
            function(error){
                console.log(error);
            }).finally();
    
    };
    
    return(
        <div>
            <button onClick={getCartItems}>Ver Productos</button>
            <div>
                {products.map( (prod)=> (
                    <Item
                    name={prod.name}
                    description={prod.description}
                    stock={prod.stock}
                    >
                    </Item>
                ))}
            </div>
        
        </div>
    );
}

export default ItemList