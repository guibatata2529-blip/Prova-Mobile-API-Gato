import axios from 'axios';
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";

export const Home = () => {
    const [value, setValue] = useState("")
      const requestApi = async () => {
        await axios.get("https://api.thecatapi.com/v1/images/search").then((resp) => {
            setValue(resp.data)
        })
    }
    useEffect(() => {
        requestApi()
    }, [])
    
    return (
        <View>
            <Button
                onPress={requestApi}
                title="Get new cat"
            />
           
    
            <Image 
            style={style.styleImage}
            source={{
                uri: String(value[0]?.url ),
            }}
            />
                
             
        </View>
        
    )
}


const style = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleImage: {
    height: 200,
    width: 200
  },
})


