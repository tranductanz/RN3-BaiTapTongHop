import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {
    Thor,
    DrStrange,
    Wanda,
    Natasha,
    Flash,
    Yasuo,
    CaptainMarvel,
    CaptainAmerica,
    SuperWoman
} from './assets/img';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import UserItem from './UserItem';
import FriendItem from './FriendItem';
export class SocialNetwork extends Component {
    ListSearchingAccount = [
        {
            id: 1,
            name: 'DrStrange',
            avatar: DrStrange,
        },
        {
            id: 2,
            name: 'Thor',
            avatar: Thor,
        },
        {
            id: 3,
            name: 'The Flash',
            avatar: Flash,
        },
        {
            id: 4,
            name: 'SuperWoman',
            avatar: SuperWoman,
        },
    ]
    ListUserAccount = [

        {
            id: 5,
            name: 'Wanda Maximoff',
            avatar: Wanda,
        },
        {
            id: 6,
            name: 'Captain America',
            avatar: CaptainAmerica,
        },
        {
            id: 7,
            name: 'Captain Marvel',
            avatar: CaptainMarvel,
        },
        {
            id: 8,
            name: 'Natasha',
            avatar: Natasha,
        },
        {
            id: 9,
            name: 'Solo Daxua Không ??!',
            avatar: Yasuo,
        }
    ]

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchingContent}>
                    <EntypoIcon style={styles.icon} name="back-in-time" />
                    <Text style={styles.searchText}> Danh sách tìm kiếm gần đây </Text>
                </View>
                <FlatList
                    style={styles.userSearched}
                    data={this.ListSearchingAccount}
                    renderItem={(item) => {
                        return <UserItem data={item} />
                    }}
                    keyExtractor={(item, index) => {
                        return `${item.id}_${index}`
                    }}
                    horizontal={true}
                    contentContainerStyle={
                        styles.scrollContent,
                        {
                            justifyContent: 'space-evenly',
                            flex: 1,
                        }
                    }
                />
                <View style={[styles.searchingContent, styles.findText]}>
                    <EntypoIcon style={styles.icon} name="back-in-time" />
                    <Text style={styles.searchText}> Gợi ý kết bạn </Text>
                </View>
                <FlatList
                    data={this.ListUserAccount}
                    renderItem={(item) => {
                        return <FriendItem data={item} />
                    }}
                    keyExtractor={(item, index) => {
                        return `${item.id}_${index}`
                    }}
                    contentContainerStyle={
                        styles.scrollContent,
                        {
                            justifyContent: 'space-evenly',
                            flex: 1,
                        }
                    }
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    searchText: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5,
    },
    findText: {
        marginTop: 20,
    },
    searchingContent: {
        flexDirection: 'row',
    },
    icon: {
        fontSize: 20,
        lineHeight: 25,
    },
    userSearched: {
        flexGrow: 0,
    },



})

export default SocialNetwork
