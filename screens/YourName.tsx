import { SafeAreaView,ScrollView, StyleSheet, Text, Image, View, TextInput, Pressable, Alert,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';




export default function YourName({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Your Name</Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily:'RecoletaBold',
    color: '#000000',
    fontSize:27,
    textAlign:'center',
    marginTop:120,
    marginBottom:10,
  },


});
