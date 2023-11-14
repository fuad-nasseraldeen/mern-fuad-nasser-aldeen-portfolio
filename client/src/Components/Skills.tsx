import React, { useEffect, useState } from 'react'
import { Profile, RootState } from 'Layouts/types.tsx'
import { useSelector } from 'react-redux';
import _ from 'lodash';

const SkillsSet: React.FC = () => {
  const [skillsCategory, setSkillsCategory] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState(0)
  const [indicatorPosition, setIndicatorPosition] = useState(0)

  const profile: Profile = useSelector((state: RootState) => state.profile)
  const { skillsSet } = profile
  const skills = !_.isEmpty(skillsSet?.skills) ? skillsSet.skills : undefined

  useEffect(() => {
    // ComponentDidMount logic can go here
    !_.isEmpty(skills) && setSkillsCategory(Object.keys(skills))
  }, [skillsSet]);

  const displayTechnicalSkillsContainer = () => {
    const tabHeaders = skillsCategory
    const tabContents = Object.values(skills!)
    return (

      <div className='tabs'>
        <div className='tabs-header'>
          {tabHeaders.map((header, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {header}
            </div>
          ))}
        </div>
        <div key='tabs-indicator' className='tabs-indicator' style={{ top: `calc(8rem + ${indicatorPosition}rem)` }}></div>
        <div key='tabs-content' className='tabs-content' data-aos="zoom-out-down">
          {tabContents.map((content, index) => (
            <div
              key={index}
              className={`tabs-content-item ${index === activeTab ? 'active' : ''}`}
            >
              {content.map((item, index) => (
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                >
                  <div key={index} className="tabs-content-item__sub sub-heading-gray">
                    <svg>
                      <use xlinkHref={`SVG/symbol-defs.svg#icon-${item.svgId}`}></use>
                    </svg>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div >
    )
  }
  const handleTabClick = (index: number) => {
    const indicatorPosition = index * 5; // Assuming each tab is 50px high
    setActiveTab(index)
    setIndicatorPosition(indicatorPosition)
  };

  return (
    <div className='skills'>
      <div className="skills__container">
        <div className="skills__header heading-title u-margin-top-small u-margin-left-medium">{skillsSet?.title}</div>
        {/* <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src="img/coverr-waves-splashing-onto-a-rocky-shore-in-the-distance.mp4" type="video/mp4" />
              <source src="img/video.webm" type="video/webm" />
              Your browser is not supported!
            </video>
          </div> */}
        <div
          key='displayTechnicalSkillsContainer'
          data-aos="zoom-in-up"
          data-aos-duration="1000">
          {!_.isEmpty(skills) ? (
            displayTechnicalSkillsContainer()
          ) : (
            <div className="heading-title">No Skills Set available</div>
          )}
        </div>

      </div>
    </div>
  );
}

export default SkillsSet;
