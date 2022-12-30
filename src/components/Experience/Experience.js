import React, { useEffect } from "react"
import * as styles from "./Experience.module.scss"
import Location from "../../images/Location.svg"
import AOS from "aos"
import "aos/dist/aos.css"

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    })
  }, [])

  const tooltipContent = [
    {
      id: 6,
      duration: "July'2021 - Now",
      company:
        "Front-end developer @ <a href='https://www.rangle.io' target='_blank' title='Rangle' aria-label='Rangle' rel='noopener noreferrer' >Rangle.io</a>",
      location: "Toronto",
      responsibilities:
      "<ul><li><span>Work with a wide range of frameworks and libraries such as Angular, Vue.js, NgRx, RxJS, Vuex and Jest.</span></li><li></ul>",
      parentClass: "timelineComponentLeft",
      childClass: "timelineTooltipLeft",
    },
    {
      id: 1,
      duration: "Oct'2019 - July'2021",
      company:
        "Front-end developer @ <a href='https://www.bell.ca' target='_blank' title='Bell Canada' aria-label='Bell Canada' rel='noopener noreferrer' >Bell Canada</a>",
      location: "Toronto",
      responsibilities:
        "<ul><li><span>Developed single page applications consuming server side JSON RESTful services.</span></li><li><span>Led the development of web apps using CMS : headless WordPress, Contentful, Strapi.</span></li><li><span>Built CRUD App with Python, Flask, React and Redux.</span></li></ul> ",
      parentClass: "timelineComponentRight",
      childClass: "timelineTooltipRightLarge",
    },
    {
      id: 2,
      duration: "Jan'2019 - July'2019",
      company:
        "Python Lab Assistant @ <a href='https://www.dal.ca/' target='_blank' title='Dalhousie University' aria-label='Dalhousie University' rel='noopener noreferrer' >Dalhousie University</a>",
      location: "Halifax,NS",
      responsibilities:
        "<ul><li><span>Helped students to understand algorithms and data structures.</span></li><li><span>Supported students to debug and understand the Python code.</span></li><li><span>Assisted students with python language, Flask Framework, Git version control.</span></li></ul> ",
      parentClass: "timelineComponentLeft",
      childClass: "timelineTooltipLeft",
    },
    {
      id: 3,
      duration: "Jan'2018 - July'2019",
      company:
        "M.Eng in Internetworking @ <a href='https://www.dal.ca/' target='_blank'  title='Dalhousie University' aria-label='Dalhousie University' rel='noopener noreferrer'>Dalhousie University</a>",
      location: "Halifax,NS",
      responsibilities: "",
      parentClass: "timelineComponentRight",
      childClass: "timelineTooltipRightSmall",
    },
    {
      id: 4,
      duration: "Nov'2015 - Jan'2018",
      company:
        "Front-end developer @ <a href='https://www.tcs.com/' target='_blank' title='TCS' aria-label='TCS' rel='noopener noreferrer'>TCS</a>",
      location: "Kochi, India",
      responsibilities:
        "<ul><li><span>Collaborated with back-end developers to integrate the front-end with the APIs.</span></li><li><span>Worked on Angular Material design along with AngularJS in creating the Application.</span></li><li><span>Accomplished initial learning in Android Mobile Application Development.</span></li></ul> ",
      parentClass: "timelineComponentLeft",
      childClass: "timelineTooltipLeft",
    },
    {
      id: 5,
      duration: "Sep'2011 - May'2015",
      company:
        "B.Tech in Computer Science Engineering @ <a href='http://www.mace.ac.in/' target='_blank'  title='Mahatma Gandhi University' aria-label='Mahatma Gandhi University' rel='noopener noreferrer'>Mahatma Gandhi University</a> ",
      location: "Kottayam, India",
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
    <section className={styles.experienceParent}>
      <h2 className={styles.timelineHeading}>Experience</h2>
      <div className={styles.timelineParent} data-aos="fade-up">
        {/* <div className={styles.timelineParent}> */}
        <div className={styles.verticalLine}></div>
        {tooltipValue}
      </div>
    </section>
  )
}

export default Experience
