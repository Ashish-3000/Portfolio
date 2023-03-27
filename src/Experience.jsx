import React from "react";
import Cards from "./Cards";

function Experience() {
  return (
    <div id="experience" className="mt-10">
      <div className="font-bold text-3xl">Experience</div>
      <div className="flex mt-5 gap-10">
        <Cards
          srcPath={
            "https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
          }
          roleName={"SDE"}
          description={
            "Worked with Exchange Team to build APIs for internal use and created matrices and dashboards"
          }
        />
        <Cards
          srcPath={
            "https://solytics-partners.com/wp-content/themes/solyticspartners/images/logo.svg"
          }
          roleName={"Frontend Developer"}
          description={"Made components in react and static sites for the team"}
        />
      </div>
    </div>
  );
}

export default Experience;
