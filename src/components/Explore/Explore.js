import React from "react";
import './Explore.css'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Explore = ({ items }) => {

    const [name, setName] = useState('')

    // React.useEffect(() => {
    //     async function getName(){
    //       const response = await axios.get(
    //         'http://127.0.0.1:8000/api/user', {withCredentials:true}
    //       )
    //       setName(response.data)
    //     }
    //     getName()
    //   }, [])

    // React.useEffect(() => {
    //     async function getName(){
    //         fetch('http://127.0.0.1:8000/api/user', {
    //             headers: {'Content-Type': 'application/json'},
    //             credentials: 'include',
    //         })
    //     }getName()
    // })
    // -----------use this api call---------------the one under
    // React.useEffect(() => {
    //     (
    //         async () => {
    //             await fetch('http://127.0.0.1:8000/api/user', {
    //                 headers:{'Content-Type': 'application/json'},
    //                 credentials: 'include',
    //             })
    //         }
    //     )()
    // })

    //   console.log(name)

    return (
        <div className="cardContainer">
            {items.map((item) => {
                return (
                    // <Link to= {`/item/${item.id}`}>
                    //     <div>
                    //         <h1>{item.name}</h1>
                    //         <img src={item.photo_1_url} />
                    //         <h3>${item.price}.00</h3>
                    //     </div>
                    // </Link>

                    <div className="cards">
                        <div className="card ">
                            <div className="card-image">
                                <figure className="image is-square">
                                    <img src={item.photo_1_url} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                    </div>

                                    <div className="media-content">
                                        <div className="content">
                                            Support the artist at their socials: <a>@bulmaio</a>.
                                            <a href="#">#css</a> <a href="#">#responsive</a>
                                            <br />
                                        </div>
                                        <p className="title is-4">{item.name}</p>
                                        <p className="subtitle is-6">${item.price}.00</p>
                                    </div>
                                </div>

                                <footer className="card-footer">
                                    <Link to={`/item/${item.id}`}>
                                        <div href="#" className="card-footer-item">View/Comment</div>
                                    </Link>
                                    <a href="#" className="card-footer-item">Add to Cart</a>
                                </footer>
                            </div>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default Explore