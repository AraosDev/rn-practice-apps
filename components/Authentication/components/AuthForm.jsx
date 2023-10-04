import { View, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../../Globals/components/Input';
import Button from '../../Globals/components/Button';
import { colors } from '../../Globals/Styles/colors';
import { useNavigation } from '@react-navigation/native';

function AuthForm({ mode = 'login' }) {
    const navigation = useNavigation();

    function navigateToCreateAccount() {
        navigation.replace('signUp');
    }

    function createAccountHandler() {
        navigation.replace('login');
    }

    return (
        <View style={styles.root}>
            <Input label='Email' />
            <Input label='Password' />
            {mode === 'signup' && <Input label='Confirm Password' />}
            <Button onPress={createAccountHandler} style={styles.actionBtnStyle}>{mode === 'login' ? 'Login' : 'Create Account'}</Button>
            {mode === 'login' && <Button onPress={navigateToCreateAccount} style={styles.actionBtnTransparent}>Create Account</Button>}
        </View>
    );
}

export default AuthForm;

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    actionBtnStyle: {
        borderColor: colors.primary200,
        backgroundColor: colors.primary200,
    },
    actionBtnTransparent: {
        backgroundColor: 'transparent',
        borderColor: colors.primary200,
    }
});