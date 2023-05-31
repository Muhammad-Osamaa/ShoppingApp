import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
export default function Register(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
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
              marginRight: 170,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 30,
                color: '#989494',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Register
            </Text>
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#C4C4C4"
              onChangeText={email => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#C4C4C4"
              onChangeText={username => setUsername(username)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#C4C4C4"
              onChangeText={password => setPassword(password)}
            />
          </View>

          <TouchableOpacity style={styles.registerBtn}>
            <Text onPress={() => props.navigation.navigate('Login')}
                  style={{color: '#FFFFFF', fontWeight: 'bold', padding: 10}}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                alignItems: 'center',
                fontWeight: 'bold',
                color: '#000000',
                marginTop: 20,
                marginLeft: 60,
              }}>
              Already have an account?
            </Text>
            <Text
              onPress={() => props.navigation.navigate('Login')}
              style={{
                fontWeight: 'bold',
                color: '#000000',
                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#C4C4C4',
    borderWidth: 1.5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 30,
  },
  image: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 125,
  },

  inputView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    height: 50,
    marginTop: 10,
    alignItems: 'flex-start',
    borderColor: '#C4C4C4',
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  registerBtn: {
    width: '100%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#989494',
    color: '#000000',
  },
  login_button: {
    height: 30,
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,
  },
});
