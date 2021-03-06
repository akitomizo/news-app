import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },

    leftContainer: {
        width: 100,
        // borderColor: 'red',
        // borderWidth: 1,
    },

    rightContainer: {
        flex: 1,
        // borderColor: 'blue',
        // borderWidth: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    tinyLogo: {
        height: 99,
    },

    text: {
        fontSize: 16,
    },

    subText: {
        fontSize: 12,
        color: 'gray',
    },
});

const ListItem = ({ imageUrl, author, title, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View style={styles.leftContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: imageUrl,
                    }}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.subText}>{author}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;
