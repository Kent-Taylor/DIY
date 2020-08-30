import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

interface IFeedScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    }
}
export default (props: IFeedScreenProps) => {
    return (
        <View>
            <Text>Feed Screen</Text>

            <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
                <Text>
                    search
                </Text>
            </TouchableOpacity>
        </View>
    );
};