import React from "react";
import EmployeeCard from "./EmployeeCard";
import etienne from "./image/etienne.png";
import derrick from "./image/derrick.png";
import leonel from "./image/leonel.png";
import ernest from "./image/ernest.png";
import ndjana from "./image/ndjana.png";
import cecile from "./image/cecile.png";
import michel from "./image/Michel.png";
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
          nomEmployee={"Fomo Michel"}
          imageemployee={michel}
          poste={"Founder & CEO"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"CECILE POUWAMS"}
          imageemployee={cecile}
          poste={"Assistante de direction"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"FOMO ETIENNE"}
          imageemployee={etienne}
          poste={"community manager"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"TATA NJIAH"}
          imageemployee={derrick}
          poste={"Project Manager dev"}
          key={"Founder"}
        />

        <EmployeeCard
          nomEmployee={"NDJANA DAVY"}
          imageemployee={ndjana}
          poste={"Developpeur"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"TSIMI ERNEST"}
          imageemployee={ernest}
          poste={"Developpeur"}
          key={"Founder"}
        />
        <EmployeeCard
          nomEmployee={"YIMGA LEONEL"}
          imageemployee={leonel}
          poste={"Developpeur"}
          key={"Founder"}
        />
       
      </div>
    </div>
  );
};

export default Team;
