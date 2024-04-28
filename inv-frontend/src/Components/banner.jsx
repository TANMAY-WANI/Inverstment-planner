import React, {useState,useEffect} from 'react';
import '../Styles/Banner.css';

const Banner = ({ onSubmit }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 940);

  useEffect(() => {
    // Function to check window width and update state
    const checkWindowWidth = () => {
      setIsSmallScreen(window.innerWidth < 960);
    };

    // Event listener for window resize
    window.addEventListener('resize', checkWindowWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []); 
    const handlePlanning = () => {

        const currSalary = document.getElementById('curr-salary').value;
        const age = document.getElementById('age').value;
    
        if (currSalary === '' || age === '') {
        alert('Please fill all the fields');
        return;
        }

        // clear the form after collecting the data
        document.getElementById('curr-salary').value = '';
        document.getElementById('age').value = '';
    
        const data = {
        currSalary,
        age,
        };
    
        onSubmit(data);
    };
  return (
    <>
      <h1>Plan your Investments</h1>
      <div className='row'>
        <div className='col-md-7'>
          <form>
            <hr />
            <div className='row'>
              <div className='col-md-6'>
                <label htmlFor='curr-salary'>Current Monthly Salary <p>*</p></label>
                <input type='number' id='curr-salary' name='curr-salary' />
              </div>
              <div className='col-md-4'>
                <label htmlFor='age'>Current Age <p>*</p></label>
                <input type='number' id='age' name='age' />
              </div>
            </div>
            <input className='col-sm-6' type='button' value='Plan my Investment' onClick={handlePlanning} />
          </form>
          <hr />
        </div>
        <div className='col-md-4'>
         {!isSmallScreen && (<img className='banner-img' src='banner-img.png' alt='' />)}
        </div>
      </div>
    </>
  );
};

export default Banner;
