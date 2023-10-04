import { View, StyleSheet } from 'react-native'
import React from 'react'
import AuthForm from './components/AuthForm';

function Login() {
    return (
        <View style={styles.root}>
            <AuthForm />
        </View>
    );
}

export default Login;

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
        marginVertical: 50
    }
});