import { useState } from "react";
import questions from "../data/questions.json";
import Options from "./Options.jsx";
import Feedback from "./Feedback.jsx";
import Container from "react-bootstrap/Container";

export default function Question({ characterScores, setCharacterScores, setPage }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOption, setCurrentOption] = useState(-1);

    const q = questions[currentQuestionIndex];

    return (
        <Container className="py-5">
            <div className="mx-auto" style={{ maxWidth: "1000px" }}>
                {/* Header / Fr�geruta */}
                <div className="p-4 rounded-2 border bg-body-tertiary mb-4 border border-secondary">
                    <div className="d-flex justify-content-between align-items-start gap-3">
                        <div>
                            <h1 className="text-center fs-3 mb-2" style={{color: "#33b9bdff"}}>
                                {q.category}
                                <img src={import.meta.env.BASE_URL + "icons/" + q.icon} style={{ height: "1em", marginLeft: "8px", marginTop: "-4px" }} />
                            </h1>
                            <p className="text-start fs-5 mb-0">{q.scenario}</p>
                        </div>

                        {/* Progress (valfritt men g�r sidan mer �spelig� och �versk�dlig) */}
                        <div className="text-nowrap small opacity-75">
                            {currentQuestionIndex + 1} / {questions.length}
                        </div>
                    </div>
                </div>

                {currentOption < 0 ? (
                    <Options
                        options={q.options}
                        setOption={setCurrentOption}
                        characterScores={characterScores}
                        setCharacterScores={setCharacterScores}
                    />
                ) : (
                    <Feedback
                        feedbackText={q.options[currentOption].feedback}
                        option={q.options[currentOption]}
                        setOption={setCurrentOption}
                        questionIndex={currentQuestionIndex}
                        maxQuestionIndex={questions.length - 1}
                        setQuestionIndex={setCurrentQuestionIndex}
                        setPage={setPage}
                    />
                )}
            </div>
        </Container>
    );
}
