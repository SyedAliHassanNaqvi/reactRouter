import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
let gitId = "SyedAliHassanNaqvi";
function Github() {
  let gitId = "SyedAliHassanNaqvi";
  const data = useLoaderData();
  /*const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/SyedAliHassanNaqvi")
      .then((response) => response.json()) //.then is used to hanle promises
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);*/

  return (
    <>
      <div className="bg-red-500 text-white p-4 text-3xl">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        <h3>
          <Link
            className="font-bold"
            to={`https://github.com/${gitId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my GitHub Profile
          </Link>
        </h3>
      </div>
    </>
  );
}
export default Github;
//loader is basically used to optimize the loading time when fetching data from an Api or db. When we hover on GitHub button on header, Loader loads the data from api and stores in cache. So even before clicking on the button our data is already available which reduces lag(loading time)
export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/${gitId}`);
  return response.json();
};
