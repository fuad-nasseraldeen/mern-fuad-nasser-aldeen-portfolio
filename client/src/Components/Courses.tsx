import React, { useEffect } from 'react'
import { Course, Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';
import _ from 'lodash';

const Courses: React.FC = () => { // function component
    const profile: Profile = useSelector((state: RootState) => state.profile);
    const { coursesData } = profile;

    useEffect(() => {
        // ComponentDidMount logic can go here
    }, []);

    const cardContainer = () => {
        const courses = !_.isEmpty(coursesData?.courses) ? coursesData.courses : []
        return (
            <div className='courses__container__cards'>
                {!_.isEmpty(courses) ? (
                    courses.map((item: Course, index: number) => {
                        return (
                            <div className='wrapper' key={index}>
                                <div className='single-card'
                                    data-aos="flip-up"
                                    data-aos-duration="1000">
                                    <div className='front'>
                                        <img src={`${item.imgurl}`} className='item-img' id='thumbnail' loading='lazy' alt='course' />
                                    </div>
                                    <div className='back'>
                                        <div className='content'>
                                            <h2 className='heading-body-white'>{item.courseName}</h2>
                                            <div className='white-divider'></div>
                                            <div className='content-skills'> {item.skills?.map((skill, index) => {
                                                return (<h4 className='heading-body-white' key={index}>{skill} &ensp;</h4>)
                                            })}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })
                ) : (
                        <div className="heading-title">No Courses available</div>  
                )}
            </div>
        );
    };

    return (
        <section id='courses' className='courses'>
            <div className="courses__container">
                <div className="courses__container-header u-margin-left-medium u-margin-top-small">
                    <span className="heading-title">{coursesData?.title}</span>
                </div>
                <div className="courses__container-body">
                    {cardContainer()}
                </div>
            </div>
        </section>
    );
};

export default Courses;
