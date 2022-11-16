import React, { memo } from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer_title">
        Made with ❤ by Mateo
      </div>
      <div>
      © 2022 Broccoli & Co. All Rights Reserved
      </div>
    </div>
  );
};

export default memo(Footer);
