import React from 'react';

const ScrollDownArrow = () => {
    return (
        <span className="hero-scroll" data-aos={window.innerWidth > 900 ? "fade-up" : ''} data-aos-easing="ease" data-aos-delay="200">
            Scroll down
            <br />
            <a href={window.innerWidth < 600 ? '#about' : '#project'}><i className="fa fa-chevron-down bounce chevron"></i></a></span>
    );
};

export default ScrollDownArrow;
