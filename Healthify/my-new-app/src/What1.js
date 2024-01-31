import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./What1.css"; // Import CSS file for styling

export default function What1() {
    const navigate = useNavigate();
    const [selectedCards, setSelectedCards] = useState([]);

    // Function to toggle card selection
    const toggleCardSelection = (index) => {
        if (selectedCards.includes(index)) {
            // If card is already selected, remove it from selectedCards
            setSelectedCards(selectedCards.filter(cardIndex => cardIndex !== index));
        } else {
            // If card is not selected, add it to selectedCards
            setSelectedCards([...selectedCards, index]);
        }
    };

    const handleNextClick = () => {
        if (selectedCards.length > 0) {
            console.log("Selected Cards: ", selectedCards);
            navigate("/where");
        } else {
            alert("Please select at least one card.");
        }
    };

    const cardImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF2JVntBBPlrmjWqCyfV1kbeO9zNfNi1-4Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-kbhVRCXREr8o06satRC26NUhboVTDTZlA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pRg84SGBHBmnqp4kk_BEhNjUr9g_f6xT1Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSonp0NEAiaAd8ad2WXCw8Tns2mMyjqJWSTg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfaFFHof182d6juD4Ap5l5QR7R7enFFFC-g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSckosY3DGi7muSxwZpA9JvFiv7qCg6WL4Xg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMDor723gsIX55gdr7qYVx5qKb85VBmh_Qjjo42vDGYdpl7t3wXCGk7FRuKi0G4AX3n4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm1vQSEgr3xEHlABVkWsReAVx80wXMV_AVfMVLKNYall_baIeIj4y_WwEC8kwnXPs-sTE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFhqCN8brRmTmID8NOfCJ9WW3ai8e4i3FnyQQwOinsOkjvEH15QfzR1aq9Gp7vNAGuck&usqp=CAU",
    ];

    const cardTitles = [
        "COACH GUIDANCE",
        "DIET PLAN",
        "WEIGHT LOSS",
        "INTERMITTENT FASTING",
        "COUNT CALORIES",
        "MUSCLE GAIN",
        "WORKOUTS AND YOGA",
        "HEALTHY FOODS",
        "CGM(Healthfy-Pro)",
    ];

    return (
        <div>
            <div>
                <br />
                <center>
                    <img
                        src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/HealthifyMe-Logonew-logo.svg?auto=format"
                        alt=""
                        style={{}}
                    />
                    <h3>What brings you to Healthify</h3>
                </center>
            </div>
            <div className="container mt-4">
                <div className="row row-cols-3 justify-content-around">
                    {cardTitles.map((title, index) => (
                        <div
                            key={index}
                            className={`col mb-4 card-container`}
                            onClick={() => toggleCardSelection(index)}
                        >
                            <div className={`card task-card position-relative h-100 ${selectedCards.includes(index) ? "selected" : ""}`}>
                                <center>
                                    <img
                                        src={cardImages[index]}
                                        className="card-img-top"
                                        alt={`Card Image ${index + 1}`}
                                        style={{ width: "50%", borderRadius: "8px" }}
                                    />
                                </center>
                                <div className="card-body">
                                    <div className="form-check" style={{ position: 'absolute', top: '10px', right: '10px'}}>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`checkbox${index + 1}`}
                                            checked={selectedCards.includes(index)}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`checkbox${index + 1}`}
                                        ></label>
                                    </div>
                                    <h5 className="card-title text-center">
                                        {title}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <center>
                    <button
                        type="button"
                        className="btn btn-dark mt-3"
                        onClick={handleNextClick}
                    >
                        Proceed
                    </button>
                </center>
            </div>
        </div>
    );
}
