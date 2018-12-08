import React from 'react';
import StarContent from "./StarContent";
import StarHeader from "./StarHeader";


const StarContainer = () => {
  return (
    <div className="banner-wrapper">
      <StarHeader />
      <StarContent />
    </div>
  );
};

export default StarContainer;