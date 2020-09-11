import { lightGrey, primary } from './../../colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: "100%",

    },
    formGrid: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 42,
        padding: 20,
    },
    textInputWrapper: {
        width: "100%",
    },
    inputElement: {
        borderColor: "#D08686",
        borderLeftWidth: 1,
        padding: 10,
        margin: 7
    },
    textAreaElement: {
        height: 90,
        width: "100%"

    },
    buttonWrapper: {
        paddingRight: 15,
        paddingLeft: 15,
    }
})