import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import Tab from './Tab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    height: 70,
    backgroundColor: '#24292e'
    // ...
  },
  scrollView: {
    flexDirection: 'row'
  }
  /*
  text: {
    color: '#ffffff'
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 5
  }
    */
  // ...
});


const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Tab link={'/'} text={'Repositories'}/><Tab link={'/signin'} text={'Sign in'}/>
    </ScrollView>
    </View>
    )
};

export default AppBar;