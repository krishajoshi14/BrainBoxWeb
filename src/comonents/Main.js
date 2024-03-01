import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
export default function Main() {
  const inputRef = useRef(null);
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after the other.</li>
        <li>10 points is awarded for the correct answer .</li>
        <li>Each question has 3 options . You can choose only one options .</li>
        <li>You can review and change ansers before the quiz finsih .</li>
        <li>The result will be declared at the end of the quiz </li>
      </ol>
      <form id="form">
        <input className="userid" ref={inputRef} type="text" placeholder="Username*" />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
