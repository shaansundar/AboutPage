import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PropTypes from  "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faBullhorn, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function RoadMap() {
  return (
    <section className="text-gray-600 body-font bg-gray-headerbg "> 
    <div className="container px-5 py-24 mx-auto"> 
    <div className="text-center mb-20">
          <h1 className="featureheading mb-4">
          The Path to Freedom
          </h1>
          <p className="para leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            The brief roadmap shows the current working status, features launched and things to look out for O_o
          </p>
          <div className="flex mt-6 justify-center">
            <div className={`w-16 h-1 rounded-full inline-flex`}></div>
          </div>
    </div>
    <VerticalTimeline>
      {TimelineData.map((goal) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(239, 244, 247)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(40, 135, 130)" }}
          date={goal.date}
          iconStyle={{ background: "rgb(40, 135, 130)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={goal.icon} size="lg" color="#e4f1f1" />}
        >
          <h3 className="vertical-timeline-element-title">{goal.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {goal.subtitle}
          </h4>
          <p className="vertical-timeline-element-description">
            {goal.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    
</div>
</section>
  );
}

const TimelineData = [
  {
    key: "Phase 1",
    date: "Q2 2021 - Q3 2021",
    icon: faCogs,
    title: "Genesis Production",
    subtitle: "Includes branding, building POC and coming out with solid prototyping",
    description:
      "",
  },
  {
    key: "Phase 2",
    date: "Q3 2021 - Q1 2022",
    icon: faBullhorn,
    title: "The BUIDL time",
    subtitle: "The production time to build the MVP and begin marketing",
    description:
      "",
  },
  {
    key: "Phase 3",
    date: "Q2 2022 - Q4 2022",
    icon: faChartLine,
    title: "V2 Phase",
    subtitle: "Time utilized to advance the MVP by adding quirks and features",
    description:
      "",
  },
];

RoadMap.defaultProps = {
  theme: 'indigo'
};

RoadMap.propTypes = {
  theme: PropTypes.string.isRequired
};

