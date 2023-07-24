import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {COLORS} from '../assets/theme/colors';
import {FontSizes} from '../assets/theme/fontSizes';

export default function LoginScreen() {
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
          placeholder="Username"
          style={{
            backgroundColor: COLORS.white,
            width: hp('30%'),
            borderRadius: 20,
            paddingLeft: 20,
          }}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={{
            backgroundColor: COLORS.white,
            width: hp('30%'),
            borderRadius: 20,
            paddingLeft: 20,
          }}
        />

        {/* Login Buttons */}
        <TouchableOpacity>
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
