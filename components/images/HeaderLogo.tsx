import React from "react";
import { Image } from "react-native";

const imgPath = require("../../assets/headerLogo.png");

export default () => {
    return <Image source={imgPath} style={{ height: 50, width: 50 }} />;
};