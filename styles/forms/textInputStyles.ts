import { StyleSheet, DatePickerAndroid } from 'react-native';
import { primary, highlight, dark } from "../colors";
import { withOrientation } from 'react-navigation';

export default StyleSheet.create({
    textFieldWrapper: {
        marginTop: 20,
        marginBottom: 20
    },
    textField: {
        backgroundColor: "white",
        borderRadius: 20,
        height: 40,
        paddingLeft: 20
    }
})