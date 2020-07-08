import React, { Component } from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="https://www.google.com">Product Shoppe</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
