import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState } from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {COLORS} from '../values/colors';
import {FontSizes} from '../values/fontSizes';
import { LoginContext } from '../contexts/LoginContexts';

export default function LoginScreen() {
  let { setIsLogin } = useContext(LoginContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")



  function LoginCheck (){
    setIsLogin(true)
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      {/* LOGO */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: hp('6%'),
            color: COLORS.white,
            fontWeight: 'bold',
          }}>
          social
        </Text>
      </View>
      {/* Login Inputs */}
      <View style={{flex: 1, alignItems: 'center', gap: 10}}>
        <TextInput
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
          style={{
            backgroundColor: COLORS.white,
            width: hp('30%'),
            borderRadius: 20,
            paddingLeft: 20,
          }}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Şifre"
          style={{
            backgroundColor: COLORS.white,
            width: hp('30%'),
            borderRadius: 20,
            paddingLeft: 20,
          }}
        />

        {/* Login Buttons */}
        <TouchableOpacity onPress={LoginCheck}>
          <Text
            style={{
              fontSize: FontSizes.h3,
              color: COLORS.white,
              backgroundColor: COLORS.green,
              padding: 10,
              borderRadius: 10,
              width: FontSizes.h3 * 8,
              textAlign: 'center',
            }}>
            Giriş
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: FontSizes.h3,
              color: COLORS.white,
              padding: 10,
              borderRadius: 10,
              textAlign: 'center',
            }}>
          Hesabın yok mu? Hesap oluştur
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
