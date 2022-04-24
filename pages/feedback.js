import React from "react";
import { getFeedbackData } from "./api/feedback";

export default function Feedback(props) {
  return <ul>
    {
      props.feedback.map(item => <li key={item.id}>{item.text}</li>)
    }
  </ul>;
}

export const getStaticProps = async (ctx) => {
  const data = getFeedbackData();
  const feedback = data;

  return {
    props: {
      feedback
    },
  };
};
