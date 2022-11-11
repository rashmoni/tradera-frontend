/* eslint-disable jsx-a11y/alt-text */


import BackgroundImage from "../assets/images/banner.jpg";
import InputSearch from "./InputSearch";

export default function Banner() {

  return (
    <header className="banner">
      <img className="backgroundImage" src={BackgroundImage} />
      <InputSearch/>
    </header>
  );
}
