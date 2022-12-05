import { SafeAreaView,ScrollView, StyleSheet, Text, Image, View, TextInput, Pressable, Alert,ImageBackground } from 'react-native';





export default function Home({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollview} >
    <ImageBackground source={require('../assets/images/main-bg.png')} style={styles.bgimage}> 
        <Text style={styles.title}>Hi Maalty</Text>
        <Text style={styles.subtitle}>Let us help you to learn more efficiently</Text>
        <Image  style={styles.yeloline} source={require('../assets/images/yellow-line.png')} />
        
    </ImageBackground>

    

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
  bgimage:{
    paddingTop:20,
    paddingBottom:28,
  },
  title:{
    fontFamily:'RecoletaBold',
    color: '#FFF1E4',
    fontSize:24,
    textAlign:'center',
    marginTop:30,
    marginBottom:10,
  },
  subtitle:{
    fontSize: 14,
    color:'#FFF1E4',
    textAlign:'center',
    fontFamily:'PoppinsRegular',
  },
  yeloline:{
    width:60,
    height:4,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:6,

  },
  otpimg:{
    marginLeft:'auto',
    marginRight:'auto',
  },
  arrow:{
    marginLeft:'auto',
    marginRight:'auto',
  },
  content:{
    alignSelf: 'stretch',
    width:380,
    paddingTop:26,
    backgroundColor:'#18191C',
    paddingBottom:20,

  },
  otpWrap:{
    display:'flex',
    justifyContent:'center',
    flexDirection: "row",
  },
  input:{
    borderColor:'#6E7191',
    borderWidth:1,
    backgroundColor:'#0B0B13',
    color:'#fff',
    height:50,
    fontSize:16,
    width:60,
    marginLeft:6,
    marginRight:6,
    borderRadius:10,
    textAlign:'center',
  },
  btn:{
    backgroundColor:'#787bd1',
    marginTop:30,
    height:50,
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
  paddingTop:15
},
resnd:{
  fontSize: 16,
  color:'#FFF1E4',
  textAlign:'center',
  fontFamily:'PoppinsRegular',
  marginTop:20,
},
resndbold:{
  fontWeight:'bold',
  color:'#FCFCFC',
},
cngeno:{
  color:'#777BD1',
  textAlign:'center',
  marginTop:40,
  fontSize:16,
},


});
