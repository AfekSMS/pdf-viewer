import React from "react";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div
      id="loader"
      className="d-flex justify-content-center align-items-center flex-column"
    >
      {/* <img
        src="https://www.sms2010.co.il/new_site/media/SMS_logo.png"
        alt=""
        className="mb-5 App-logo"
      /> */}
      <p>Loading...</p>
    </div>
  );
};
export default Loader;
