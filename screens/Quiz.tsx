import { SafeAreaView,ScrollView, StyleSheet, Text, Image, View, TextInput, Pressable, Alert,ImageBackground,Dimensions } from 'react-native';

import { StatusBar } from 'expo-status-bar';





export default function Quiz({navigation}: {navigation: any}) {

  const exapPreparation =()=>{
    navigation.navigate('Otp')
  }
  const quiz =()=>{
    navigation.navigate('Otp')
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#FFF1E4"/>
      <ScrollView contentContainerStyle={styles.scrollview} >

      <Image  style={styles.banner} source={require('../assets/images/quiz-bg.png')} />
      <Text style={styles.maintitle}>Quiz Room</Text>
      <Image  style={styles.yeloline} source={require('../assets/images/yellow-line.png')} />


        <Pressable style={styles.btn} onPress={exapPreparation}>
          <Text style={styles.btnText}>Explore Quizes</Text>
        </Pressable>
        <Pressable style={styles.btnline} onPress={exapPreparation}>
          <Text style={styles.btnText}>Explore Quizes</Text>
        </Pressable>





      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor:'#0b0b13',

  },
  banner:{
    height:380,
    width:360,
    paddingBottom:28,
    marginBottom:20,
  },
  maintitle:{
    fontFamily:'RecoletaBold',
    color: '#FFF1E4',
    fontSize:27,
    textAlign:'center',
    marginTop:30,
    marginBottom:10,
  },
  yeloline:{
    width:60,
    height:4,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:6,

  },

  btn:{
    backgroundColor:'#787bd1',
    marginTop:60,
    height:64,
    borderRadius:12,
    width:280,
    textAlign:'center',
    marginLeft:'auto',
    marginRight:'auto',
  },
  btnText:{
    color:'#fff',
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    paddingTop:20,
  },
  btnline:{
    marginTop:30,
    height:64,
    borderColor:'#6E7191',
    borderWidth:2,
    borderRadius:12,
    width:280,
    textAlign:'center',
    marginLeft:'auto',
    marginRight:'auto',
  },

});
