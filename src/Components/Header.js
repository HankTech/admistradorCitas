import React from 'react'

const Header = (props) => {
    return(
        <header>
            <h1 className="text-center text-white h1 mt-5 mb-5">
                {props.title}
            </h1>
        </header>
    )
}

export default Header;