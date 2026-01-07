import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import characters from "../data/characters.json";
import { useState } from "react";

export default function Result({ characterScores, setCharacterScores, setPage }) {
    let maxKey,
        maxValue = 0;
    for (const [key, value] of Object.entries(characterScores)) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }
    const [characterKey, setCharacterKey] = useState(maxKey);

    return (
        <Container className="py-5 mx-auto" style={{ maxWidth: "1000px" }}>
            <div className="p-4 rounded-2 border bg-body-tertiary mb-4 border border-secondary">
                <h1 className="text-center fs-3 mb-2" style={{ color: "#33b9bdff" }}>
                    Result
                </h1>
            </div>

            <Card className="border border-secondary-subtle mb-4">
                <div className="row g-0">
                    <div className="col-md-6">
                        <Card.Img
                            src={
                                import.meta.env.BASE_URL +
                                "characterimages/" +
                                characters[characterKey].image
                            }
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "320px",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <Card.Body className="p-4 text-start">
                            <Card.Title
                                className="fs-4 mt-3 mb-4 text-center"
                                style={{ color: "#33b9bdff" }}
                            >
                                {characterKey}
                            </Card.Title>
                            <Card.Text
                                className="fs-5"
                                dangerouslySetInnerHTML={{
                                    __html: characters[characterKey].text,
                                }}
                            ></Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>

            <Card className="border border-secondary-subtle">
                <Card.Body className="p-4 text-start">
                    <Card.Title
                        className="fs-4 mt-3 mb-4 text-center"
                        style={{ color: "#33b9bdff" }}
                    >
                        Score distribution
                    </Card.Title>

                    <Card.Text className="fs-5">
                        Your leadership style is a blend of the following characters. Click
                        one to read about them.
                    </Card.Text>

                    {Object.keys(characters)
                        .sort((a, b) => {
                            if (!characterScores[a]) {
                                return 1;
                            }
                            if (!characterScores[b]) {
                                return -1;
                            }
                            return characterScores[b] - characterScores[a];
                        })
                        .map((key) => (
                            <Card.Text className="fs-6" key={key}>
                                <a
                                    href="#"
                                    style={{ color: "#23a5aaff" }}
                                    onClick={() => setCharacterKey(key)}
                                >
                                    {key}
                                </a>
                                : {characterScores[key] ? characterScores[key] : 0}
                            </Card.Text>
                        ))}
                </Card.Body>
            </Card>
            <Card className="p-4 mt-4">
                <button className="btn fs-5" style={{backgroundColor: "#fcdc4fff"}} onClick={() => {
                    setPage("question");
                    setCharacterScores({});
                }}>Play again</button>
            </Card>
        </Container>
    );
}
