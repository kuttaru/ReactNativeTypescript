import React from 'react';
import {  SafeAreaView, 
          StyleSheet, 
          Text, 
          Image, 
          View, 
          ImageBackground, 
          TextInput, 
          Pressable, 
          Alert, 
          Button,
          ScrollView,
          TouchableOpacity

        } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';


//IOS: 742463329823-go5ajl2c8ofgp2ns78fghhch2m94a12p.apps.googleusercontent.com
//Web client id: 742463329823-83r1e5ovt90npisopjrpaki4l51qnj74.apps.googleusercontent.com
//Web client secret: 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

WebBrowser.maybeCompleteAuthSession();

export default function SignUp({navigation}: {navigation: any}) {

  const [accessToken, setAccessToken] = React.useState(null);
  const [user,setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "742463329823-83r1e5ovt90npisopjrpaki4l51qnj74.apps.googleusercontent.com",
    iosClientId: "742463329823-go5ajl2c8ofgp2ns78fghhch2m94a12p.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if(response?.type === 'success'){
      // setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
      const { authentication } = response;
      
    }
  }, [response,accessToken])

  async function fetchUserInfo() {
      let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {Authorization: `Bearer ${accessToken}`}
    });      
    const useInfo = await response.json();
    setUser(useInfo);
  }

  const ShowUserInfo = () => {
    if(user){
      return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:35}}>Welcome</Text>
          {/* <Image source={{uri:user.picture}} style={{width:100}}></Image>
          <Text style={{fontSize:35}}>{user.name}</Text> */}
        </View>
      )
    }
  }

  const sendOtp =()=>{
    navigation.navigate('Otp')
  }
  const googleLogin =()=>{
    const config = {}
    alert("Google Login")
  }
  const appleLogin =()=>{
    alert("Apple Login")
  }


  return (
    <View style={styles.container}>
    <StatusBar style="light" backgroundColor="#0b0b13"/>
    <ImageBackground source={require('../assets/images/main-bg-full.png')} style={styles.bgimage}></ImageBackground>
      <ScrollView contentContainerStyle={styles.scrollview} >
        <Text style={styles.letText}>Hey there 👋🏼</Text>
        <Text style={styles.text}>Hop right in, we're in for a ride!</Text>
        <Image  style={styles.signupimg} source={require('../assets/images/signup.png')} />

        <SafeAreaView style={styles.content}>
        <TextInput style={styles.phNo} placeholder="Phone Number" placeholderTextColor="#6E7191"/>


        <Pressable style={styles.btn}  onPress={sendOtp}>
          <Text style={styles.btnText}>Send OTP</Text>
        </Pressable>

        <Text  style={styles.orText}>or sign in with</Text>

        <View style={styles.loginWrap}>
          {/* <Pressable style={styles.loginicon}  onPress={googleLogin}>
            
          </Pressable> */}
          <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          >
            <Image  style={styles.glImg} source={require('../assets/images/google.png')} />
          </TouchableOpacity>
          <Pressable style={styles.loginicon}  onPress={appleLogin}>
            <Image  style={styles.aplImg} source={require('../assets/images/apple.png')} />
          </Pressable>
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.content}>
        <Text style={styles.plcytext}>By signing up, you agree to our Terms of Service and</Text>
        <Text style={styles.plcytext}>acknowledge that our Privacy Policy applies to you.</Text>
      </SafeAreaView>



      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#0b0b13',
  },
  bgimage:{
    flex:1,
    position:'absolute',
    width:'100%',
    height:'100%',
  },
  content:{
    padding:20,
    paddingTop:26,
    backgroundColor:'#18191C',
  },
  letText:{
    fontFamily:'RecoletaMedium',
    color: '#FFF1E4',
    fontSize:32,
    textAlign:'center',
    marginTop:120,
    marginBottom:10,
  },
  text: {
    fontSize: 14,
    color:'#FFF1E4',
    textAlign:'center',
    fontFamily:'PoppinsRegular',
  },
  signupimg:{
    width:380,
    height:240,
  },
  phNo:{
    borderColor:'#6E7191',
    borderWidth:1,
    backgroundColor:'#0B0B13',
    color:'#fff',
    height:50,
    fontSize:16,
    width:280,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:10,
    paddingLeft:10,
  },
  btn:{
    backgroundColor:'#787bd1',
    marginTop:20,
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
  orText:{
    color:'#FFF1E4',
    fontSize:16,
    padding:20,
    textAlign:'center',
    fontFamily:'PoppinsRegular',
  },
  loginWrap:{
    display:'flex',
    justifyContent:'center',
    flexDirection: "row",
  },
  loginicon:{
    marginLeft:16,
    marginRight:16,
  },
  glImg:{
    width:24,
    height:24,
  },
  aplImg:{
    width:19,
    height:24,
  },
  plcytext: {
    fontSize: 10,
    color:'#777BD1',
    textAlign:'center',    
  },
  scrollview: {

  }

});
