import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useContext} from 'react'
import Header from '../components/Header';
import Item from '../components/Item';
import {AppContext} from '../constants/context';

const Cart = ({navigation}) => {
    const context = useContext(AppContext);
  return (
    <View>
        <Header title="Cart"/>
       <FlatList
          data={context.List}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item}) => (
            <Item item={item.item} quantity={item.quantity} />
          )}
        />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})