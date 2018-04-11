import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Switch, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1
    },

    textcontainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 2,
        padding: 4,
    },

    cbcontainer: {
        margin: 2
    },

    itemtext: {
        fontSize: 12,
        color: 'black'
    },

    idtext: {
        fontSize: 6,
        color: '#808080'
    },

    completed: {
        textDecorationLine: 'line-through'
    }
});

class TaskListItem extends Component {
    constructor (props) {
        super(props);
    }

    state = {
        completed: this.props.completed
    };

    render () {
        return (
                <View style={styles.container}>
                    <TouchableHighlight style={styles.textcontainer} onPress={(event)=> this.onSelectItem(event)}>
                        <View >
                            <Text style={[styles.itemtext, this.state.completed && styles.completed]}>{this.props.name}</Text>
                            <Text style={styles.idtext}>{this.props.due}</Text>

                        </View>
                    </TouchableHighlight>
                    <View style={styles.cbcontainer}>
                        <Switch value={ this.state.completed }
                                onValueChange={ (value)=>{ this.onChangeFunction({completed: value}); } } />
                    </View>
                </View>
        )
    }

    onSelectItem (event) {
        //event.preventDefault();
        //if (this.props.onSelectItem !== null) {
        //  this.props.onSelectItem(this.item.id);
        //}
    }

    onChangeFunction(newState){

        this.setState(newState);

        if(this.props.onChangeSwitch !== null)
            this.props.onChangeSwitch(this.props.id, this.state.completed);

    }

}


export default TaskListItem;