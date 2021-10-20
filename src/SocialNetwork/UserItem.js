import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Wanda } from './assets/img'
export default class UserItem extends Component {
    render() {
        const { avatar, name } = this.props.data.item;
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.avatarUser} source={avatar} />
                    <Text style={styles.nameUser}>{name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarUser: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
    },
    nameUser: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '700',
    }
})
