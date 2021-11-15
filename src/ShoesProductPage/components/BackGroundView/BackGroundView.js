import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

export default class BackGroundView extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={StyleSheet.absoluteFill}>
                    <View style={styles.topContent} />
                    <View style={styles.bottomContent}>
                        <View style={styles.insideBottomContent} />
                    </View>
                </View>
                <View>
                    {this.props.children}
                </View>
            </SafeAreaView>
        )
    }
}

// #ffdbd9
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    topContent: {
        flex: 1,
        borderBottomLeftRadius: 150,
        backgroundColor: '#ffdbd9'
    },
    bottomContent: {
        flex: 2,
        // backgroundColor: 'yellow'
    },
    insideBottomContent: {
        flex: 1,
        backgroundColor: '#bdfb',
        borderTopRightRadius: 150,
    }
})