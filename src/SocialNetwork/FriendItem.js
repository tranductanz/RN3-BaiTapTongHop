import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { DrStrange } from './assets/img'
export default class FriendItem extends Component {
    render() {
        const { avatar, name } = this.props.data.item
        return (
            <View style={styles.requestFriendContent}>
                <View style={styles.leftInnerContent}>
                    <TouchableOpacity>
                        <Image style={styles.friendAvatar} source={avatar} />
                    </TouchableOpacity>
                    <View style={styles.textFriend}>
                        <Text style={styles.textContent}>{name}</Text>
                        <Text>15 bạn chung</Text>
                    </View>
                </View>
                <View style={styles.rightInnerContent}>
                    <TouchableOpacity style={styles.btnAdd}>
                        <Text style={{ fontWeight: '700' }}>Kết bạn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    requestFriendContent: {
        flexDirection: 'row',
        backgroundColor: 'rgba(139, 139, 139, 0.5)',
        flexGrow: 0,
        borderRadius: 10,
        marginHorizontal: 10,
        margin: 10,
        marginBottom: 15,
        marginTop: 15,
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    leftInnerContent: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
    },
    rightInnerContent: {

    },
    friendAvatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        marginTop: 10,
    },
    btnAdd: {
        backgroundColor: 'yellow',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginTop: 25,
        marginRight: 10,
        shadowColor: "#ffee",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
    },
    textFriend: {
        marginTop: 30,
        marginLeft: 10,
    },
    textContent: {
        fontWeight: '700',
        fontSize: 15,
    }
})