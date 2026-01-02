export default function Options({ options, setOption, characterScores, setCharacterScores }) {
    return (
        <div className="row g-4">
            {options.map((option, index) => (
                <div key={index} className="col-12 col-md-6 d-flex">
                    <div className="card w-100 h-80 border border-secondary-subtle">
                        <div className="card-body">
                            <button
                                className="btn mb-3"
                                style={{backgroundColor: "#fcdc4fff"}}
                                onClick={() => {
                                    setOption(index);

                                    const scores = { ...characterScores };
                                    for (let character in option.characters) {
                                        scores[character] = (scores[character] || 0) + option.characters[character];
                                    }
                                    setCharacterScores(scores);
                                }}
                            >
                                {option.button}
                            </button>

                            <p className="card-text text-start mb-0">{option.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
