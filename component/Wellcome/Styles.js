import { StyleSheet } from "react-native";
const styleview = StyleSheet.create({
    view:
    {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex:1
    }
});
const styleimage = StyleSheet.create(
    {
        image:
        {
                width: 30,
                height: 30,
                tintColor: 'black',
                marginEnd: 10
        }
    });
const styletext = StyleSheet.create(
    {
        text:
        {
            fontSize:20,
            color:'blue',
            marginBottom:10
        }
    });
const stylebutton = StyleSheet.create(
    {
        button:
        {
            height:50,
                    borderWidth:2,
                    borderColor:'white',
                    borderRadius:5,
                    marginHorizontal:10,
                    marginVertical:10,
                    justifyContent:'center',
                    alignItems:'center'
        }
    }
);
const styleview1 = StyleSheet.create(
    {
        view1:
        {
            justifyContent:'center',
            alignItems:'center'
        }
    }
)
const styletextcolor = StyleSheet.create(
    {
        color:
        {
            fontSize: 20,
            color: 'orange'
        }
    }
)
export {styleview}
export{styleimage}
export{styletext}
export{stylebutton}
export{styleview1}
export{styletextcolor}