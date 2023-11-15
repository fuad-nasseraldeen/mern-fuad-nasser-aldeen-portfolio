import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'


export interface Props {
    children?: React.ReactNode
    slide?: number
}


export class Carousel extends React.Component<Props, object> {

    // Owl Carousel Settings
    options = {
        loop: true,
        center: true,
        items: this.props.slide !== undefined ? this.props.slide : 3,
        margin: 10,
        // autoplay: false,
        // dots: true,
        nav: true,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: true,
        // smartSpeed: 850,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        stagePadding: 20,
        responsive: {
            0: {
                items: this.props.slide !== undefined ? this.props.slide : 1
            },
            700: {
                items: this.props.slide !== undefined ? this.props.slide : 2
            },
            1170: {
                items: this.props.slide !== undefined ? this.props.slide : 3
            }
        }
    };


    render() {
        return (
            <OwlCarousel className="slider-items owl-carousel" {...this.options}>
                {this.props.children}
            </OwlCarousel >
        )
    }
}

export default Carousel