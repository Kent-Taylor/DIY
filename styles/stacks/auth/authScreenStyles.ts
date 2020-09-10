import { StyleSheet, DatePickerAndroid } from 'react-native';
import { primary, highlight, dark } from "../../colors";
import { withOrientation } from 'react-navigation';
import Constants from "expo-constants"

export default StyleSheet.create({
    container: {
        backgroundColor: dark,
        padding: 25,
        height: "100%",
        paddingTop: Constants.statusBarHeight


    }
})