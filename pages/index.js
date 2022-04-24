import { useRef } from "react";

function Homepage() {
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
      .then((data) => alert(data));
  };

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
    </div>
  );
}

export default Homepage;
