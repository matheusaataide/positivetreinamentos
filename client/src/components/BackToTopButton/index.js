import React, { useState, useEffect } from 'react';

import './styles.css';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => { 
        if (document.documentElement.scrollTop > (window.screen.height - 200)) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }
    useEffect (() => {
        window.onscroll = () => handleScroll();
    })
    

    return (
    <a href="#top" className={`back-to-top page-scroll ${visible ? 'visible' : ''}`}>
        Voltar ao topo
    </a>	
    );
};

export default BackToTopButton;