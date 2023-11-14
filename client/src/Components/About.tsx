import React from 'react'
import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';
import _ from 'lodash';
const About = () => {
    const profile: Profile = useSelector((state: RootState) => state.profile);
    const { aboutme } = profile
    return (
        <section className="about" id='about'>
            {aboutme && !_.isEmpty(aboutme.description) ? (
                <div>
                    <div className="about__aboutme-text">{aboutme?.title}</div>
                    <div className="reveal-holder" data-aos="reveal-item">
                        <div className="reveal-block left" data-aos="reveal-left"></div>
                        <div className="about__main">
                            {aboutme.description.map((desc, index) => (
                                <div key={index} className="about-body-font">
                                    {desc}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="about__aboutme-text">No description available</div>
            )}

        </section>

    )
}

export default About
