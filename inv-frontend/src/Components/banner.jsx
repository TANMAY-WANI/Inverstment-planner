import React from 'react'
import '../Styles/Banner.css'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'


const Banner = () => {

    const navigate = useNavigate();
    const [showSignup, setShowSignup] = React.useState(false);
    const handlePlanning = () => {
        console.log('Planning');
        if (localStorage.getItem("token_invest_iq")) {
            navigate("/Plan")
        }
        else {
            setShowSignup(true);
        }
    }
    return (
        <>
            <h1>Plan your Investments</h1>
            <div className='grid'>
                <div className='box1'>
                    <form>
                        <hr />
                        <div className='form-field'>
                            <div>
                                <label htmlFor="curr-salary">Current Monthly Salary <p>*</p></label>
                                <input type="number" id="curr-salary" name="curr-salary" />
                            </div>
                            <div>
                                <label htmlFor="age">Current Age <p>*</p></label>
                                <input type="number" id="age" name="age" />
                            </div>
                        </div>
                        <input type="button" value="Plan my Investment"  onClick={handlePlanning}/>
                    </form>
                    <hr />
                </div>
                <div>
                    <img className='banner-img' src="banner-img.png" alt="" />
                </div>
            </div>
            <Signup show={showSignup} setShow={setShowSignup} />
        </>
    )
}

export default Banner