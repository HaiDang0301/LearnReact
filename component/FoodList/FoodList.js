import React, { useState } from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import { StyleView } from '../FoodList/Styles';
import FoodItems from "./FoodItems";
const FoodList = (props) => {
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontFamily: 'boid',fontSize:20 }}>FoodList</Text>
        </View>
        <ScrollView>
            {food.map(eachFood => 
                {
                    return <FoodItems food = {eachFood}></FoodItems>
                })}
        </ScrollView>
    </ImageBackground>
}
export default FoodList