// --------------------------------------------------------------------
// PREREQUISITES
// --------------------------------------------------------------------
import { Dimensions,StyleSheet } from 'react-native';
import colorTheme from '../config/colorTheme';

export const screenSize = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

export const globalStyles = StyleSheet.create({
    // ----------- dimensions ----------------------------
    dummyView: {
        height: 100,
        width: "100%",
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
    // bgcolor : {
        backgroundColor: colorTheme.whiteSmoke
    // }
})
