import React from 'react'


const carrito = [
    { id: "I-1", name: "Monitor", description: "Asus 144hz", price: 30000,pictureUrl: ""},
    { id: "I-2", name: "Mouse", description: "Zowie EC-2", price: 5000, pictureUrl: ""},
    { id: "I-3", name: "Teclado", description: "Redragon Draconic 60%", price: 10000, pictureUrl: ""},
];

function getCartItems() {
    let miPromesa = new Promise( (resolve, reject) => {

        setTimeout( function() {
            const error = Math.random() > 0.85;
            if(!error) {
                resolve(carrito);
            }
            reject("Error obteniendo los datos :(");
        }, 200);
    });

    miPromesa.then( function(valor) {
        console.log(valor);
    }).catch(
        function(error){
            console.log(error);
        }).finally();

        return(
            <div>
                <button onClick={getCartItems}>Ver Productos</button>
            </div>
        );
};




export default getCartItems;
    