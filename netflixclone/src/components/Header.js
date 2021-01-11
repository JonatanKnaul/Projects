import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/351efdd5c9879db23df33bde.png?h=5b77d69fb762d7c92c00abe353376534" alt="Usuário" />
                </a>
            </div>
        </header>    
    )
}