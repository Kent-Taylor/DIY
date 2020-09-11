import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    itemWrapper: {
        marginBottom: 15,
        backgroundColor: "#D08686",
        borderLeftWidth: 8,
        borderColor: "white",
        borderRadius: 5
    },
    imageWrapper: {
        borderWidth: 1,
        borderColor: "white",
        marginTop: 7,
    },
    contentWrapper: {
        paddingLeft: 15,
        paddingRight: 15,

    },
    contentText: {
        color: "white",
        fontSize: RFValue(12, 680),
        marginBottom: 30
    },
    postHeading: {

        justifyContent: "space-between",

    },
    nameText: {
        color: "white",
        borderLeftWidth: 1,
        borderColor: "white",
        padding: 7,
        margin: 10,
        fontSize: RFValue(16, 680),
        marginBottom: 5,
        fontWeight: "700",
    },
    loading: {
        marginTop: 24,
    },
    textTruncateStyle: {
        color: "pink",
        margin: 10,
    }

});