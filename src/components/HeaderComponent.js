import React, {Component} from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap'

class HeaderComponent extends Component {
    render() {
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/"> Del Papa </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Del Papa</h1>
                                <p> We take insporation from the worlds best cuisienes, in order to create unique experience</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )

    }
}

export default HeaderComponent