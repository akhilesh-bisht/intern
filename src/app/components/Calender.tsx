"use client";

import "./calender.css";
import { InlineWidget } from "react-calendly";

export default function Calender() {
  return (
    <section className="calender">
      <div className="window">
        <div className="hero">
          <span />
          <h1>Got anything in mind?</h1>
          <p>Let’s do it together!</p>
        </div>
        <div className="widget">
          <InlineWidget url="https://calendly.com/srivastavashashank033/huddle" />
        </div>
      </div>
    </section>
  );
}
