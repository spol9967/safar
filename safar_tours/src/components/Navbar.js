import React, { Component } from 'react'

class Navbar extends Component {
    state = {
        toggleMenu: false,
        setToggleMenu: false,
        showbar: false
    }
    toggleHandler = () => {
        this.state.toggleMenu = !this.state.toggleMenu
        this.forceUpdate();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleNav);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleNav);
    }

    handleNav = (e) => {
        console.log(window.scrollY)
        if(window.scrollY>557){
            this.state.showbar= true
            this.forceUpdate();
        }
        if(window.scrollY<557){
            this.state.showbar= false
            this.forceUpdate();
        }
    }

    render() {
        let style = {display : 'none'}
        if (this.state.showbar) {
            style = {display : 'flex'}
        }
        return (
            <section className="glassnav" >
                <nav className="navbar navbar-expand-sm navbar-light" style={style}>
                    <div className="container">
                        <div className="logo">
                            <img src="/images/ftrLogo.png" width="60" height="60" class="img-fluid" alt="LOGO" />
                        </div>
                        <button className="navbar-toggler ml-auto" type="button" onClick={this.toggleHandler} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={this.state.toggleMenu} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={this.state.toggleMenu ? { display: 'block', transition: '0.3s height ease-in', height: 'auto' } : { display: 'none' }}>
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-dark" href="#">BOOK CAR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">HOLIDAYS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-dark" href="#">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-dark" href="#">INFO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        )
    }
}




export default Navbar
