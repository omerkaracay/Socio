import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'

export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.primary}}>
      <Text>LoginScreen2</Text>
    </SafeAreaView>
  )
}