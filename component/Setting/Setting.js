import React ,{ useState } from "react";
import { View , Text ,Image, TouchableOpacity, Switch} from "react-native";
import { StyleView } from "../Setting/Styles";
const Setting = ({navigation})=>
{   
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return <View style = {{
        flex:13
    }}>
        <View style = {StyleView.viewone}>
            <Text style = {StyleView.text}>Setting</Text>
        </View>
        <View style = {{flex:3}}>
            <View style = {{backgroundColor:'#DDDDDD',flex:1}}>
                 <Text style = {{color:'red',marginLeft:10,marginTop:15}}>Common</Text>
            </View>
            <View style = {{flex:2}}>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/language.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Language</Text>
                     <View style = {{flex:1}}></View>
                     <Text style = {[StyleView.texttwo,{color:'#BBBBBB'},{marginRight:20}]}>English</Text>
                     <TouchableOpacity><Image source={require('../../asset/right-arrow.png')} style={StyleView.image}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/growth.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Enivoment</Text>
                     <View style = {{flex:1}}></View>
                     <Text style = {[StyleView.texttwo,{color:'#BBBBBB'},{marginRight:20}]}>Production</Text>
                     <TouchableOpacity><Image source={require('../../asset/right-arrow.png')} style={StyleView.image}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style = {{flex:4}}>
        <View style = {{backgroundColor:'#DDDDDD',flex:1}}>
                 <Text style = {{color:'red',marginLeft:10,marginTop:15}}>Account</Text>
            </View>
            <View style = {{flex:3}}>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/telephone.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Telephone</Text>
                     <View style = {{flex:1}}></View>
                     <TouchableOpacity><Image source={require('../../asset/right-arrow.png')} style={StyleView.image}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/mail.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Email</Text>
                     <View style = {{flex:1}}></View>
                     <TouchableOpacity><Image source={require('../../asset/right-arrow.png')} style={StyleView.image}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/logout.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Sign Out</Text>
                     <View style = {{flex:1}}></View>
                     <TouchableOpacity><Image source={require('../../asset/right-arrow.png')} style={StyleView.image}>
                        </Image>
                    </TouchableOpacity>
                </View>
                </View>
        </View>
        <View style = {{flex:4}}>
        <View style = {{backgroundColor:'#DDDDDD',flex:1}}>
                 <Text style = {{color:'red',marginLeft:10,marginTop:15}}>Security</Text>
            </View>
            <View style = {{flex:3}}>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/checklist.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Look app the background</Text>
                     <View style = {{flex:1}}></View>
                    <Switch 
                    trackColor={{fales:'black',true:'blue'}}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}></Switch>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/lock.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Use Password</Text>
                     <View style = {{flex:1}}></View>
                     <Switch 
                    trackColor={{fales:'black',true:'blue'}}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}></Switch>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/fingerprint.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Use Fingerprint</Text>
                     <View style = {{flex:1}}></View>
                     <Switch 
                    trackColor={{fales:'black',true:'blue'}}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}></Switch>
                </View>
                </View>
        </View>
        <View style = {{flex:3,marginBottom:15}}>
        <View style = {{backgroundColor:'#DDDDDD',flex:1}}>
                 <Text style = {{color:'red',marginLeft:10,marginTop:15}}>Misc</Text>
            </View>
        <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/language.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Turn of Service</Text>
                     <View style = {{flex:1}}></View>
                     <TouchableOpacity><Image source={require('../../asset/right-arrow.png')} style={StyleView.image}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Image source={require('../../asset/language.png')} style
                     = {StyleView.image}></Image>
                     <Text style = {StyleView.texttwo}>Open soucer listent</Text>
                     <View style = {{flex:1}}></View>
                     <TouchableOpacity><Image source={require('../../asset/right-arrow.png')} style={StyleView.image}>
                        </Image>
                    </TouchableOpacity>    
                </View>
        </View>
    </View>
}
export default Setting;