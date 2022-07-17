import React from "react";
import { ImageBackground, View ,Text , Image, TextInput, TouchableOpacity, Alert} from "react-native";
import {StyleView} from '../Login/Styles';
const Register = ({navigation}) =>
{
    return<ImageBackground source={require('../../asset/bg.png')} 
    style = {{
        flex:4
    }}>
        <View style = {StyleView.viewheader}>
            <Text style = {StyleView.text}>Allready have an Account ?</Text>
            <Image source = {require('../../asset/laptop.png')} style = {StyleView.image}></Image>
        </View>
        <View style = {StyleView.viewcenter}>
                <Text style = {StyleView.textcenter}>Email:</Text>
                <TextInput placeholder="example@gmail.com" style = {StyleView.textinput}></TextInput>
                <Text style = {StyleView.textcenter}>PassWord:</Text>
                <TextInput placeholder="Enter your Password" style = {StyleView.textinput}></TextInput>
                <Text style = {StyleView.textcenter}>Retype PassWord:</Text>
                <TextInput placeholder="R-Enter your Password" style = {StyleView.textinput}></TextInput>
                <View style = {StyleView.viewregister}>
                <TouchableOpacity style = {StyleView.touch} onPress={()=>{alert('Sign up Successful account !');navigation.navigate('Login')}}>
                    <Text style = {StyleView.texttouch}>Register</Text>
                </TouchableOpacity>
                </View>
            </View>
         <View style = {{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            }}>
                <Text style = {StyleView.textend}>------------Use other mothods ?--------------</Text>
                <View style = {{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <Image source={require('../../asset/fb.png')} style = {StyleView.imagemethods}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../asset/google.png')} style = {StyleView.imagemethods}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../asset/telegram.png')} style = {StyleView.imagemethods}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        
    </ImageBackground>
}
export default Register;