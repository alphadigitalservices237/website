import React from "react";
import im from "./image/5.png";
function Contact() {
  return (
    <div className="container_contact">
      <div className="bg_image">
        <img src={im} className="image_bg" />
      </div>
      <div className="text_content">
        <span className="minititle"> | Contact </span>
        <div className="parts">
          <div className="part1">
            <h2 className="title_contact">
              Contactez nous et voyez vos idees se concretiser
            </h2>
            <p className="description_contact">
              Envoyer nous un message et nous nous chargeons de vous contacter
              dans les plus bref delai a fin de d'etablir un audit de service
            </p>

            <div className="list_items">
              <div className="items">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-2 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="txt_items">
                  Etude fonctionnalite sur une entreprise{" "}
                </span>
              </div>

              <div className="items">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="txt_items">
                  {" "}
                  Structuration de vos objectifs finales{" "}
                </span>
              </div>

              <div className="items">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="txt_items">Delai et pricing </span>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="phone">
              <form>
                <p> nom </p>
                <input type="text" placeholder="Entrez votre nom complet" />
                <p> Email </p>
                <input type="text" placeholder="Entrez votre adresse email" />
                <p> Tel </p>
                <input type="number" placeholder="Entrez votre   Tel" />
                <p> Entreprise </p>
                <input
                  type="number"
                  placeholder="Entrez votre numero  enteprise"
                />
                <p> Message </p>
                <textarea placeholder="Entrez un message"></textarea>
                <input type="submit" value="soumettre" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
