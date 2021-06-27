import React from "react";
import config from "../config";
const test = () => {
  async function getData() {
    const options = {
      method: "POST",
      mode: "cors", // this cannot be 'no-cors'
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "lksadjf", pass: "lasdj" }),
      "Access-Control-Allow-Headers": "*",
      json: true,
    };

    console.log(config.apiUrl);
    const res = await fetch(`${config.apiUrl}/api`, options);
    // const jsonres = await res.json();
    console.log({ res });
  }
  return (
    <div>
      <button onClick={getData}>Get Request</button>
    </div>
  );
};

export default test;
