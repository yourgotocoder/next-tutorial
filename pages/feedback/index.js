import React, { useState } from "react";
import { getFeedbackData } from "../api/feedback";

export default function Feedback(props) {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedbackHandler = (id) => {
    console.log(id);
    fetch("/api/" + id).then(response => response.json()).then((data) => {
      setFeedbackData(data.feedback);
      console.log(data);
    });
  };

  return (
    <>
      {feedbackData && feedbackData.email}
      <ul>
        {props.feedback.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => loadFeedbackHandler(item.id)}>
              Show details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const data = getFeedbackData();
  const feedback = data;

  return {
    props: {
      feedback,
    },
  };
};
