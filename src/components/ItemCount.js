import React from 'react';

const ItemCount = () => {

    function aumentarConteo() {
        setClicks(clicks+ 1);
    };

    function disminuirConteo() {
        setClicks(clicks - 1);
    };

    const [clicks, setClicks] = React.useState(1);
    return (
        <div>
            <button onClick={aumentarConteo}>Agregar</button>
            <button onClick={disminuirConteo}>Quitar</button>
            <p> {`Clickeaste ${clicks} veces`} </p>
        </div>
    )
}


export default ItemCount