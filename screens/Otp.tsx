import { SafeAreaView,ScrollView, StyleSheet, Text, Image, View, TextInput, Pressable, Alert,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';




export default function Otp({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Otp</Text>
      <Pressable style={styles.btn}  onPress={() => navigation.navigate('SelectPurpose')}>
        <Text style={styles.btnText}>Select Purpose</Text>
      </Pressable>
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

  },
  btn:{
    backgroundColor:'#787bd1',
    marginTop:30,
    height:50,
    borderRadius:12,
    width:280,
  },
  btnText:{
      color:'#fff',
      textAlign:'center',
      fontSize:16,
      fontWeight:'bold',
      paddingTop:15
  },

});
