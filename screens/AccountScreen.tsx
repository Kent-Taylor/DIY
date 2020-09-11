import React, { useContext } from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as SecureStore from "expo-secure-store";

import CurrentUserContext from "../contexts/CurrentUserContext";
import Button from "../components/helpers/Button";

interface IAccountScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    };
}

export default (props: IAccountScreenProps) => {
    const { setCurrentUser } = useContext(CurrentUserContext);
    const handleSignOut = async () => {
        await SecureStore.deleteItemAsync("memipedia_secure_token");
        setCurrentUser(null);
        props.navigation.navigate("Auth");

    }
    return (

        <View style={{ padding: 15, height: "100%" }}>
            <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="shield-account-outline" color="black" size={100} />
                <View style={{ justifyContent: "space-evenly" }}>
                    <Text style={{ color: "black" }}>userName: TODO: render email here</Text>
                    <Text style={{ color: "black" }}>Email: TODO: render email here</Text>
                </View>
            </View>
            <Button onPress={handleSignOut} text="Sign Out" />
        </View>

    )
}