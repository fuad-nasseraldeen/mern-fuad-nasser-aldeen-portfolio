import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import Carousel from '../Layouts/Carousel'

import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';
import _ from 'lodash';

const Projects = () => {
    const profile: Profile = useSelector((state: RootState) => state.profile);
    const { projectsData } = profile
    useEffect(() => {
        AOS.init();
    }, []);
    const displayProjectContainer = () => {
        const projects = !_.isEmpty(projectsData?.projects) ? projectsData.projects : []
        return (
            !_.isEmpty(projects) ? (
                <Carousel>
                    {projects.map((project, index) => {
                        return (
                            <div key={index} data-aos="zoom-out">
                                <div className="reveal-holder" data-aos="reveal-item">
                                    <div className="reveal-block left" data-aos="reveal-left"></div>
                                    <div className="project__card u-margin-side-small">
                                        <div className="project__card--header">
                                            <img src={`${project.imgurl}`} className='item-img' id='thumbnail' loading='lazy' alt='project' />
                                        </div>

                                        <h2 className='project__card--title reveal'>{project.name}</h2>
                                        <div className="project__card--description u-margin-side-small reveal">
                                            <p>{project.description}</p>
                                        </div>
                                        <div className='project__card--tech-stack heading-body-gray'>
                                            {project.frameworks?.map((framework: { [key: string]: string }, index) => {
                                                return (<div className='btn-stack' key={index} style={{ color: `${framework.color}` }}> {framework.name}</div>)
                                            })}

                                        </div>
                                        <div className='project__card--footer'>
                                            <div className="github">
                                                <a href={project.giturl}
                                                    target='_blank'
                                                    rel='noopener noreferrer'>
                                                    <button className="c-button">
                                                        <span className="c-main">
                                                            <span className="c-ico heading-7"><span className="c-blur"></span> <span className="ico-text"><i className='fa fa-github'></i></span></span>
                                                            Github
                                                        </span>
                                                    </button>
                                                </a>
                                            </div>
                                            {project.demourl && <div className="live-demo">
                                                <a href={project.demourl}
                                                    target='_blank'
                                                    className='href-demo'
                                                    rel='noopener noreferrer'>
                                                    <button>
                                                        <p className='heading-7'>Live Demo</p>
                                                        <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                                        </svg>
                                                    </button>
                                                </a>
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )}
                </Carousel>
            ) : (
                    <div className="heading-title">No Projects available</div>  
            )
        )
    }
    return (
        <section className='project' id='project'>
            <div className="heading-title u-margin-top-small u-margin-left-medium">Projects</div>
            <div className="card__container">
                {displayProjectContainer()}
            </div>
        </section >

    )
}

export default Projects