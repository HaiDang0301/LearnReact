import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { StyleView } from '../FoodList/Styles';
const FoodItems = (props) => {
    let{name,url,status,price} = props.food
    debugger
    return <ImageBackground style={{ flex: 6}}>
        <View style={StyleView.viewfood}>
            <Image
                style={StyleView.imagefood}
                source={{ uri: url }}>
            </Image>
            <View style={{ flexDirection: 'column', marginTop: 20, marginLeft: 20}}>
                <Text style={StyleView.textfood}>{name}</Text>
                <Text style={StyleView.line}></Text>
                <View style={{ flexDirection: 'row' , marginTop:5}}>
                    <Text style={StyleView.textfood}>Status:</Text>
                    <Text style={[StyleView.textfood, { color: 'red' }]}>{status}</Text>
                </View>
                <Text style={[StyleView.textfood,{marginTop:5}]}>Price: {price} $</Text>
                <Text style={[StyleView.textfood,{marginTop:5}]}>Website: https://7esl.com/food-vocabulary</Text>
                <View style = {{flexDirection:'row',marginTop:5}}>
                    <Image source={require('../../asset/fb.png')} style={{ width:20,height:20,}}></Image>
                    <Image source={require('../../asset/google.png')} style={StyleView.icoin}></Image>
                    <Image source={require('../../asset/telegram.png')} style={StyleView.icoin}></Image>
                </View>
            </View>
        </View>
    </ImageBackground>
}
export default FoodItems