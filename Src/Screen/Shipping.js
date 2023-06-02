import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

export default function Shipping() {
  const [state, setState] = useState({
    first: false,
    second: false,
  });

  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    address: '',
    town: '',
    zipCode: '',
  });

  const [showToast, setShowToast] = useState(false);
  const navigation = useNavigation();

  const handleCheckOut = () => {
    if (
      inputValues.firstName === '' ||
      inputValues.lastName === '' ||
      inputValues.address === '' ||
      inputValues.town === '' ||
      inputValues.zipCode === ''
    ) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
    } else {
      Alert.alert('Order Placed', 'Your Order has been placed successfully.', [
        {
          text: 'Ok',
          onPress: () => {
            navigation.navigate('BottomTabNavigation');
          },
        },
      ]);
    }
  };
  const handleInputChange = (field, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.shippingText}>Shipping Address</Text>
      </View>
      <View style={styles.nameView}>
        <TextInput
          key="firstNameInput"
          style={styles.nameTextView}
          placeholder="First Name"
          placeholderTextColor="#C4C4C4"
          value={inputValues.firstName}
          onChangeText={text => handleInputChange('firstName', text)}
        />
        <TextInput
          key="lastNameInput"
          style={[styles.nameTextView, {marginLeft: 25}]}
          placeholder="Last Name"
          placeholderTextColor="#C4C4C4"
          value={inputValues.lastName}
          onChangeText={text => handleInputChange('lastName', text)}
        />
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          style={styles.addressText}
          placeholder="Address"
          placeholderTextColor="#C4C4C4"
          value={inputValues.address}
          onChangeText={text => handleInputChange('address', text)}
        />
      </View>
      <View style={styles.nameView}>
        <TextInput
          style={styles.nameTextView}
          placeholder="Town/City"
          placeholderTextColor="#C4C4C4"
          value={inputValues.town}
          onChangeText={text => handleInputChange('town', text)}
        />
        <TextInput
          style={[styles.nameTextView, {marginLeft: 25}]}
          placeholder="Zip Code"
          placeholderTextColor="#C4C4C4"
          value={inputValues.zipCode}
          onChangeText={text => handleInputChange('zipCode', text)}
        />
      </View>
      <View style={styles.borderLine} />
      <View style={styles.shippingView}>
        <Text style={styles.shippingText}>Shipping Options</Text>
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          value={state.first}
          onValueChange={value =>
            setState({
              first: value,
              second: !value,
            })
          }
        />
        <Text style={styles.checkBoxText}>
          Standard 5 to 7 days
        </Text>
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          value={state.second}
          onValueChange={value =>
            setState({
              first: !value,
              second: value,
            })
          }
        />
        <Text style={styles.checkBoxText}>
          Express 2 to 3 days
        </Text>
      </View>
      <TouchableOpacity style={styles.checkOutBtn} onPress={handleCheckOut}>
        <Text style={styles.checkOutText}>
          Check Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainView: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 25,
  },
  shippingText: {
    fontSize: 20,
    color: '#222222',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  nameView: {
    width: '100%',
    marginLeft: 20,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTextView: {
    borderRadius: 10,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    width: '42%',
    height: 55,
    textAlign: 'left',
    paddingLeft: 15,
  },
  addressText: {
    borderRadius: 10,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    width: '90%',
    height: 55,
    marginTop: 20,
    paddingLeft: 15,
  },
  borderLine: {
    borderBottomWidth: 1.5,
    borderColor: '#C4C4C4',
    marginTop: 50,
    marginEnd: 20,
    marginStart: 20,
  },
  shippingView: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 15,
  },

  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 40,
    alignItems: 'center',
    paddingVertical: 5,
  },

  checkOutBtn: {
    width: '90%',
    borderRadius: 10,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#989494',
    marginLeft: 20,
    marginBottom: 10,
  },
  checkBoxText:{
    fontWeight: 'bold',
    color: '#4C5059'
  },
  checkOutText:{
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 22
  },
});
