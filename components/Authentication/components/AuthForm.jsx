import { View, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../../Globals/components/Input';
import Button from '../../Globals/components/Button';
import { colors } from '../../Globals/Styles/colors';
import { useNavigation } from '@react-navigation/native';
import { useCreateAccountMutation, useLoginMutation } from '../../../appStore/redux/UserAuth/authApiSlice';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../appStore/redux/UserAuth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthForm({ mode = 'login' }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [createAccountTrigger] = useCreateAccountMutation();
    const [loginTrigger] = useLoginMutation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function isAllValueValid() {
        const validEmailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (mode === 'signup') {
            return email.match(validEmailRegEx) && password.length > 6 && password === confirmPassword;
        } else if (mode === 'login') {
            return email.match(validEmailRegEx) && password.length > 6
        }

        return false;
    }

    function navigateToCreateAccount() {
        navigation.replace('signUp');
    }

    function onSubmit() {
        if (!isAllValueValid()) {
            Alert.alert('Invalid Input', 'Incorrect Credentials are given');
            return;
        } else {
            if (mode === 'signup') {
                createAccountTrigger({ email, password })
                    .unwrap()
                    .then(() => navigation.replace('login'))
                    .catch((data) => console.log(data));
            } else if (mode === 'login') {
                loginTrigger({ email, password })
                    .unwrap()
                    .then(async (data) => {
                        const { idToken, refreshToken } = data;
                        dispatch(setToken({ idToken, refreshToken }));
                        await AsyncStorage.setItem('token', JSON.stringify({ idToken, refreshToken }));
                    })
                    .catch((data) => console.log(data));
            }
        }
    }

    return (
        <View style={styles.root}>
            <Input
                label='Email'
                textInputConfig={{
                    value: email,
                    onChangeText: setEmail,
                    textContentType: 'emailAddress'
                }}
            />
            <Input
                label='Password'
                textInputConfig={{
                    value: password,
                    onChangeText: setPassword,
                    textContentType: 'password',
                    secureTextEntry: true,
                }}
            />
            {mode === 'signup' && (
                <Input
                    label='Confirm Password'
                    textInputConfig={{
                        value: confirmPassword,
                        onChangeText: setConfirmPassword,
                        textContentType: 'password',
                        secureTextEntry: true,
                    }}
                />
            )}
            <Button onPress={onSubmit} style={styles.actionBtnStyle}>{mode === 'login' ? 'Login' : 'Create Account'}</Button>
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