import React, { useState } from "react";
import ScrollToSection from "../../function/scrollToSection";  // Ensure this function is correctly imported
import './quotation.css';

export default function Quotation() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isWebsite, setIsWebsite] = useState(false);

    const websiteQuestions = [
        {
            question: "Website Size",
            options: [
                <div key="basic">
                    <h3>Basic</h3>
                    <h3>1 - 4 Pages</h3>
                    <p>Suitable for small and simple websites</p>
                    <p>Draft Design Included</p>
                    <p>RM 1499</p>
                </div>,
                <div key="standard">
                    <h3>Standard</h3>
                    <h3>5 - 10 Pages</h3>
                    <p>Standard size websites which include all the Essential Pages</p>
                    <p>Draft Design Included</p>
                    <p>RM 2499</p>
                </div>,
                <div key="custom">
                    <h3>Custom</h3>
                    <h3>11+ Pages</h3>
                    <p>Suitable for businesses with a Large Range of Comprehensive Services & Portfolios to showcase</p>
                    <p>Draft Design Included</p>
                    <p>RM 3499</p>
                </div>
            ]
        },
        {
            question: "Website Content",
            options: [
                <div key="usAI">
                    <h3>From Us</h3>
                    <p>Your content will be generated by AI and we will make sure it is related to your industry</p>
                    <p>FREE</p>
                </div>,
                <div key="usDM">
                    <h3>Marketing Team</h3>
                    <p>Copywriting and content will be made by Marketing Team which can be outsource or from ourselve</p>
                    <p>Price may vary</p>
                </div>,
                <div key="custInfo">
                    <h3>From You</h3>
                    <p>We will provide you a form for you to fill up the content, and if you wanted to add my content, you can edit the form too</p>
                    <p>FREE</p>
                </div>
            ]
        },
        {
            question: "Domain",
            options: [
                <div key="newDomain">
                    <h3>New Domain</h3>
                    <p>Pick your Own Domain, example: techxyz.com</p>
                    <p>Price may change</p>
                    <p>RM 100 per Year</p>
                </div>,
                <div key="existingDomain">
                    <h3>Existing Domain</h3>
                    <p>Reuse your domain by providing to us</p>
                    <p>FREE</p>
                </div>,
            ]
        },
        {
            question: "Web Hosting",
            options: [
                <div key="basicServer">
                    <h3>Basic</h3>
                    <p>25GB SSD Disk</p>
                    <p>1TB Transfer Traffic</p>
                    <p>Singapore, Data Center</p>
                    <p>RM 50 per Month</p>
                </div>,
                <div key="customServer">
                    <h3>Custom</h3>
                    <p>Consult Us for the server spec</p>
                    <p>Price may Vary</p>
                </div>,
            ]
        },
        {
            question: "BackEnd (Dynamic)",
            options: [
                <div key="backend">
                    <h3>DataBase</h3>
                    <p>Required data handling, example, e-commerce, POS system, etc</p>
                    <p>Talk to us for the price, based on project complexity</p>
                </div>
            ],
            yesNo: true,
        },
        {
            question: "Basic SEO",
            options: [
                <div key="seo">
                    <h3>SEO</h3>
                    <p>Make your website appear in Google Search Engine</p>
                    <p>RM 300</p>
                </div>
            ],
            yesNo: true,
        },
        {
            question: "Additional Function",
            options: [
                <div key="complexFunction">
                    <h3>Complex Function</h3>
                    <p>Create function that required complex calculation, code without library, multiple quiz, etc</p>
                    <p>RM 500 per Function</p>
                </div>,
                <div key="managing">
                    <h3>Web management</h3>
                    <p>Assist in managing your server, content editing, technical issues, etc</p>
                    <p>Adding new pages, features, etc is NOT included</p>
                    <p>RM 200 per Month</p>
                </div>,
                    <div key="language">
                    <h3>Support Multiple Language</h3>
                    <p>Make it worldwide readable</p>
                    <p>RM 100</p>
                </div>,
            ]
        },
    ];

    const appDescription = {
        description: (
            <div>
                <h2>App Development Services</h2>
                <p>We offer custom app development services tailored to your business needs...</p>
                <button className="calc-btn" onClick={() => { ScrollToSection('contact'); handleReset(); }}>
                    Contact Us
                </button>
            </div>
        )
    };

    const initialQuestions = [
        {
            question: "Platform",
            options: ["Website", "App"]
        }
    ];

    const handleSelect = (answer, showFullOption = false) => {
        const updatedAnswers = { ...answers };
        const currentQuestionIndex = currentStep - (isWebsite ? 2 : 1);
        const currentQuestion = questions[currentQuestionIndex];

        if (showFullOption) {
            updatedAnswers[currentQuestion?.question] = currentQuestion?.options[0];
        } else if (!(currentQuestion?.yesNo && answer === "No")) {
            updatedAnswers[currentQuestion?.question || `Step ${currentStep}`] = answer;
        }

        if (currentStep === 1) {
            setIsWebsite(answer === "Website");
        }

        setAnswers(updatedAnswers);
        setCurrentStep(currentStep + 1);
    };

    const renderYesNo = () => {
        return (
            <div className="yes-no-container">
                <button className="yes-no-btn" onClick={() => handleSelect("Yes", true)}>
                    Yes
                </button>
                <button className="yes-no-btn" onClick={() => handleSelect("No")}>
                    No
                </button>
            </div>
        );
    };

    const handleReset = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsWebsite(false);
    };

    const getQuestions = () => {
        if (currentStep === 1) return initialQuestions;
        if (isWebsite) return websiteQuestions;
        return [appDescription];
    };

    const questions = getQuestions();

    const renderOptions = (options) => {
        return options.map((option, index) => (
            <div key={index} className="option">
                <div>{option}</div>
                <button className="select-btn" onClick={() => handleSelect(option)}>
                    Select
                </button>
            </div>
        ));
    };

    const renderSummary = () => {
        return (
            <div className="ITconsult-price-quotation-summary">
                <h3>Summary</h3>
                {Object.entries(answers).map(([question, answer], index) => (
                    <div key={index}>
                        <p><strong>{question}:</strong></p>
                        <div>{answer}</div>
                    </div>
                ))}
                <button className="calc-btn" onClick={() => { ScrollToSection('contact'); handleReset(); }}>
                    Contact Us
                </button>
            </div>
        );
    };

    const isFinalStep = currentStep === (isWebsite ? websiteQuestions.length + 2 : 2);

    return (
        <div className="ITconsult-price-quotation" id="quotation">
            <h1 style={{ textAlign: "center" }}><span style={{ color: "var(--warm-neon-blue)" }}>Build</span> Website / Application Plan</h1>
            <h2 style={{ textAlign: "center", margin: "0px" }}>How Much to <span style={{ color: "var(--warm-neon-blue)" }}>Build</span> a Website / Application?</h2>
            <p style={{ textAlign: "center", margin: "0px", fontStyle: "italic" }}>Price may vary without notice</p>

            {currentStep === 0 ? (
                <div className="ITconsult-price-quotation-form">
                    <button className="calc-btn" onClick={() => setCurrentStep(1)}>Let's Find Out</button>
                    <p>This is just an Estimation of Price</p>
                </div>
            ) : currentStep === 1 ? (
                <div className="ITconsult-price-quotation-question">
                    <h3>{initialQuestions[0].question}</h3>
                    <div className="options-container">
                        {renderOptions(initialQuestions[0].options)}
                    </div>
                </div>
            ) : (currentStep - (isWebsite ? 2 : 1) >= 0 && !isFinalStep) && (
                <div className="ITconsult-price-quotation-question">
                    <h3>{questions[currentStep - (isWebsite ? 2 : 1)]?.question}</h3>
                    <div className="options-container">
                        {questions[currentStep - (isWebsite ? 2 : 1)]?.yesNo ? renderYesNo() : renderOptions(questions[currentStep - (isWebsite ? 2 : 1)]?.options)}
                    </div>
                </div>
            )}
            {isFinalStep && isWebsite && (
                <div>
                    {renderSummary()}
                </div>
            )}
            {isFinalStep && !isWebsite && (
                <div>
                    {appDescription.description}
                </div>
            )}
        </div>
    );
}
