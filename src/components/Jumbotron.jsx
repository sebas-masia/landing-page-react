import React from "react";

const Jumbotron = () => {
    return (
        <>
            <div className="container-fluid py-5 d-flex justify-content-evenly flex-column bg-light mt-2">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, esse provident non ea cumque neque fuga eum veritatis praesentium suscipit voluptates recusandae obcaecati tempore sapiente tempora laborum totam. Sapiente, eum.</p>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary btn-lg">Call to action!</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Jumbotron;