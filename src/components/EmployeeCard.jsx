import React from "react";

const EmployeeCard = ({ imageemployee }) => {
  return (
    <div className="cardEmployee_container">
      <div className="container_image">
        {imageemployee ? (
          <img
          alt="empl"
            src={imageemployee}
            className="image_Card_Employee"
          />
        ) : null}
      </div>
      {/* <span className="name_employee">{nomEmployee}</span>
      <span className="poste_Employee"> {poste} </span> */}
    </div>
  );
};

export default EmployeeCard;
