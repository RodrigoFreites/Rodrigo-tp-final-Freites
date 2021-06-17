import React from 'react'
import ItemList from './ItemList';

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
