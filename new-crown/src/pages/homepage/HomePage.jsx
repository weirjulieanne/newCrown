import React from "react";
import "./homePageStyles.scss";
import Directory from "../../components/directory/Directory";

function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
}

export default HomePage;
