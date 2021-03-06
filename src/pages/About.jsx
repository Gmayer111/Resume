import React from "react"
import "assets/Styles/About.scss"
import Li from "components/UI/Li"
import CV from "assets/Images/nv-CV.pdf"
import FlipPage from "components/UI/FlipPage"
import Button from "components/UI/Button"

function About() {

    return (
        <>

            <FlipPage title={"A propos."} logo={<i className="fas fa-user"></i>}>

                <div className="describeContainer">
                    <div className="leftContainer">
                        <h2>Développeur Web Front-end & Back-end</h2>
                        <p>
                        Issu d’une formation supérieure en tourisme et fort d’une expérience de 4 ans dans le milieu de la production touristique, j’ai décidé de me tourner vers le secteur de l’informatique.
                        <br />
                        Je saurai mettre à profit mon expérience du monde de l’entreprise ainsi que ma passion pour le développement web.
                        </p>
                    </div>
                    <div className="rightContainer">
                        <h2>Informations personnelles</h2>

                        <ul>
                            <div className="blockInfo">
                                <Li title={"Nom"} info={"Gaël Mayer"} />
                                <Li title={"Age"} info={"34 ans"} />
                                <Li title={"Adresse"} info={"4 rue Dunois, 75013 Paris"} />
                                <Li title={"Mail"} info={"gaelmayer@yahoo.fr"} />
                                <a href={CV} target="_blank" rel="noopener noreferrer"><Button title={'Télécharger CV'}/></a>
                            </div>                            
                        </ul>
                    </div>
                </div>                    
            </FlipPage>            
        </>


    )
}



export default About
