import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Start({ setPage }) {
    return (
        <Container className="py-5 mx-auto" style={{ maxWidth: "1000px" }}>
            <Card className="border border-secondary-subtle p-4">
                <Card.Title
                    className="text-center fs-2 mt-3 mb-4"
                    style={{ color: "#33b9bdff" }}
                >
                    Welcome
                </Card.Title>

                <Card.Text className="fs-5">
                    All societies are shaped by decisions. Some are made in meeting rooms,
                    others in corridors, during breaks, in everyday life. This is a game
                    about how choices feel – not just how they sound. You will face
                    situations that may seem simple on the surface, but where every path
                    carries consequences. There are no perfect answers. Only different
                    ways of taking responsibility.
                </Card.Text>

                <details className="mb-3 mt-3">
                    <summary className="fs-4" style={{ color: "#23a5aaff" }}>
                        What is this?
                    </summary>

                    <Card.Text className="fs-5">
                        This is an interactive civic game with everyday scenarios about
                        school, safety, responsibility, power, and trust. After each choice
                        you get feedback showing how the decision might play out in practice.
                    </Card.Text>

                    <Card.Text className="fs-5">
                        Choices can have both benefits and downsides – and different people
                        may experience them in different ways. The game is made for
                        reflection and conversation, not for finding the “right answer.”
                    </Card.Text>
                </details>

                <details className="mb-3">
                    <summary className="fs-4" style={{ color: "#23a5aaff" }}>
                        Characters / leadership styles
                    </summary>

                    <Card.Text className="fs-5">
                        The game includes several leadership styles. They are inspired by
                        psychological archetypes and common civic roles – different ways
                        people tend to lead, protect, control, listen, or drive change.
                    </Card.Text>

                    <Card.Text className="fs-5">
                        Which style emerges depends on your choices. Your result shows which
                        values you most often prioritize when decisions become difficult.
                        Treat it as a basis for reflection and discussion, rather than a
                        label.
                    </Card.Text>
                </details>

                <details className="mb-3">
                    <summary className="fs-4" style={{ color: "#23a5aaff" }}>
                        How does it work?
                    </summary>

                    <Card.Text className="fs-5">
                        You make choices in each scenario and see how others might
                        experience them. After several choices, you’ll get a result showing
                        which leadership style you resemble most – and what consequences
                        that style often leads to over time.
                    </Card.Text>
                </details>

                <Card.Text>
                    <a
                        href="#"
                        className="mb-3"
                        style={{ color: "#3465a4" }}
                        onClick={() => setPage("teacher")}
                    >
                        For teachers / facilitators
                    </a>
                </Card.Text>

                <Card.Img src={import.meta.env.BASE_URL + "startsida pic.png"} />

                <Card.Text
                    className="text-center fs-3 mt-5"
                    style={{ color: "#23a5aaff" }}
                >
                    Ready?
                </Card.Text>

                <Card.Text className="fs-5">
                    Play the way you actually do – not the way you should.
                </Card.Text>

                <button
                    className="btn fs-5"
                    style={{ backgroundColor: "#72cccf" }}
                    onClick={() => setPage("question")}
                >
                    Start the game
                </button>
            </Card>
        </Container>
    );
}
