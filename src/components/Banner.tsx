/* eslint-disable jsx-a11y/alt-text */

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/images/banner.jpg";
import InputSearch from "./InputSearch";

export default function Banner() {


  return (
    <header className="banner">
      <img className="backgroundImage" src={BackgroundImage} />
      <InputSearch />
    </header>
  );
}
