import React, { useEffect } from 'react'
import Type from '../Layouts/Typewriter/Type.tsx'
// import FloatingShapes from './FloatingShapes.tsx'

import SocialMedia from '../Layouts/SocialMedia.tsx'
import ScrollDownArrow from '../Layouts/ScrollDownArrow.tsx'
import { ParticleComponent } from '../Layouts/Particles.tsx'

import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';

const HeaderMobileMode = () => {
    const profile: Profile = useSelector((state: RootState) => state.profile);

    useEffect(() => {
        // ComponentDidMount logic can go here
    }, []);
    return (
        <section id="headerMobileMode" className="headerMobileMode">
            <ParticleComponent />
            {/* <FloatingShapes /> */}
            <div className='heading-primary'>
                <div className='heading-primary__main'>
                    <div className="heading">
                        <h1 className='heading-title'>Hello </h1>
                        <span className='wave' role='img' aria-labelledby='wave'>
                            👋
                        </span>,
                    </div>
                    <h1 className='heading-title'>I'm {profile?.firstName} {profile?.lastName}</h1>
                    <span className='heading-primary__main--sub sub-heading-white'><Type></Type></span>

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
                    <div className="sub-heading-white">
                        Feel free to contact with me at
                    </div>
                    <div className="heading-primary__tertiary--sub">
                        <SocialMedia />
                        <div className="sub-heading-gray">OR</div>
                        <button className='gmail-icon' onClick={() => { window.location.href = `mailto:${profile?.gmail}`; }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" /><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" /><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" /><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" /><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <ScrollDownArrow />
        </section>
    )
}

export default HeaderMobileMode