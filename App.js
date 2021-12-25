import { StatusBar } from 'expo-status-bar';
import { useState, useEffetct, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
});

export default function App() {
    const [articles, setArticles] = useState();

    const fetchArticle = async function getUser() {
        try {
            const response = await axios.get(URL);
            // console.log(response);
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // alert('aaa');
        // alert(Constants.manifest.extra.newsApiKey);
        fetchArticle();
        // const timer = setTimeout(() => {
        //     setArticles(dummyArticles);
        // }, 2000);
        // return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={articles}
                renderItem={({ item, index }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        author={item.author}
                        title={item.title}
                        key={index}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            {}
            {/* <ListItem author={'sampleAuthor'} title={'textTest'} /> */}
        </SafeAreaView>
    );
}
