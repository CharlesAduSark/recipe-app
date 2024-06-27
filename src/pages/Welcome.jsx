import WelcomeImage from "../assets/images/welcome-image.png";

export default function Welcome(){
    return(
        <div>
        <h2>Savory & Sweet</h2>
        <img src={WelcomeImage} alt="Welcome Image" />
        </div>
    )
}