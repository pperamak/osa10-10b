import { Link } from "react-router-native";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles= StyleSheet.create({
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  text: {
    color: '#ffffff',
    fontWeight: 700    
  }
})

const Tab=({ link, text }) =>{
  return (
    <View style={styles.tab}>
      <Link to={link}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </View>
  )
}

export default Tab