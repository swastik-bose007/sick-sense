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
        marginTop: scale.scale12
    },
    dim1: {
        marginTop: scale.scale7
    },
    dim2: {
        marginTop: 5
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
    }
})
