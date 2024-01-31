import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const determineWeightStatus = (bmi, weight, height) => {
  let weightStatus = '';
  let targetWeight = 0;

  if (!bmi || isNaN(bmi)) {
    weightStatus = 'N/A'; // Set weightStatus to 'N/A' if BMI is not calculated
  } else if (bmi < 18.5) {
    weightStatus = 'Underweight';
    targetWeight = 18.5 * (height / 100) * (height / 100) - weight;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    weightStatus = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    weightStatus = 'Overweight';
    targetWeight = weight - 24.9 * (height / 100) * (height / 100);
  } else {
    weightStatus = 'Obese';
  }

  return { weightStatus, targetWeight };
};

export default function WeightCorrectionPage() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [resultDisplayed, setResultDisplayed] = useState(false);
  const navigate = useNavigate();

  const calculateBMI = () => {
    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setBMI(bmiValue);
    setResultDisplayed(true);
  };

  const { weightStatus, targetWeight } = determineWeightStatus(bmi, weight, height);

  const handleNextClick = () => {
    // Add your logic to navigate only if BMI has been calculated
    if (bmi && !isNaN(bmi)) {
      // You can replace '/next' with the actual path you want to navigate to
      navigate('/next');
    }
  };

  return (
    <div className="container text-center">
      <div>
        <h3>Weight Correction</h3>
        <p>
          Your Height: {height ? `${height} cm` : 'N/A'}
          <br />
          Your Weight: {weight ? `${weight} kg` : 'N/A'}
          <br />
          BMI: {bmi ? bmi : 'N/A'}
          <br />
          Status: {weightStatus !== 'N/A' ? weightStatus : 'N/A'}
          <br />
          {resultDisplayed && weightStatus !== 'N/A' && (
            <>
              {weightStatus === 'Obese' ? (
                <span>
                  Medical help is needed. Please consult a healthcare professional.
                  <br />
                </span>
              ) : (
                weightStatus !== 'Normal weight' && (
                  <span>
                    Suggested Weight to {weightStatus === 'Underweight' ? 'Gain' : 'Lose'}: {targetWeight.toFixed(2)} kg
                    <br />
                  </span>
                )
              )}
            </>
          )}
        </p>
      </div>
      <div>
        <form>
          <label htmlFor="height">Height in cm :</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="  Enter your height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{
              width: '200px',
              border: 'none',
              borderBottom: '1px solid black',
            }}
            required
          />
          <br />
          <label htmlFor="weight">Weight in kg :</label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="  Enter your weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{
              width: '200px',
              border: 'none',
              borderBottom: '1px solid black',
            }}
            required
          />
        </form>
      </div> <br/>
      <button className="btn btn-calculate btn-dark" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <br/><br/><br/>
      <div className="d-flex justify-content-between">
        <a href="/Active" className="btn btn-dark">
          Back
        </a>
        <button className="btn btn-next btn-dark" onClick={handleNextClick} disabled={!bmi || isNaN(bmi)}>
          Next
        </button>
      </div>
    </div>
  );
}
