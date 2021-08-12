import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PropTypes from  "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          icon={<FontAwesomeIcon icon={goal.icon} />}
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
    key: "goal-1",
    date: "2020 - 2021",
    icon: "faCoffee",
    title: "Title filler",
    subtitle: "Subtitle filler",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
  {
    key: "goal-2",
    date: "2022 - 2022",
    icon: "faCoffee",
    title: "Title filler",
    subtitle: "Subtitle filler",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
];

RoadMap.defaultProps = {
  theme: 'indigo'
};

RoadMap.propTypes = {
  theme: PropTypes.string.isRequired
};

