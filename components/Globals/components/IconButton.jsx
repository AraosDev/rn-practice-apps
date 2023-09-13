import { Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, onPress, color }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed ? { opacity: 0.7 } : {}}>
      <Ionicons name={icon} color={color} size={24} />
    </Pressable>
  );
}

export default IconButton