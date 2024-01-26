import React from 'react';
import '../Styles/Banner.css';

const Banner = ({ onSubmit }) => {
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
      <div className='grid'>
        <div className='box1'>
          <form>
            <hr />
            <div className='form-field'>
              <div>
                <label htmlFor='curr-salary'>Current Monthly Salary <p>*</p></label>
                <input type='number' id='curr-salary' name='curr-salary' />
              </div>
              <div>
                <label htmlFor='age'>Current Age <p>*</p></label>
                <input type='number' id='age' name='age' />
              </div>
            </div>
            <input type='button' value='Plan my Investment' onClick={handlePlanning} />
          </form>
          <hr />
        </div>
        <div>
          <img className='banner-img' src='banner-img.png' alt='' />
        </div>
      </div>
    </>
  );
};

export default Banner;
