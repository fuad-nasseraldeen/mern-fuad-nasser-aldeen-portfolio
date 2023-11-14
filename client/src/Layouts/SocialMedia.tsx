import React from 'react'
import { useSelector } from 'react-redux'
import { Profile, RootState, SocialLink } from 'Layouts/types.tsx'
import _ from 'lodash'

const SocialMedia = () => {
    const profile: Profile = useSelector((state: RootState) => state.profile)
    const { socialLinks } = profile
    const socialUp = !_.isEmpty(socialLinks) ? socialLinks?.filter(item => item.wrapper === 'up'): [] // linkedIn/instagram
    const socialDown = !_.isEmpty(socialLinks) ? socialLinks.filter(item => item.wrapper === 'down'): [] // github/ whatsapp

    return (
        <div className="main">
            <div className="up">
                {!_.isEmpty(socialUp) && socialUp.map((item: SocialLink) => {
                    return (
                        <button className={`card card--${item.name}`} onClick={() => window.open(item.url, '_blank')}>
                            <svg className={`${item.name}-icon`}>
                                <use xlinkHref={`SVG/symbol-defs.svg#icon-${item.name}`}></use>
                            </svg>
                        </button>
                    )
                })}
            </div>
            <div className="down">
                {!_.isEmpty(socialDown) && socialDown.map((item: SocialLink) => {
                    return (
                        <button className={`card card--${item.name}`} onClick={() => window.open(item.url, '_blank')}>
                            <svg className={`${item.name}-icon`}>
                                <use xlinkHref={`SVG/symbol-defs.svg#icon-${item.name}`}></use>
                            </svg>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default SocialMedia