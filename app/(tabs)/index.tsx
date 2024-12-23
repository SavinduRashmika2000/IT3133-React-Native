import { Image,  StyleSheet,  Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/images/react-logo.png")} style={styles.logo}/>
      <Text style={styles.textstyle}>Hello World!!</Text>
      <Text style={styles.subtext}>My First React Native Cross Platform App</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  logo:{
    width:200,
    height:200,
    borderWidth:2,
    borderStyle:"dotted"
  },
  textstyle:{
    fontFamily:"Times New Roman",
    fontSize: 45,
    color: 'white'
  },
  subtext:{
    fontWeight:500,
    color: 'white'
  }
})
