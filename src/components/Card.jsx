import React from "react";

const Card = () => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum laborum nihil eius omnis nemo libero consequatur totam nobis, error molestias! Cupiditate voluptatibus rem quos est quaerat ab quod ad consequatur!</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </>
    )

}

export default Card;