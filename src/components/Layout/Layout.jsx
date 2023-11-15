import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import MainFeaturedVideo from "../MainFeaturedVideo/MainFeaturedVideo";
import Row from "../Row/Row";

const Layout = ({children}) => {


    return (
        <div>
            <Sidebar/>
            <MainFeaturedVideo/>
            <Row/>
            {children}
        </div>
    );
};

export default Layout;
