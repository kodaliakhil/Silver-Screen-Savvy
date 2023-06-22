import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;


// This component is to make all the
//  content to be center aligned