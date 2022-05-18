import React from "react";


function Home({ color, name, city}) {
  return (
    <div id="home">
      <h1 style={{ color: color}}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;


// import React from "react";

// function Home({ color, username, city }) {
//   return (
//     <div id="home">
//       <h1 style={{ color: color }}>
//         {username} is a Web Developer from {city}
//       </h1>
//     </div>
//   );
// }

// function Home(props) {
//   return (
//     <div id="home">
//       <h1 style={{ color: props.color}}>
//         {props.name} is a Web Developer from { props.city}
//       </h1>
//     </div>
//   );
// }

// export default Home;
