import { lightGrey, primary } from './../../colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: "100%",

    },
    formGrid: {
        // flexDirection: "row",
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
        borderRadius: 12,
        borderColor: "#D08686",
        borderBottomWidth: 1,
        padding: 10,
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