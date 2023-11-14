import React, { useEffect } from 'react'
import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';
import _ from 'lodash';

const Education: React.FC = () => {
    const profile: Profile = useSelector((state: RootState) => state.profile);
    const { educationData } = profile;
    useEffect(() => {
        // ComponentDidMount logic can go here
    }, []);
    const education = !_.isEmpty(educationData?.education) ? educationData.education : []
    return (
        <section id='education' className='education'>
            <div className="education__header u-margin-left-medium u-margin-top-small">
                <span className="heading-title ">{educationData?.title}</span>
            </div>
            <div className="education__container reveal">
                {!_.isEmpty(education) ? (
                    education.map((edu, index) => (
                        <div key={index} className="education__container__body">
                            <h2 className='heading-sub-title'>{edu.name}</h2>
                            <span>•</span>
                            <span className='heading-sub-title'>{edu.MonthOfStarting} {edu.YearOfStarting}</span>
                        </div>
                    ))
                ) : (
                    <div className="heading-title">No Education available</div>
                )}
            </div>
        </section>
    )
}

export default Education