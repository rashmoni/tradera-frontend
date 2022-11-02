import BackgroundImage from "../assets/images/banner.jpg"
import NavigationBar from "./NavigationBar";
export default function Banner () {

    return (
        <header className="header">
            <NavigationBar />
            <img 
            className="background-image"
            src={BackgroundImage}
            />
        </header>

    );

}