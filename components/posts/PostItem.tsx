import React from "react";
import { View, Text, Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import TextTruncate from 'react-native-text-truncate';

import postItemStyles from "../../styles/stacks/posts/postItemStyles";

interface IPostItemProps {
    post: {
        id: number;
        name: string;
        post_image_url: string;
        content: string;
    };
}

export default (props: IPostItemProps) => {
    const { name, post_image_url, content } = props.post;

    const img = () => {
        return (
            // @ts-ignore
            <AutoHeightImage
                width={Dimensions.get("window").width}
                source={{ uri: post_image_url }}
            />
        );
    };

    const renderExpandor = () => {
        return (<Text style={postItemStyles.textTruncateStyle}>
            {'Read More'}
        </Text>);
    }

    const renderCollapsar = () => {
        return (<Text>
            {'Read Less'}
        </Text>);
    }
    return (
        <View style={postItemStyles.itemWrapper}>

            <View style={[postItemStyles.contentWrapper, postItemStyles.postHeading]}>
                <Text style={postItemStyles.nameText}>{name}</Text>
                {/* <Text style={{color: "blue"}}>{content}</Text> */}
                <TextTruncate
                    numberOfLines={3}
                    renderExpandor={renderExpandor}
                    renderCollapsar={renderCollapsar}
                    style={{ color: "white" }}
                >
                    {content}
                </TextTruncate>
            </View>
            <View style={postItemStyles.imageWrapper}>{img()}</View>
        </View>
    );
};