import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

const Button = ({ type, content, onPress }) => {

  const backgroundColor = type === 'primary' ? '#333333' : '#FFFFFF'
  const textColor = type === 'primary' ? '#FFFFFF' : '#333333'

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onPress()} style={[styles.button, { backgroundColor: backgroundColor }]}>

        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default Button
