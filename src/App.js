import { useState } from "react";

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

                    {step === 1 && (
                        <StepMessage step="1">Learn React ⚛️</StepMessage>
                    )}
                    {step === 2 && (
                        <StepMessage step="2">Apply for jobs 💼</StepMessage>
                    )}
                    {step === 3 && (
                        <StepMessage step="3">
                            Invest your new income 🤑
                        </StepMessage>
                    )}

                    <div className="buttons">
                        <Button
                            bgColor="#7950f2"
                            color="#fff"
                            onClickHandler={handlePreviousClick}
                        >
                            <span>👈🏼</span>Previous
                        </Button>
                        <Button
                            bgColor="#7950f2"
                            color="#fff"
                            onClickHandler={handleNextClick}
                        >
                            Next<span>👉🏾</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

function StepMessage({ step, children }) {
    return (
        <div className="message">
            Step {step}: {children}
        </div>
    );
}

function Button({ bgColor, color, onClickHandler, children }) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: color,
            }}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
}

export default App;
