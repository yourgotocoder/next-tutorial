import { useRef, useState } from "react";

function Homepage() {
  const [feedbackItems, setFeedback] = useState();

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const emailValue = emailInputRef.current.value;
    const feedbackValue = feedbackInputRef.current.value;

    const content = { email: emailValue, text: feedbackValue };

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .then((data) => alert(JSON.stringify(data)));
  };

  function loadFeedbackHandler()  {
    fetch("/api/feedback")
    .then(response => response.json())
    .then(data => {
      const result = data.data
      setFeedback(result)
      console.log(feedbackItems)
    })
  }

  return (
    <div>
      <h1>Homepage</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email" >
            Your email
          </label>
          <input type="email" id="email" ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea type="text" id="feedback" ref={feedbackInputRef}></textarea>
        </div>
        <button>Submit</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      { feedbackItems !== undefined ? feedbackItems.map(item => <li key={item.id}>{item.text}</li>) : <p>No data</p>}
    </div>
  );
}

export default Homepage;
