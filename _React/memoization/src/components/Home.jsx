import React from "react";

const Home = ({greet}) => {

  console.log("Home");
  greet()
  return (
    <div>

      Home
    </div>
  );
};

export default React.memo(Home);