import React from "react";
import Cards from "./Cards";

function Experience() {
  return (
    <div id="experience" className="mt-10">
      <div className="font-bold text-3xl">Experience</div>
      <div className="flex flex-col sm:flex-row mt-5 gap-10">
        <Cards
          srcPath={
            "https://d7s2x42om9.ufs.sh/f/iqqCYtr8lMtbud32sl0C1oT4ljMDivIYGPSrqyKHtXxNf89U"
          }
          roleName={"SDE"}
          description={
            "Worked with convey team to integrate APIs building features for the Last Mile Customers"
          }
        />
        <Cards
          srcPath={
            "https://d7s2x42om9.ufs.sh/f/iqqCYtr8lMtbtarzM9ZDlavwN1KLz5WjTiA6C3s8yt9BVMkG"
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
