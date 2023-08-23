import React from "react";

export default function Cards({ srcPath, links, roleName, description }) {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-xs">
      <img className="object-contain h-48" src={srcPath} alt="image" />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-white">
          <a href={links}>{roleName}</a>
        </h4>
        <p className="mb-2 leading-normal text-gray-400">{description}</p>
      </div>
    </div>
  );
}
