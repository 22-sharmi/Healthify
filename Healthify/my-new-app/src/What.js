import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"; // Importing NavBar component

export default function What() {
    const navigate = useNavigate(); // React Router's useNavigate hook for navigation
    const [selectedCards, setSelectedCards] = useState([]); // State to track selected cards

    // Function to toggle card selection
    const toggleCardSelection = (index) => {
        const newSelectedCards = [...selectedCards];
        const selectedCardIndex = newSelectedCards.indexOf(index);

        // If the card is not selected, add it to selectedCards array; otherwise, remove it
        if (selectedCardIndex === -1) {
            newSelectedCards.push(index);
        } else {
            newSelectedCards.splice(selectedCardIndex, 1);
        }

        setSelectedCards(newSelectedCards); // Update selected cards state
    };

    // Function to handle click on 'Next' button
    const handleNextClick = () => {
        if (selectedCards.length > 0) { // Check if at least one card is selected
            console.log("Selected Cards: ", selectedCards); // Log selected cards
            navigate('/login'); // Navigate to '/login' route
        } else {
            // If no card is selected, show an alert
            alert("Please select at least one card.");
        }
    };

    // Array containing URLs of card images
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

    // Array containing titles of cards
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
            <NavBar/> {/* Render NavBar component */}
            <div className="d-flex justify-content-around m-3">
                {/* Links for corporate users and existing users */}
                <a href="#" className="text-dark text-decoration-none">
                    Corporate User?
                </a>
                <a href="#" className="text-dark text-decoration-none">
                    Already a User?
                </a>
            </div>
            <div>
                {/* Header */}
                <br />
                <center>
                    <h3>What brings you to Healthify</h3>
                </center>
            </div>
            <div className="container mt-4">
                {/* Display cards */}
                <div className="row row-cols-3 d-flex justify-content-evenly">
                    {cardTitles.map((title, index) => (
                        <div
                            key={index}
                            className={`col mb-4 ${
                                selectedCards.includes(index + 1)
                                    ? "selected"
                                    : ""
                            }`}
                            onClick={() => toggleCardSelection(index + 1)}
                        >
                            {/* Individual card */}
                            <div className="card task-card position-relative h-100" style={{backgroundColor:"transparent",border:"none"}}>
                                <center>
                                    <img
                                        src={cardImages[index]}
                                        className="card-img-top"
                                        alt={`Card Image ${index + 1}`}
                                        style={{ width: "100px" }}
                                    />
                                </center>
                                <div className="card-body">
                                    <div className="form-check">
                                        {/* Checkbox for card selection */}
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={`checkbox${index + 1}`}
                                            checked={selectedCards.includes(
                                                index + 1
                                            )}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`checkbox${index + 1}`}
                                        ></label>
                                    </div>
                                    {/* Card title */}
                                    <h5 className="card-title text-center">
                                        {title}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next button */}
                <center>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={handleNextClick}
                    >
                        Proceed
                    </button>
                </center>
            </div>
        </div>
    );
}
