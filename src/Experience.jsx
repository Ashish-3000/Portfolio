import React from "react";
import Cards from "./Cards";

function Experience() {
  return (
    <div id="experience" className="mt-10">
      <div className="font-bold text-3xl">Experience</div>
      <div className="flex flex-col sm:flex-row mt-5 gap-10">
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
            "https://uploads-ssl.webflow.com/6467508a50c9cba3661cc696/6467508a50c9cba3661cc657_uuid-c34c1356-a1d0-4982-b77e-9dc049846636.svg"
          }
          roleName={"Frontend Developer"}
          description={"Made components in react and static sites for the team"}
        />
      </div>
    </div>
  );
}

export default Experience;
