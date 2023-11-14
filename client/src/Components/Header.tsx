import React, { useEffect } from 'react'
import Type from '../Layouts/Typewriter/Type.tsx'
// import FloatingShapes from './FloatingShapes.tsx'

import SocialMedia from '../Layouts/SocialMedia.tsx'
import ScrollDownArrow from '../Layouts/ScrollDownArrow.tsx'
import { ParticleComponent } from '../Layouts/Particles.tsx'

import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';
const Header = () => {
    const profile: Profile = useSelector((state: RootState) => state.profile);
    useEffect(() => {
        // ComponentDidMount logic can go here
    }, []);

    return (
        <section id="header" className="header">
            <ParticleComponent />
            {/* <FloatingShapes /> */}

            <div className='heading-primary'>
                <div className='heading-primary__main' >
                    <div className="heading">
                        <h1 className='heading-title'>Hello </h1>
                        <span className='wave' role='img' aria-labelledby='wave'>
                            👋
                        </span>,
                    </div>
                    <h1 className='heading-title'>I'm {profile?.firstName} {profile?.lastName}</h1>
                    <span className='heading-primary__main--sub sub-heading-gray'><Type></Type></span>

                </div>
                <div className="heading-primary__secondary">
                    <button className="button" type="button">
                        <a className="button__text" href='#resume' >My Resume</a>
                        <a className="button__icon" href='#resume'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></a>
                    </button>
                    <button className="button-3D">
                        <a className="button-3D__visible" href='#project'>View My Project</a>
                        <a className="button-3D__invisible" href='#project'>Projects</a>
                    </button>
                </div>
                <div className="heading-primary__tertiary">
                    <div className="sub-heading-gray">
                        Feel free to contact with me at
                    </div>
                    <div className="heading-primary__tertiary--sub">
                        <SocialMedia />
                        <div className="sub-heading-gray">OR</div>
                        <button className='gmail-icon' onClick={() => { window.location.href = `mailto:${profile?.gmail}`; }}>
                            <svg className='gmail-icon'>
                                <use xlinkHref='SVG/symbol-defs.svg#icon-gmail'></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ScrollDownArrow />
        </section>
    )
}

export default Header