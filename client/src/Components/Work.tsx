import React from 'react'
import { useSelector } from 'react-redux'
import { Profile, RootState } from 'Layouts/types.tsx'
import _ from 'lodash'

const Work:React.FC = () => {
    const profile: Profile = useSelector((state: RootState) => state.profile)
    const { workData } = profile
    const work = !_.isEmpty(workData?.works) ? workData.works : []

    const displayWorkExperience = (items: string[]) => {
        return (
            <div className='cards heading-body-gray'>
                {items && items.map((item, index) => {
                    return (
                        <div key={index} className='cards__overlay cards__item'
                            data-aos="flip-right" data-aos-duration="1000">
                            <a >
                                <div className="cards__card ">
                                    <span>{item}</span>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const displayWorkTitle = (item: any) => {
        return (
            <div className='company-name revealFromLeft'>
                <div className="details">
                    <span className='work-title'> &rArr;  {item[0].name}</span>
                    <br />
                    <span className='heading-sub-title'>&bull; {item[0].role}</span>
                    <br />
                    <span className='heading-sub-title'>&bull; {item[0].MonthOfStarting} {item[0].YearOfStarting}</span>
                </div>
            </div>
        )
    }
    return (
        <section id='work' className='work'>
            <div className="work__container">
                <div className="work__container-header u-margin-top-small u-margin-left-medium"><span className="heading-title">{workData?.title}</span></div>
                <div className="work__container-title u-margin-left-medium">
                    {!_.isEmpty(work) && displayWorkTitle(work)}
                </div>
                <div className="work__container-specialization revealFromLeft">
                    {!_.isEmpty(work) && work.map((item, index) => {
                        return (
                            <div key={index}>
                                {displayWorkExperience(item.specialization)}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Work