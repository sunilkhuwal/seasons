import React from "react";

const getSeason = (lat, month) => {
  if(lat > 0) {
    if (month > 2 && month < 9) {
        return 'Northen Hemisphere summer';
    }
    else {
        return 'Northern hemisphere winter';
    }
  } else {
    if (month > 2 && month < 9) {
        return 'Southern Hemisphere winter';
    }
    else {
        return 'Southern hemisphere Summer';
    }
  }
};

const SeasonDisplay = (props) => {
  return <div>Hi Season Display: {getSeason(props.lat, new Date().getMonth())}</div>;
};

export default SeasonDisplay;
