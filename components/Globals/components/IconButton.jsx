import { Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, onPress, color, size = 24 }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed ? { opacity: 0.7 } : {}}>
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton