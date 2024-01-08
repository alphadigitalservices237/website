import React from "react";
import EmployeeCard from "./EmployeeCard";
import im1 from "./image/1.jpg";
import im2 from "./image/2.jpg";
import im3 from "./image/3.jpg";
import im4 from "./image/4.jpg";
const Team = () => {
  return (
    <div className="container_team" id="team">
      <span className="subtitle"> | Team </span>
      <h3 className="semititle"> {"{Qui sommes nous}"} </h3>
      <h1 className="title">Rencontrez notre equipe d'experts</h1>
      <p className="description_team">
        A Alpha digital services, nous ne sommes pas simplement une equipe mais
        une famille{" "}
      </p>
      <div className="container_cardEmployee">
        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im1}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im2}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im3}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im4}
          poste={"Founder & CEO"}
          key={"Founder"}
        />

        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im1}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im2}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im3}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"Michel Fomo"}
          imageemployee={im4}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
      </div>
    </div>
  );
};

export default Team;
