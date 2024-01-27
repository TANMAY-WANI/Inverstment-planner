import React, { useState } from 'react';
import Banner from './banner';
import PlanBox from './PlanBox';
import Signup from './Signup';
import axios from 'axios';

const BannerContainer = () => {
  const [bannerFormData, setBannerFormData] = useState({
    currSalary: '',
    age: '',
  });

  const [planBoxFormData, setPlanBoxFormData] = useState({
    saving: '',
    goalAmt: '',
    goalDesc: '',
    goalAge: '',
  });

  const [showSignup, setShowSignup] = useState(false);
  const [showPlanBox, setShowPlanBox] = useState(false);

  const handleBannerFormSubmit = (bannerData) => {
    setBannerFormData(bannerData);
    if (localStorage.getItem('invest_iq_access_token') == null) {
      setShowSignup(true);
    }else{
        setShowPlanBox(true);
    }
  };

  const handlePlanBoxFormSubmit = (planBoxData) => {
      setPlanBoxFormData(planBoxData);
      setShowPlanBox(false)
    const CombinedData = {
        "token":localStorage.getItem('invest_iq_access_token'),
      ...bannerFormData,
      ...planBoxFormData,
    };

    axios.post('http://localhost:5010/api/v1/plan', CombinedData).then((res) => {
      console.log(res.data);
    });
    setShowPlanBox(false);
  };

  return (
    <>
      <Banner onSubmit={handleBannerFormSubmit} />
      <PlanBox show={showPlanBox} setShow={setShowPlanBox} onSubmit={handlePlanBoxFormSubmit} />
        <Signup show={showSignup} setShow={setShowSignup} />
    </>
  );
};

export default BannerContainer;
