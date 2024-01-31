import React from 'react';
import { useNavigate } from 'react-router-dom';
import AhmedabadImage from './img/ahamedabad.png';
import PuneImage from './img/pune images-removebg-preview.png';
import KanpurImage from './img/kanpur images-removebg-preview.png';

export default function Where() {
  const navigate = useNavigate();

  // Function to handle city selection
  function selectCity(city) {
    document.getElementById('cities').value = city;
  }

  // Function to handle click on 'Next' button
  function handleNextClick() {
    // Get the selected city from the dropdown
    const selectedCity = document.getElementById('cities').value;
    console.log(`Selected City: ${selectedCity}`);

    // Navigate to the '/lang' route
    navigate('/lang');

    // Log a message to the console
    console.log('Next button clicked');
  }

  return (
    <div className="text-center container">
      <div>
        <h3>Where are you from?</h3>
        <p>This will help us personalize the app for you.</p>
      </div>
      <div className="text-center">
        <form>
          <label htmlFor="cities" className="fs-5">
            Choose a city:
          </label>
          <select id="cities" name="cities" className="fs-6">
            <option value="" disabled defaultValue>
              Select City
            </option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
            <option value="chennai">Chennai</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="jaipur">Jaipur</option>
            <option value="pune">Pune</option>
            <option value="lucknow">Lucknow</option>
            <option value="kanpur">Kanpur</option>
            <option value="chandigarh">Chandigarh</option>
            <option value="coimbatore">Coimbatore</option>
            <option value="Erode">Erode</option>
            <option value="madurai">Madurai</option>
            <option value="surat">Surat</option>
            <option value="trichy">Trichy</option>
            <option value="salem">Salem</option>
            <option value="tirunelveli">Tirunelveli</option>
            <option value="vellore">Vellore</option>
            <option value="thanjavur">Thanjavur</option>
            <option value="tiruppur">Tiruppur</option>
            <option value="ooty">Ooty</option>
          </select>
        </form>
      </div>
      <div>
        <div className="d-flex justify-content-around">
          {/* Bengaluru card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2d2d1c41951119.57bd38bb0b959.png"
              alt=""
              width="100"
              height="100"
              className=""
              onClick={() => selectCity('bengaluru')}
            />
            <div className="card-title">Bengaluru</div>
          </div>
          {/* Mumbai card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0e892941951119.57bd38bb0c1cf.png"
              alt=""
              width="100"
              height="100"
              onClick={() => selectCity('mumbai')}
            />
            <div className="card-title">Mumbai</div>
          </div>
          {/* Delhi card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d09db641951119.57bd38bb0abd3.png"
              alt=""
              width="100"
              height="100"
              onClick={() => selectCity('delhi')}
            />
            <div className="card-title">New Delhi</div>
          </div>
          {/* Kolkata card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/31203f41951119.57bd38bb0bdc6.png"
              alt=""
              width="100"
              height="100"
              onClick={() => selectCity('kolkata')}
            />
            <div className="card-title">Kolkata</div>
          </div>
        </div>{' '}
        <br />
        <div className="d-flex justify-content-around">
          {/* Chennai card */}
          <div className="card" style={{ height: '150px', width: '120px' }}>
            <center>
              <img
                src="https://static.thenounproject.com/png/3925168-200.png"
                alt=""
                width="60"
                height="60"
                style={{ position: 'relative', top: '20px' }}
                onClick={() => selectCity('chennai')}
              />
            </center>
            <div className="card-title" style={{ position: 'relative', top: '45px' }}>
              Chennai
            </div>
          </div>
          {/* Hyderabad card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21b81341951119.57bd38bb0b1f3.png"
              alt=""
              width="100"
              height="100"
              onClick={() => selectCity('hyderabad')}
            />
            <div className="card-title">Hyderabad</div>
          </div>
          {/* Ahmedabad card */}
          <div className="card" style={{ height: '150px', width: '120px' }}>
            <br />
            <center>
              <img src={AhmedabadImage} alt="" width="60" height="60" onClick={() => selectCity('ahmedabad')} />
            </center>{' '}
            <br />
            <div className="card-title">Ahmedabad</div>
          </div>
          {/* Surat card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-surat-1-161360.png"
              alt=""
              width="100"
              height="100"
              onClick={() => selectCity('surat')}
            />
            <div className="card-title">Surat</div>
          </div>
        </div>{' '}
        <br />
        <div className="d-flex justify-content-around">
          {/* Pune card */}
          <div className="card" style={{ height: '150px' }}>
            <img src={PuneImage} alt="" width="100" height="100" className="" onClick={() => selectCity('pune')} />
            <div className="card-title">Pune</div>
          </div>
          {/* Lucknow card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-bara-119683.png"
              alt=""
              width="100"
              height="100"
              onClick={() => selectCity('lucknow')}
            />
            <div className="card-title">Lucknow</div>
          </div>
          {/* Kanpur card */}
          <div className="card" style={{ height: '150px' }}>
            <img src={KanpurImage} alt="" width="100" height="100" onClick={() => selectCity('kanpur')} />
            <div className="card-title">Kanpur</div>
          </div>
          {/* Jaipur card */}
          <div className="card" style={{ height: '150px' }}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8a28741951119.57bd38bb0a76e.png"
              alt=""
              width="100"
              height="100"
              onClick={() => selectCity('jaipur')}
            />
            <div className="card-title">Jaipur</div>
          </div>
        </div>{' '}
        <br /> <br />
        <div className="d-flex justify-content-between">
          {/* Back button */}
          <a href="/name" className="btn btn-dark">
            Back
          </a>
          {/* Next button */}
          <button className="btn btn-next btn-dark" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
