import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TaskList from './components/TaskList';
class Application extends Component {

    state = {
        items : [
            { name: 'Buy fish', notes: 'The cute ones', completed: false, due: new Date(2018, 5, 12).toDateString()},
            { name: 'Buy more fish', notes: 'The less cute ones', completed: false,
                due: new Date(2018, 6, 12).toDateString()},
            { name: 'Build a pond so you can buy all the fish.',
                notes: 'Maybe move to the Philippines so you can have all the fish and ants.',
                completed: false, dueDate: new Date(2020, 5, 12).toDateString()}
        ]
    };


    render() {


        return (
            <View style={styles.container}>
                <TaskList items={this.state.items} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 16
    }
});

export default Application;