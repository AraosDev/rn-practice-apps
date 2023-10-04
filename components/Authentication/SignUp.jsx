import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Login';
import AuthForm from './components/AuthForm';

function SignUp() {
    return (
        <View style={styles.root}>
            <AuthForm mode='signup' />
        </View>
    );
}

export default SignUp;