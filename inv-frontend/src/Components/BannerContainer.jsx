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
    //   setPlanBoxFormData(planBoxData);
      setShowPlanBox(false)
    //   console.log(planBoxFormData);
    const CombinedData = {
        "token":localStorage.getItem('invest_iq_access_token'),
      ...bannerFormData,
      ...planBoxData,
    };
    axios.post('http://localhost:5010/api/v1/plan', CombinedData, { responseType: 'blob' })
    .then((response) => {
      // Create a blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a link element
      const link = document.createElement('a');

      // Create a URL for the blob and set it as the href of the link
      link.href = URL.createObjectURL(blob);

      // Set the download attribute and file name
      link.download = 'invest_iq_plan.pdf';

      // Append the link to the body
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the body
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error('Error downloading file:', error);
    })
    .finally(() => {
      // Close the plan box form or perform any other necessary actions
      setShowPlanBox(false);
    });

    // setShowPlanBox(false);
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
