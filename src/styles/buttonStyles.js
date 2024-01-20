import { StyleSheet } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";


export const buttonStyles = StyleSheet.create({
    loginBtn: {
        backgroundColor: "#ADD0CA",
        height: responsiveScreenHeight(6.5),
        width: responsiveScreenWidth(90),
        borderRadius: responsiveScreenWidth(2)
    },
    signupBtn: {
        backgroundColor: "#003128",
        height: responsiveScreenHeight(6.5),
        width: responsiveScreenWidth(90),
        borderRadius: responsiveScreenWidth(2)
    },
    googleBtn: {
        backgroundColor: "#1F2022",
        height: responsiveScreenHeight(6.5),
        width: responsiveScreenWidth(90),
        borderRadius: responsiveScreenWidth(2)
    }
})