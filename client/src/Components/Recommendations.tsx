import React, { useEffect } from 'react'
import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Carousel from '../Layouts/Carousel'

const Recommendations: React.FC = () => { // function component
    const profile: Profile = useSelector((state: RootState) => state.profile);
    const { recommendationsData, socialLinks } = profile;
    const recommendations = !_.isEmpty(recommendationsData?.recommendations) ? recommendationsData.recommendations : undefined

    useEffect(() => {
        // ComponentDidMount logic can go here
    }, []);

    const displayRecommendationsList = () => {
        const linkedin = socialLinks?.find(social => social.name === 'linkedin')?.url;
        return (
            <Carousel slide={1}>
                {recommendations!.map((item, index) => (
                    <div className="recommendations__container"

                        key={index}>
                        <div className="fa fa-quote-right fa-quote"></div>
                        <div className="fa fa-quote-left fa-quote"></div>
                        <div className="pic"><img src={item.avatar} alt='recommendation' /></div>
                        <div className="recommendations__container-body heading-recommendation" data-aos="zoom-in-up"
                            data-aos-duration="1000">{item.description}</div>
                        <div className="line"></div>
                        <div className="recommendations__container-footer heading-recommendation"
                            data-aos="zoom-in-up"
                            data-aos-duration="1000">
                            <div>{item.name}  - {item.role}</div>
                            <div className="linkedin-profile">
                                <a href={item.linkedinUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <svg className='linkedin-icon' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28">
                                        <title>linkedin-square</title>
                                        <path d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <br></br>
                        <div>
                            {item.name.startsWith('rimon') ? <div className="pdf">
                                <a href={item.source} target="_blank"
                                    rel="noreferrer">
                                    <img src='SVG/pdf.svg' alt='pdf' />
                                </a>
                            </div> : (
                                <div className='recommendations__container-footer__sub heading-recommendation'>
                                        <a className='source-massege'>Feel free to check the references on </a>
                                        <a className='linkedin-source' target="_blank" rel="noreferrer" href={linkedin}>my LinkedIn profile </a>
                                        <a className='source-massege'>under Recommendations section.</a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </Carousel>

        )
    }

    // const showPDFSource = () => {

    // }
    return (
        <section id='recommendations' className='recommendations'>
            <div className="courses__container-header u-margin-top-small u-margin-left-medium"><span className="heading-title">{recommendationsData?.title}</span></div>
            <div className="card__container">
                {!_.isEmpty(recommendations) ? (
                    displayRecommendationsList()
                ) : (
                    <div className="hight-no-content heading-title">No Recommendations available</div>
                )}
            </div>
        </section>
    )
}

export default Recommendations