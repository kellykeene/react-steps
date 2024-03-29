import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePreviousClick() {
        if (step > 1) {
            setStep((s) => s - 1);
        }
    }

    function handleNextClick() {
        if (step < 3) {
            setStep((s) => s + 1);
        }
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen((o) => !o)}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <div className="message">
                        Step {step}: {messages[step - 1]}
                    </div>

                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handlePreviousClick}
                        >
                            Previous
                        </button>
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handleNextClick}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
