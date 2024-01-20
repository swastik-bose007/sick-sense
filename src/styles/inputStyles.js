import { StyleSheet } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

export const inputStyles = StyleSheet.create({
    input1: {
        backgroundColor: "#ADD0CA",
        height: responsiveScreenHeight(7.5),
        width: responsiveScreenWidth(90),
        borderRadius: responsiveScreenWidth(2)
    },
    icon: {
        position: "absolute"
    },
    placeholder: {
        color: "#898989"
    }
})