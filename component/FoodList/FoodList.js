import React, { useState } from "react";
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleView } from '../FoodList/Styles';
import FoodItems from "./FoodItems";
const FoodList = ({navigation}) => {
    const [food, setFoods] = useState(
        [
            {
                name: "Cheese",
                url: 'https://7esl.com/wp-content/uploads/2017/12/Untitled-design-13-150x150.png',
                status: 'Openning soon',
                price: 2
            },
            {
                name: "Egg",
                url: 'https://7esl.com/wp-content/uploads/2017/12/Untitled-design-6-1-150x150.png',
                status: 'Openning soon',
                price: 24
            },
            {
                name: "Butter",
                url: 'https://7esl.com/wp-content/uploads/2017/12/Butter-150x150.png',
                status: 'Openning soon',
                price: 243
            },
            {
                name: "Margarine",
                url: 'https://7esl.com/wp-content/uploads/2017/12/Margarine-150x150.png',
                status: 'Openning soon',
                price: 243
            },
            {
                name: "Yogurt",
                url: 'https://7esl.com/wp-content/uploads/2017/12/yogurt-150x150.png',
                status: 'Openning soon',
                price: 243
            },
        ]
    )
    return <ImageBackground style={{ flex: 6}} 
            source = {require('../../asset/food.png')}>
                <View style = {{height:50}}>
                    <Text>Haaloo</Text>
                </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontFamily: 'boid',fontSize:20 }}>FoodList</Text>
        </View>
        <ScrollView>
            {food.map(eachFood => 
                {
                    return <FoodItems food = {eachFood}></FoodItems>
                })}
        </ScrollView>
        <View style = {{height:50,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('FoodList')}>
                <Image source={require('../../asset/fast-food.png')} style = {{height:40,width:40,marginTop:5}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../asset/chat.png')} style = {{height:40,width:40,marginTop:5,marginLeft:50}}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
                <Image source={require('../../asset/settings.png')} style = {{height:40,width:40,marginTop:5,marginLeft:50}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../asset/teamwork.png')} style = {{height:40,width:40,marginTop:5,marginLeft:50}}></Image>
            </TouchableOpacity>
        </View>
    </ImageBackground>
}
export default FoodList