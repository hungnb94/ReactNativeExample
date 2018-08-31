import React, { Component } from 'react';
import {Button, TextInput, View } from 'react-native';

import styles from './styles';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    setName(value) {
        this.setState({
            username: value
        })
    }

    setPass(value) {
        this.setState({
            password: value
        })
    }

    submit(){
        alert(this.state.username + ' - ' + this.state.password)
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.item} onChangeText={(value)=>this.setName(value)}/>

                <TextInput style={styles.item} onChangeText={(value)=>this.setPass(value)} secureTextEntry={true}/>

                <Button onPress={()=> this.submit()} title={'Submit'}/>

            </View>
        );
    }
}