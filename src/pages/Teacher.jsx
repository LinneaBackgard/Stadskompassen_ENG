import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Teacher({ setPage }) {
    return (
        <Container className="py-5 mx-auto" style={{ maxWidth: "1000px" }}>
            <div className="p-4 rounded-2 border bg-body-tertiary mb-4 border border-secondary">
                <h1 className="text-center fs-3 mb-2" style={{ color: "#33b9bdff" }}>
                    Introduction
                </h1>
            </div>

            <Card className="border border-secondary-subtle p-4">
                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>
                    What is Stadskompassen?
                </Card.Title>

                <Card.Text className="fs-5">
                    Stadskompassen is a reflection tool that shows how people prioritize values when civic
                    decisions require compromises. There are no right or wrong answers. The result is a
                    decision profile, not an opinion or a test score.
                </Card.Text>

                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>
                    How does it work?
                </Card.Title>

                <Card.Text className="fs-5">
                    Participants face everyday civic dilemmas (e.g., school, safety, climate). Each option
                    includes both gains and costs and strengthens multiple values at once.
                    <ul>
                        <li>Two values are dominant (2 points)</li>
                        <li>Others are present (1 point)</li>
                    </ul>
                    The result builds across several questions and reveals patterns in how decisions are made.
                </Card.Text>

                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>
                    What is practiced?
                </Card.Title>

                <Card.Text className="fs-5">
                    <ul>
                        <li>consequence thinking</li>
                        <li>understanding value conflicts</li>
                        <li>democratic reasoning</li>
                        <li>reflection on responsibility, power, and legitimacy</li>
                    </ul>
                </Card.Text>

                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>
                    How can it be used?
                </Card.Title>

                <Card.Text className="fs-5">
                    <ul>
                        <li>as a basis for discussion</li>
                        <li>as reflection before/after teaching</li>
                        <li>as a foundation for a writing task or seminar</li>
                    </ul>
                    The focus is on reasoning – not on “right answers.”
                </Card.Text>

                <Card.Title className="text-start fs-4 mb-3" style={{ color: "#23a5aaff" }}>
                    Teacher material (PDF)
                </Card.Title>

                <Card.Text className="fs-5 mb-5">
                    Here is a downloadable facilitator guide that deepens the quiz’s purpose, method, and
                    pedagogical use. The guide includes background, learning goals, method explanation, a
                    character overview, and concrete suggestions for how the quiz can be used in teaching or
                    group discussion.
                    <br /> <br /> The guide is available here (PDF):{" "}
                    <a
                        className="mb-4"
                        href={import.meta.env.BASE_URL + "Handledarguide_Stadskompassen_ENG.pdf"}
                        style={{ color: "#3465a4" }}
                    >
                        Teacher guide
                    </a>
                </Card.Text>

                <button
                    className="btn fs-5"
                    style={{ backgroundColor: "#72cccf" }}
                    onClick={() => setPage("start")}
                >
                    Back to start page
                </button>
            </Card>
        </Container>
    );
}
