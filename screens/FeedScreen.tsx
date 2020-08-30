import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Container from "../components/layouts/Container";

interface IFeedScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    }
}
export default (props: IFeedScreenProps) => {
    return (
        <Container>
            <Text>Feed Screen</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                <Text>
                    search
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Account")}>
                <Text>
                    Account
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("PostForm")}>
                <Text>
                    Post screen
                </Text>
            </TouchableOpacity>

        </Container>
    );
};