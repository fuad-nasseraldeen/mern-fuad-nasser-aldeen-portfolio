import React, { Component } from 'react';

export interface State {
    opacity: string
}
export interface Props {
    children?: React.ReactNode
}
class About extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            opacity: '1'
        }
    }


    componentDidMount() {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                const currentScrollPos = window.pageYOffset;
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                // console.log(maxScroll)
                if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
                    this.setState({ opacity: "0" })
                    // console.log(currentScrollPos)
                } else {
                    this.setState({ opacity: "1" })
                }
            }
        }
    }

    render() {
        return (
                <div style={{ opacity: `${this.state.opacity}` }} >
                {this.props.children}
                </div>
        )
    }
}

export default About