import React from 'react';

function ItemList() {
    const posts = [
        {
            title: "Monitor",
            body: "Asus 144hz",
            id: 1,
        },

        {
            title: "Mouse",
            body: "Zowie EC2",
            id: 2,
        },

        {
            title: "Teclado",
            body: "Redragon Draconic 60%",
            id: 3,
        },
    ];

    return (
        <div>
            {
                posts.map((post, index) => { return <p> id={index}  {post.title}</p>})
            }
        </div>
    );
}

export default ItemList