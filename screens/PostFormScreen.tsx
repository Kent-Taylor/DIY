import React, { useState } from "react";
import { View, TextInput } from "react-native";
import PostImagePicker from "../components/posts/PostImagePicker";
import Button from "../components/helpers/Button";

export default () => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    return (
        <View style={{ height: "100%" }}>
            <TextInput
                placeholder="Post Name"
                value={name}
                onChangeText={(val) => setName(val)}
                autoCapitalize="none"
                spellCheck={false}
            />

            <TextInput
                placeholder="Post details"
                value={content}
                onChangeText={(val) => setContent(val)}
                style={{ borderWidth: 2, borderColor: "black" }}
                multiline
            />

            <View style={{ marginTop: 40, height: 100 }}>
                <PostImagePicker />
            </View>

            <Button
                text="Submit Post"
                onPress={() => console.log("Submitting...")}
            />
        </View>
    )
}