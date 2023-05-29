import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Image style={styles.image} source={require('../Image/bag.png')} />
      <View style={styles.container}>
        <KeyboardAwareScrollView style={{flex: 1, marginLeft: 5}}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginRight: 200,
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#989494'}}>
              Log In
            </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#C4C4C4"
              onChangeText={email => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#C4C4C4"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text
              onPress={() => props.navigation.navigate('Home')}
              style={{fontWeight: 'bold', color: '#FFFFFF', padding: 10}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                alignItems: 'center',
                fontWeight: 'bold',
                color: '#000000',
                marginLeft: 70,
                marginTop: 20,
              }}>
              Don't I have an account?
            </Text>
            <Text
              onPress={() => props.navigation.navigate('Register')}
              style={{
                color: '#000000',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 125,
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    borderWidth: 1.5,
    borderColor: '#C4C4C4',
    marginTop: 30,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    height: 50,
    marginTop: 10,
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '100%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#989494',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  register_button: {
    height: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
});
