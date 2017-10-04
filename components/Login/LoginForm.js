import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    />
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    style={styles.input}
                    returnKeyType="next"
                    keyboardType="email-address"
                    autocapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                    placeholder="Passwrod"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    style={styles.input}
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
});