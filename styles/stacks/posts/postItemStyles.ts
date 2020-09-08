import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    itemWrapper: {
        marginBottom: 20,
    },
    imageWrapper: {
        marginBottom: 15,
        borderBottomColor: "white",
    },
    contentWrapper: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    postHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nameText: {
        color: "white",
        fontSize: RFValue(20, 680),
        fontWeight: "900",
    },
    loading: {
        marginTop: 24,
    },
});