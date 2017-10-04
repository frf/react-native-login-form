import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import LoginForm from '../Login/LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../images/octdrey-catburn.jpg')}
                            />

                        <Text style={styles.title}>Aplicativo</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width:100,
        height: 100
    },
    formContainer: {

    },
    title: {
        color:'#FFF',
        marginTop: 1,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }
});