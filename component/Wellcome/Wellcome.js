import React from 'react';
import { Text, View , Image ,ImageBackground , TouchableOpacity,Icon } from 'react-native';
import { styleview } from './Styles';
import { styleimage } from './Styles';
import { styletext } from './Styles';
import { stylebutton } from './Styles';
import { styleview1 } from './Styles';
import { styletextcolor } from './Styles';
const Main = ({navigation}) =>
{
    return <ImageBackground source={require('../../asset/background.png')}
        style = {{
            flex:9
        }}>
            <View style = {styleview.view}>
                <Image source={require('../../asset/fire.png')}
                    style={{
                        width: 40,
                        height: 40,
                        marginStart: 10
                    }}
                ></Image>
                <Text style={{
                    color: 'green',
                    fontSize: 15,
                    marginLeft: 10
                }}>YOURCOMPANY.CO
                </Text>
                <View style={{
                    flex: 1
                }}></View>
                <Image source={require('../../asset/ask.png')}
                    style={styleimage.image}
                ></Image>
            </View>
            <View style = {{
                flex:3,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style = {styletext.text
                }>WELCOME TO YOURCOMPANY.CO</Text>
                <Text style = {styletext.text}
                    >Please write your name</Text>
            </View>
            <View style = {{
                flex:3,
            }}>
                <TouchableOpacity style = {stylebutton.button}>
                    
                    <Text style = {{
                        fontSize:20,
                        color:'black'
                    }}>Login For Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {stylebutton.button}>
                    <Text style = {{
                        fontSize:20,
                        color:'black'
                    }}>Login For Zalo</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {stylebutton.button}>
                    <Text style = {{
                        fontSize:20,
                        color:'black'
                    }}>Login For Google</Text>
                </TouchableOpacity>
            </View>
            <View style = {{
                flex:1
            }}>
                <TouchableOpacity style = {stylebutton.button} onPress={()=>navigation.navigate('Login')}>
                    <Text style = {{
                        fontSize:20,
                        color:'black'
                    }}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style = {styleview1.view1}><Text style = {styletextcolor.color}>Thanks You Good By So Much</Text></View>
        </ImageBackground>
}
export default Main;