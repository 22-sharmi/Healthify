import React, { useState } from "react";
import classNames from 'classnames';
import { useNavigate } from "react-router-dom";

export default function Active() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle click on card
  const handleCardClick = (cardTitle) => {
    if (selectedCard === cardTitle) {
      // If the same card is clicked again, unselect it
      setSelectedCard(null);
    } else {
      setSelectedCard(cardTitle);
    }
  };

  // Function to handle click on 'Next' button
  const handleNextClick = () => {
    if (selectedCard) {
      // Log the selected activity level to the console
      console.log(selectedCard);
      
      // Navigate to the '/weight-correction' route
      navigate('/weight-correction');
    } else {
      // Alert the user if no activity level is selected
      alert('Please select an activity level.');
    }
  };

  return (
    <div className="container text-center">
      <h3>How active are you?</h3>
      <p>Based on your lifestyle, we can assess your daily calorie requirements</p>
      <div className="d-flex justify-content-between">
        <div className={classNames('card mb-3', { selected: selectedCard === 'Little or No Activity' })} onClick={() => handleCardClick('Little or No Activity')} style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4"> <br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxhqCmWcjcOr3XJDwSJrAFXN8nk28ITeqqg&usqp=CAU" className="img-fluid rounded-start" alt="Desk Job" width="70"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Little or No Activity</h5>
                <p className="card-text">Mostly sitting through the day (e.g., Desk Job, Bank Teller)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('card mb-3', { selected: selectedCard === 'Lightly Active' })} onClick={() => handleCardClick('Lightly Active')} style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4"> <br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoRSESiD_SU5JXby8C39D-S349rTmOknxDg&usqp=CAU" className="img-fluid rounded-start" alt="Desk Job" width="70"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Lightly Active</h5>
                <p className="card-text">Mostly standing through the day (e.g., Sales Associate, Teacher)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className={classNames('card mb-3', { selected: selectedCard === 'Moderately Active' })} onClick={() => handleCardClick('Moderately Active')} style={{ maxWidth: '510px' }}>
          <div className="row g-0">
            <div className="col-md-4"> <br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwmW00wySSBv3VONCcYc3WGrbWHlIQ9oGbA&usqp=CAU" className="img-fluid rounded-start" alt="Desk Job" width="100" height="100"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Moderately Active</h5>
                <p className="card-text">Mostly walking or doing physical activity through the day (e.g., Tour Guide, Waiter)</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames('card mb-3', { selected: selectedCard === 'Very Active' })} onClick={() => handleCardClick('Very Active')} style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4"> <br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cRCe7M3PJC9eE_BXIqy0m9-gq0xzGrUy1fE6LJcUdDOWX5zoLUh6D4ky8acCUA0Kel0&usqp=CAU" className="img-fluid rounded-start" alt="Desk Job" width="100"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Very Active</h5>
                <p className="card-text">Mostly doing heavy physical activity through the day (e.g., Gym Instructor, Construction Worker)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <a href="where.html" className="btn btn-dark">Back</a>
        <button className="btn btn-next btn-dark" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
