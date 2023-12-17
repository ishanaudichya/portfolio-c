import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import econ from "../../Assets/econ.png";
import ieee from "../../Assets/iee.png";
import vit from "../../Assets/vit.png";
import res from "../../Assets/res.png";
import dps from "../../Assets/dps.png";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2023 - present"
          contentStyle={{ background: "#0d1414", color: "#fff" }}
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img alt="ieee" className="img-timeline" src={ieee}></img>}
        >
          <h3 className="vertical-timeline-element-title">Head Coordinator</h3>
          <h4 className="vertical-timeline-element-subtitle">IEEE</h4>
          <p>
            Cheif coordinator of Hack Department for IEEE International
            Conference 2024.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0, 120, 120)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Sept 2023 - December 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img alt="econ" className="img-timeline" src={econ}></img>}
        >
          <h3 className="vertical-timeline-element-title">PES Web Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            E Connect Solutions Pvt. Ltd.
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#0d1414", color: "#fff" }}
          className="vertical-timeline-element--education"
          date="2021-present"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img alt="vit" className="img-timeline" src={vit}></img>}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor's degree in CSE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vellore Institute of Technology, Vellore
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#0d1414", color: "#fff" }}
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<img alt="res" className="img-timeline" src={res}></img>}
        >
          <h3 className="vertical-timeline-element-title">
            Resonance Eduventures Limited
          </h3>
          <h5 className="vertical-timeline-element-subtitle">PCM</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#0d1414", color: "#fff" }}
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img alt="dps" className="img-timeline" src={dps}></img>}
        >
          <h3 className="vertical-timeline-element-title">
            Delhi Public School, Udaipur
          </h3>
          <br></br>
          <h5 className="vertical-timeline-element-subtitle">
            Senior School Certificate (CBSE)
          </h5>
          <h5 className="vertical-timeline-element-subtitle">
            Secondary School Examination-SSC (CBSE)
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
