import WelcomeImage from "../assets/images/welcome-image.png";

export default function Welcome() {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/heroImage.png')] bg-cover h-screen bg-center flex flex-col place-content-center place-items-center">
            <h1 className="text-white text-center text-4xl">Savory & Sweet</h1>
            <img src={WelcomeImage} alt="Welcome Image" />
        </div>
    )
}