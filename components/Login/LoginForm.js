import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

export default class Login extends Component {

    constructor(props) {
        super(props);
        state = {
            email: '',
            password: ''
        }
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass);

        fetch('http://localhost:8000/api/access_token',{email:email,password:pass})
            .then((response: Response) => {
                console.log(response.json().token);
            });
    }

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
                    onChangeText = {this.handleEmail}
                />
                <TextInput
                    placeholder="Passwrod"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    style={styles.input}
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    onChangeText = {this.handlePassword}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.login(this.state.email, this.state.password)}>
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