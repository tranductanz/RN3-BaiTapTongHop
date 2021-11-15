import axios from 'axios';
import { result } from 'lodash';
import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import BackGroundView from './components/BackGroundView/BackGroundView';

export default class ProductShoes extends Component {

    state = {
        listCategory: [],
        listProduct: [],
    };

    componentDidMount() {
        const getAllCategory = axios({
            url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
            method: 'GET',
        })
        const getAllProduct = axios({
            url: 'http://svcy3.myclass.vn/api/Product',
            method: 'GET',
        })
        //! call api động loạt
        Promise.all([getAllCategory, getAllProduct]).then(([resultCategory, resultProduct]) => {
            const listCategory = resultCategory.data.content;
            const listProduct = resultProduct.data.content;
            this.setState({
                listCategory: listCategory,
                listProduct: listProduct
            })
        })
            .catch(err => console.log(err))
    }

    renderListProduct = ({ item, index }) => {
        const isRightItem = index % 2 !== 0;
        return <View style={[styles.cardProduct, isRightItem && { height: 300 },
        !isRightItem && { marginTop: -20 * index }, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8E8E8' }]}>
            <View>
                <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }} />
                <Text style={{ fontSize: 15, fontWeight: '800' }}>{item.name}</Text>
                <Text style={{ fontWeight: '600' }} >{item.price} $</Text>
                {item.description.length > 50 ? <Text style={{ fontSize: 10 }}>{item.description.slice(0, 100)}<TouchableOpacity><Text style={{ color: 'blue' }}>More...</Text></TouchableOpacity></Text> : <Text style={{ fontSize: 10 }}>{item.description}</Text>}
            </View>
        </View>
    }
    render() {
        const { listCategory, listProduct } = this.state;
        return (
            <BackGroundView>
                <View>
                    <FlatList
                        style={styles.category}
                        horizontal
                        //! tắt thanh scroll ngang
                        showsHorizontalScrollIndicator={false}
                        data={listCategory}
                        renderItem={({ item }) => {
                            return <TouchableOpacity style={styles.categoryButton} >
                                <Text style={styles.categoryTitle}>{item.category}</Text>
                            </TouchableOpacity>
                        }}
                    />
                    <FlatList
                        data={listProduct}
                        renderItem={this.renderListProduct}
                        // chia cột
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </BackGroundView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,

    },
    header: {
        height: 50,
        // backgroundColor: '#bfb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    category: {
        // height: 50,
        // backgroundColor: "#bfb",
        flexGrow: 0,
        marginBottom: 10,
    },
    categoryButton: {
        paddingVertical: 10,
        marginRight: 20,
        flexGrow: 0,
    },
    categoryTitle: {
        marginLeft: 20,
        color: '#1E90FF',
        fontWeight: 'bold',
        // in đậm chữ cái đầu
        textTransform: 'capitalize'
    },
    cardProduct: {
        marign: 50,
        marginTop: 50,
        width: '45%',
        height: 300,
        backgroundColor: '#fff',
        marginVertical: 5,
        marginBottom: 30,
        borderRadius: 10,
        // marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
});