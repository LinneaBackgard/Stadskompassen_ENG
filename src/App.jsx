import { useState } from 'react';
import './App.css';
import Start from './pages/Start.jsx';
import Question from './pages/Question.jsx';
import Result from './pages/Result.jsx';
import Teacher from './pages/Teacher.jsx';

export default function App() {
    const [characterScores, setCharacterScores] = useState({});
    const [Page, setPage] = useState("start");

    // använd för att se den karaktär du vill
    // const [characterScores, setCharacterScores] = useState({
    //     "Spegelbäraren": 0,
    //     "Brännaren": 0,
    //     "Maskmakaren": 0,
    //     "Arkivarien": 0,
    //     "Bäraren": 0,
    //     "Narrstrategen": 1,
    //     "Styraren": 0
    // });
    // const [Page, setPage] = useState("result");

    return (
        <div>
            {Page === "start" ?
                <Start
                    setPage={setPage}
                ></Start> : null
            }
            {Page === "teacher" ?
                <Teacher
                    setPage={setPage}
                ></Teacher> : null
            }
            {Page === "question" ?
                <Question
                    characterScores={characterScores}
                    setCharacterScores={setCharacterScores}
                    setPage={setPage}
                ></Question> : null
            }
            {Page === "result" ?
                <Result
                    characterScores={characterScores}
                ></Result> : null
            }
        </div>
    );
}