import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Button, StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import Container from "../components/layouts/Container";
import api from "../utils/api";
import PostList from "../components/posts/PostList";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchHeader from 'react-native-search-header';

import searchStyles from "../styles/stacks/posts/searchStyles";

const { searchFormContainer, searchTextInput, searchIcon } = searchStyles;

interface ISearchScreenProps {
    navigation: {
        navigate: (arg: string) => void;
    };
}
export default (props: ISearchScreenProps) => {
    const [query, setQuery] = useState("");
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [emptyQuery, setEmptyQuery] = useState(false);

    const handleSearch = async () => {
        const token = await SecureStore.getItemAsync("memipedia_secure_token");
        setIsLoading(true);
        setEmptyQuery(false);

        const params = {
            query,
        };

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        api
            .get("memipedia_queries", {
                params,
                headers,
            })
            .then((response) => {
                if (response.data.memipedia_posts.length === 0) {
                    setEmptyQuery(true);
                }
                setPosts(response.data.memipedia_posts);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                alert("Error running query");
            });
    };

    const searchBar = (
        <View style={searchFormContainer}>
            <TextInput
                value={query}
                onChangeText={(val) => setQuery(val)}
                placeholder="Search for a post"
                onSubmitEditing={handleSearch}
                style={searchTextInput}
            />

            <TouchableOpacity style={searchIcon} onPress={handleSearch}>
                <Ionicons name="md-search" color="white" size={30} />
            </TouchableOpacity>
        </View>
    );

    const queryRenderer = () => {
        if (emptyQuery) {
            return (
                <View style={{ paddingRight: 15, paddingLeft: 15 }}>
                    <Text style={{ color: "white" }}>
                        There were no posts matching your search
          </Text>
                </View>
            );
        } else if (posts && posts.length > 0) {
            return (
                <PostList
                    getPosts={handleSearch}
                    isLoading={isLoading}
                    posts={posts}
                    navigate={props.navigation.navigate}
                />
            );
        } else {
            return null;
        }
    };

    // return (
    //     <Container navigate={props.navigation.navigate}>
    //         {searchBar}

    //         {queryRenderer()}
    //     </Container>
    // );
    const searchHeaderRef = React.useRef(null);
    return (
        <View>
            <StatusBar barStyle='light-content' />
            <View />
            <View>
                <Ionicons name="md-search"
                    color="black"
                    size={30}
                    onPress={() => searchHeaderRef.current.show()}
                />

            </View>
            <SearchHeader
                ref={searchHeaderRef}
                placeholder='Search...'
                placeholderColor='darkGrey'
                onEnteringSearch={handleSearch}

                pinnedSuggestions={[`Table`, `stairs`, `drawer`]}
                onClear={() => {
                    console.log(`Clearing input!`);
                }}
                onGetAutocompletions={async (text) => {
                    if (text) {
                        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                            method: `get`
                        });
                        const data = await response.json();
                        return data[1];
                    } else {
                        return [];
                    }
                }}
            />
            <View>
                <Button
                    title='Open Search'
                    color='black'
                    onPress={() => searchHeaderRef.current.show()}
                />
            </View>
            <View>
                <Button
                    title='Clear'
                    color='black'
                    onPress={() => {
                        searchHeaderRef.current.clear();
                    }}
                />
            </View>
            <Container navigate={props.navigation.navigate}>
                {searchBar}

                {queryRenderer()}
            </Container>
        </View>
    )
};