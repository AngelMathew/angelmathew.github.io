import React, { useEffect } from "react"
import * as styles from "./Experience.module.scss"
import Location from "../../images/Location.svg"
import AOS from "aos"
import "aos/dist/aos.css"

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: "2000",
    })
  }, [])

  const tooltipContent = [
    {
      id: 1,
      duration: "Oct'19 - Now",
      company:
        "Front-end developer @ <a href='https://www.bell.ca' target='_blank'>Bell Canada</a>",
      location: "Toronto",
      responsibilities:
        "<ul><li><span>Develop single page applications consuming server side JSON RESTful services.</span></li><li><span>Work with a wide range of technologies such as JavaScript, TypeScript, HTML, Modern (S)CSS,Angular, React, WordPress, Strapi and Contentful.</span></li><li><span>Work closely with UX designers, project managers , back-end developers to implement versatile solutions.</span></li></ul> ",
      parentClass: "timelineComponentRight",
      childClass: "timelineTooltipRightLarge",
    },
    {
      id: 2,
      duration: "Jan'19 - July'19",
      company:
        "Python Lab Assistant @ <a href='https://www.dal.ca/' target='_blank' aria-label='link to Dalhousie'>Dalhousie University</a>",
      location: "Halifax,NS",
      responsibilities:
        "<ul><li><span>Helped students to understand algorithms and data structures.</span></li><li><span>Supported students to debug and understand the Python code.</span></li><li><span>Assisted students with python language, Flask Framework, Git version control.</span></li></ul> ",
      parentClass: "timelineComponentLeft",
      childClass: "timelineTooltipLeft",
    },
    {
      id: 3,
      duration: "Jan'18 - July'19",
      company:
        "M.Eng in Internetworking @ <a href='https://www.dal.ca/' target='_blank' aria-label='link to Dalhousie'>Dalhousie University</a>",
      location: "Halifax,NS",
      responsibilities: "",
      parentClass: "timelineComponentRight",
      childClass: "timelineTooltipRightSmall",
    },
    {
      id: 4,
      duration: "Nov'15 - Jan'18",
      company:
        "Front-end developer @ <a href='https://www.tcs.com/' target='_blank' aria-label='link to TCS'>TCS</a>",
      location: "Kochi, India",
      responsibilities:
        "<ul><li><span>Collaborated with back-end developers to integrate the front-end with the APIs.</span></li><li><span>Worked on Angular Material design along with AngularJS in creating the Application.</span></li><li><span>Accomplished initial learning in Android Mobile Application Development.</span></li></ul> ",
      parentClass: "timelineComponentLeft",
      childClass: "timelineTooltipLeft",
    },
    {
      id: 5,
      duration: "Sep'11 - May'2015",
      company:
        "B.Tech in Computer Science Engineering @ <a href='http://www.mace.ac.in/' target='_blank' aria-label='link to Mahatma Gandhi university'>Mahatma Gandhi University</a> ",
      location: "Kerala, India",
      responsibilities: "",
      parentClass: "timelineComponentRight",
      childClass: "timelineTooltipRightSmall",
    },
  ]

  const tooltipValue = tooltipContent.map(data => {
    return (
      <div className={`${styles[data.parentClass]}`} key={data.id}>
        <div className={styles.timelineCircle}></div>
        <div className={`${styles[data.childClass]}`}>
          <label className={styles.duration}>{data.duration}</label>
          <h5
            className={styles.company}
            dangerouslySetInnerHTML={{ __html: `${data.company}` }}
          ></h5>
          <div className={styles.location}>
            <img src={Location} alt="location icon"></img>
            <b>
              <span className={styles.location}>{data.location}</span>
            </b>
          </div>
          <div
            className={styles.tooltipSkillSet}
            dangerouslySetInnerHTML={{ __html: `${data.responsibilities}` }}
          ></div>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.experienceParent}>
      <h2 className={styles.timelineHeading}>Experience</h2>
      <div className={styles.timelineParent} data-aos="fade-up">
        {/* <div className={styles.timelineParent}> */}
        <div className={styles.verticalLine}></div>
        {tooltipValue}
      </div>
    </div>
  )
}

export default Experience
