import React from "react";
import { ImageBackground, View ,Text , Image, TextInput, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {StyleView} from './Styles';
const Login = ({navigation}) =>
{
    return<ImageBackground source={require('../../asset/bg.png')} 
    style = {{
        flex:4
    }}>
        <View style = {StyleView.viewheader}>
            <Text style = {StyleView.text}>Allready have an Account ?</Text>
            <Image source = {require('../../asset/laptop.png')} style = {StyleView.image}></Image>
        </View>
        <View>
                <Text style = {StyleView.textcenter}>Email:</Text>
                <TextInput placeholder="example@gmail.com" style = {StyleView.textinput}></TextInput>
                <Text style = {StyleView.textcenter}>PassWord:</Text>
                <TextInput placeholder="Enter your Password" style = {StyleView.textinput}></TextInput>
        </View>
         <View style = {{
            justifyContent:'center',
            alignItems:'center',
            flex:1
            }}>
                <TouchableOpacity style = {StyleView.touch} onPress = {()=>navigation.navigate('Setting')}>
                    <Text style = {StyleView.texttouch}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <Text style = {{
                        marginTop:10,
                        color:'red'
                    }}>New user ? Resiter now</Text>
                    </TouchableOpacity>
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
export default Login;