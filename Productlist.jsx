import React from 'react'

export default function Productlist() {
    const Products=[
        {
            id : 1,
            Name : "Jujutsu Kaisen Manga",
            Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbgbLBB-3oVK_OhY1vJ4EOBkN6aQA1yKxwg&s" ,
            Price : 1000
        },
        {
            id : 2,
            Name : "One Piece Manga",
            Image : "https://m.media-amazon.com/images/I/91SwB+kqrEL._UF1000,1000_QL80_.jpg",
            Price : 1200
        },
        {
            id : 3,
            Name : "Demon Slayer Manga",
            Image : "https://rukminim2.flixcart.com/image/480/640/xif0q/book/b/x/a/demon-slayer-kimetsu-no-yaiba-vol-20-original-imahy5kpjybu7trp.jpeg?q=90",
            Price : 1500
        },
        {
            id : 4,
            Name : "Attack on Titan Manga",
            Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLPK8VDxd0MQkR8geMoT_1Ul8A2HOhrLUoA&s",
            Price : 2000
        },
        {
            id : 5,
            Name : "My Hero Academia Manga",
            Image : "https://m.media-amazon.com/images/I/81AjnD8nvHL._AC_UF1000,1000_QL80_.jpg",
            Price : 1800
        },
        {
            id : 6,
            Name : "Naruto Manga",
            Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgy4RFkOhKbWbfX4h8mCLR1o6nWCXLT1h_lQ&s",
            Price : 2200
        },
        {
            id : 7,
            Name : "Dragon Ball Manga",
            Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZiulaZmlDlnDq7yc2WVTQF-WKK81s9QOXQ&s",
            Price : 2500
        },
        {
            id : 8,
            Name : "Death Note Manga",
            Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZBleI_sJmaOR5CwV1cb_Zxi-QQj3s2s8eg&s",
            Price : 1300
        },
        {
            id : 9,
            Name : "Bleach Manga",
            Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-9qat6Gx5xpxQQ5VBfIHmPWrN8xGO0-Z0w&s",
            Price : 1700
        },
        {
            id : 10,
            Name : "Fullmetal Alchemist Manga",
            Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc11uYr43Uyl_L1yv1twG-bLSoFmIUxeHegw&s",
            Price : 1900
        }
    ]
  return (
    <div className='container'>
        <h2>Product List</h2>
        {
            Products.map((el)=>(
                <div className='card' key={el.id}>
                    <img src={el.Image} alt={el.Name} className='img' />
                    <h3>{el.Name}</h3>
                    <p>Price: ${el.Price.toFixed(2)}</p>
                </div>
            ))
        }
    </div>
  )
}
