// --------------------------------------------------------------------
// PREREQUISITES
// --------------------------------------------------------------------
import { Dimensions,StyleSheet } from 'react-native';
import colorTheme from '../config/colorTheme';
import { scale } from './measurements';

export const screenSize = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

export const globalStyles = StyleSheet.create({
    // ----------- dimensions ----------------------------
    dummyView: {
        height: "100%",
        width: "100%",
    },
    upperSpace: {
        marginTop: 80
    },
    dim1: {
        marginTop: scale.scale7
    },
    dim2: {
        marginTop: 5
    },
    dim3 : {
        marginTop: scale.scale10
    },
    dim4 : {
        marginTop: scale.scale12
    },
    dim5 : {
        marginTop: scale.scale13
    },
    dim6 : {
        marginTop: 80
    },
    // ------------ alignment setting-------------------------
    flexCenter : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    flexLeft : {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    flexRight : {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    flexJustify : {
        display: "flex",
        flexDirection: "row",
        columnGap: 1
    },
    bgcolor : {
        backgroundColor: colorTheme.darkGreen
    },
    // ------------- Image styles -------------------------------
    logoimage : {
        width: scale.scalex,
        height: scale.scalex
    },
    loginImage : {
        height: scale.scaley,
        width: 200
    },
    // ------------- Text styles -------------------------------
    splashText : {
        fontFamily: "SoDoSans-Regular",
        color: colorTheme.whiteSmoke,
        marginTop: scale.scale4
    },
    loginHeader: {
        fontFamily: "SoDoSans-Black",
        fontSize: scale.scale10
    },
    loginPara : {
        fontFamily: "OpenSans-Light",
        fontSize: scale.scale2
    },
    subText : {
        fontFamily: "OpenSans-SemiBold",
        fontSize: scale.scale3,
        color: colorTheme.fernGreen
    },
    // --------------- input styles ------------------------------
    inputStyle : {
        height: 61,
        width: 350,
        backgroundColor: colorTheme.ashGrey,
        borderRadius: 8,
        paddingHorizontal: 55
    },
    icon: {
        position: 'absolute',
        top: 23,
        left: 25,
        color: colorTheme.battleShipGrey
    },
    icon2: {
        position: 'absolute',
        top: 23,
        right: 25,
        color: colorTheme.battleShipGrey
    },
    // ----------------- button style -----------------------------
    btnStyle : {
        height: 61,
        width: 350,
        backgroundColor: colorTheme.eerieBlack,
        borderRadius: 8
    },
    btnText : {
        fontSize: scale.scale6,
        fontFamily: "SoDoSans-Black",
        color: colorTheme.mintCream
    }
})
