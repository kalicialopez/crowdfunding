import React from "react";

import "./ProgressBar.css";

// Code 1

const ProgressBar = ({ goal, sum_pledges }) => {
  const progressPercentage = Math.round((sum_pledges / goal) * 100) + "%";

  const remainder = Math.round(goal - sum_pledges, 2);
  // const goalPercent = goal + "%";
  console.log(progressPercentage);
  const progressStyle = {
    width: progressPercentage,
  };
  const completeGoalStyle = {
    width: "100%",
  };

  return (
    <div id="progress-container">
      <div id="progress-bar">
        {sum_pledges < goal ? (
          <div style={progressStyle} id="progress">
            {progressPercentage}
          </div>
        ) : (
          <div style={completeGoalStyle} id="progress"></div>
        )}
      </div>

      {sum_pledges < goal ? (
        <p className="sub-text">
          <b>${sum_pledges > 0 ? sum_pledges : "0"} </b>of ${goal} raised
        </p>
      ) : (
        <p>
          Goal reached! | ${sum_pledges} of ${goal} raised
        </p>
      )}
    </div>
  );
};

export default ProgressBar;

// Code 2: https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl

// const ProgressBar = (props) => {
//   const { bgcolor, completed } = props;

//   const containerStyles = {
//     height: 20,
//     width: "100%",
//     backgroundColor: "#e0e0de",
//     borderRadius: 50,
//     margin: 50,
//   };

//   const fillerStyles = {
//     height: "100%",
//     width: `${completed}%`,
//     backgroundColor: bgcolor,
//     borderRadius: "inherit",
//     textAlign: "right",
//   };

//   const labelStyles = {
//     padding: 5,
//     color: "white",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={containerStyles}>
//       <div style={fillerStyles}>
//         <span style={labelStyles}>{`${completed}%`}</span>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;
