import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './Main'

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#F0F0F0', flex:1}}>
      <Main/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})