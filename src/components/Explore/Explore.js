import React from "react";
import './Explore.css'
import { Link } from "react-router-dom";


const Explore = ({ items }) => {
    return (
        <div>
            <h1>WELCOME</h1>
            {items.map((item) => {
                return (
                    <Link to= {`/item/${item.id}`}>
                        <div>
                            <h1>{item.name}</h1>
                            <img src={item.photo_1_url} />
                            <h3>${item.price}.00</h3>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}

export default Explore