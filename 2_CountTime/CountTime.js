import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import styles from './styles';

export default class CountTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    add() {
        this.setState(previousState => {
            return {number: ++previousState.number};
        });
    }

    sub() {
        this.setState({
            number: --this.state.number
        });
    }

    reset() {
        this.setState({
            number: 0
        });
    }

    render() {
        return (
            <View style={styles.container}>

                {/*Header*/}
                <View style={styles.header}>
                    <Text style={{fontSize: 30, color: 'black'}}>Count app</Text>
                </View>

                {/*Content*/}
                <View style={styles.content}>
                    <Text style={{fontSize: 50, color: 'white'}}>{this.state.number}</Text>
                </View>

                {/*Buttons*/}
                <View style={styles.wrapperButtons}>
                    <View style={styles.viewButton}>
                        <Text style={styles.textButton} onPress={() => this.add()}>Add</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <Text style={styles.textButton} onPress={() => this.sub()}>Sub</Text>
                    </View>
                </View>

                {/*Footer*/}
                <View style={styles.footer}>
                    <Text style={{fontSize: 25, color: 'white'}} onPress={() => this.reset()}>Reset</Text>
                </View>
            </View>
        );
    }
}