import React from 'react'
import '../Styles/Banner.css'

const Banner = () => {
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
                        <input type="button" value="Plan my Investment" />
                    </form>
                    <hr />
                </div>
                <div>
                    <img className='banner-img' src="banner-img.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner