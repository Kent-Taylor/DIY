import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as SecureStore from "expo-secure-store";

import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Button from "../components/helpers/Button";
import CurrentUserProvider from "../providers/CurrentUserProvider";

interface IAccountScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    };
    children: any;
}

export default (props: IAccountScreenProps) => {
    const setCurrentUser = useContext(CurrentUserContext)

    // const currentUser = useContext(CurrentUserContext)
    // const getUser = useContext(CurrentUserContext)

    // const stateValues = {
    //     currentUser,
    //     setCurrentUser,
    //     getUser,
    // };

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
                    {/* <Text style={{ color: "black" }}>Email: {JSON.stringify(currentUser)}</Text>
                    <Text style={{ color: "black" }}>User ID: {JSON.stringify(currentUser.id)}</Text> */}

                </View>
            </View>
            <Button onPress={handleSignOut} text="Sign Out" />
        </View>

    )
}