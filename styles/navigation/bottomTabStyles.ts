import { StyleSheet, DatePickerAndroid } from 'react-native';
import { primary, highlight, dark } from "../colors";
import { withOrientation } from 'react-navigation';

export default StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        zIndex: 1000,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 80,
        backgroundColor: dark,
        paddingBottom: 15
    },
})