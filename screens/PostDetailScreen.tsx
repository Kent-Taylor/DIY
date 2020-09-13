
import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import PostItem from "../components/posts/PostItem";
import Container from "../components/layouts/Container";
import AutoHeightImage from "react-native-auto-height-image";

import postItemStyles from "../styles/stacks/posts/postItemStyles";

const { contentWrapper, contentText } = postItemStyles;

interface IPostDetailScreenProps {
    navigation: {
        navigate: any;
        state: {
            params: {
                post: {
                    id: number;
                    name: string;
                    content: string;
                    post_image_url: string;
                };
            };
        };
    };
}

export default (props: IPostDetailScreenProps) => {
    const { post } = props.navigation.state.params;
    return (
        <Container navigate={props.navigation.navigate}>
            <ScrollView>
                <View style={{ marginTop: 10 }}>
                    {/* <PostItem post={post} /> */}
                    <View >
                        <Text style={postItemStyles.nameText}>{post.name}</Text>

                        <AutoHeightImage
                            width={Dimensions.get("window").width}
                            source={{ uri: post.post_image_url }}
                            style={{ marginBottom: 10 }}
                        />
                        <Text style={{ padding: 10, color: "white" }}>{post.content}</Text>

                    </View>
                </View>
            </ScrollView>
        </Container>
    );
};