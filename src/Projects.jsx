import React from "react";
import Cards from "./Cards";
import Unweave from "./assets/unweave.png";
import TabAwesome from "./assets/tabawesome.png";
import MetaVerse from "./assets/metaverse.png";
import Mapbox from "./assets/mapbox.png";
import JsonFormatter from "./assets/jsonformatter.png";
import TrueWatchTime from "./assets/truewatchtime.png";

function Projects() {
  return (
    <div id="projects" className="mt-10 mb-10">
      <div className="font-bold text-3xl">Projects</div>
      <div className="mt-5 flex flex-col flex-wrap sm:flex-row gap-10">
        <Cards
          srcPath={TrueWatchTime}
          links={"https://chromewebstore.google.com/detail/ipilpgmkckmlbkecadjdbdhlhkipdnip?utm_source=item-share-cb"}
          roleName={"True Watch Time"}
          description={
            "Chrome extension that shows true remaining YouTube watch time at any speed"
          }
        />
        <Cards
          srcPath={JsonFormatter}
          roleName={"Json Formatter"}
          links={"https://json-parser-livid.vercel.app/"}
          description={
            "Formats your json data and let you copy or download in csv or txt format"
          }
        />
        <Cards
          srcPath={MetaVerse}
          roleName={"Meta"}
          links={"https://meta-verse-framer-next.vercel.app/"}
          description={
            "Created a website using NextJs, Framer Motion and TailwindCSS"
          }
        />
        <Cards
          srcPath={Unweave}
          roleName={"Unweave"}
          links={"https://unweave-henna.vercel.app/"}
          description={
            "Blogging Platform similar to that of Medium created using ReactJs, EditorJs, Firebase and MongoDB"
          }
        />
        <Cards
          srcPath={TabAwesome}
          roleName={"Tab Awesome"}
          links={"https://addons.mozilla.org/en-US/firefox/addon/tab-awesome/"}
          description={
            "Created own version of Momentum and deployed on Firefox"
          }
        />
        <Cards
          srcPath={Mapbox}
          links={"https://ip-address-tracker-gules-nine.vercel.app/"}
          roleName={"IP Address Tracker"}
          description={
            "Tracks IP addresses using MAPBOXGL Api, HTML, CSS and JS"
          }
        />
      </div>
    </div>
  );
}

export default Projects;
