import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoadMap() {
  return (
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
