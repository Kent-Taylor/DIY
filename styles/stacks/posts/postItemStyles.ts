import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    itemWrapper: {
        marginBottom: 15,
        backgroundColor: "#D08686"
    },
    imageWrapper: {
        borderBottomColor: "white",
    },
    contentWrapper: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    contentText: {
        color: "white",
        fontSize: RFValue(14, 680)
    },
    postHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nameText: {
        color: "white",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "white",
        padding: 7,
        margin: 10,
        fontSize: RFValue(16, 680),
        marginBottom: 5,
        fontWeight: "600",
    },
    loading: {
        marginTop: 24,
    },

});