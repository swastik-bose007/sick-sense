import { StyleSheet } from "react-native";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

export const textStyles = StyleSheet.create({
    welcomeTxt: {
        fontFamily: "SoDoSans-Black"
    },
    loginTxt: {
        color: "#1F2022",
        fontFamily: "SoDoSans-Black",
        fontSize: responsiveScreenFontSize(3.5)
    },
    signupTxt: {
        color: "#E8FAF4",
        fontFamily: "SoDoSans-Black",
        fontSize: responsiveScreenFontSize(3.5)
    }
})