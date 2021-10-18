import React, { Component, Fragment } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import Angry from './img/angry.png'
import Care from './img/care.png'
import Haha from './img/haha.png'
import Like from './img/like.png'
import Love from './img/love.png'
import Sad from './img/sad.png'

export default class BaiTapEmoji extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageIcon: Haha,
            isPress: false,
            feeling: ''
        }
    }

    PressedButton = (Emoji) => {
        this.setState({
            imageIcon: Emoji,
            isPress: true,
        })
        switch (Emoji) {
            case 1: {
                this.setState({
                    feeling: 'Angry',
                })
                break;
            }
            case 2: {
                this.setState({
                    feeling: 'Care',
                })
                break;
            }
            case 3: {
                this.setState({
                    feeling: 'Haha',
                })
                break;
            }
            case 4: {
                this.setState({
                    feeling: 'Like',
                })
                break;
            }
            case 5: {
                this.setState({
                    feeling: 'Love',
                })
                break;
            }
            case 6: {
                this.setState({
                    feeling: 'Sad',
                })
                break;
            }
        }
    }

    render() {
        return (

            <View style={styles.container}>
                {this.state.isPress ?
                    <Fragment>
                        <Text style={[styles.text, styles.textResult]}>You {this.state.feeling}</Text>
                        <Image source={this.state.imageIcon} style={{ width: 200, height: 200 }} />
                    </Fragment>

                    : null}

                <View style={styles.icon}>
                    <TouchableOpacity
                        onPress={() => this.PressedButton(Angry)}
                        style={styles.icon}>
                        <Image
                            style={styles.iconEmoji}
                            source={Angry} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.PressedButton(Care)}
                        style={styles.icon}>
                        <Image style={styles.iconEmoji} source={Care} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.PressedButton(Haha)}
                        style={styles.icon}>
                        <Image style={styles.iconEmoji} source={Haha} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.PressedButton(Like)}
                        style={styles.icon}>
                        <Image style={styles.iconEmoji} source={Like} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.PressedButton(Love)}
                        style={styles.icon}>
                        <Image style={styles.iconEmoji} source={Love} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.PressedButton(Sad)}
                        style={styles.icon}>
                        <Image style={styles.iconEmoji} source={Sad} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>How do you feel today ?</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    iconEmoji: {
        width: 50,
        height: 50,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingVertical: 50,
        paddingHorizontal: 5,
    },
    text: {
        fontWeight: '700',
        fontSize: 30,
    },
    textResult: {
        color: 'red',
    }
})