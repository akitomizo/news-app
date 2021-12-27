import { StatusBar } from 'expo-status-bar';
import { useState, useEffetct, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
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

export default function ArticleScreen() {
    return (
        <SafeAreaView>
            <Text>article Screen test</Text>
        </SafeAreaView>
    );
}
