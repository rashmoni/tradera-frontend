import BackgroundImage from "../assets/images/banner.jpg"
import NavigationBar from "./NavigationBar";
export default function Banner () {

    return (
        <header className="banner">
            <NavigationBar />
            <img 
            className="backgroundImage"
            src={BackgroundImage}
            />
        </header>

    );

}