import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View, FlatList } from 'react-native';
import TaskListItem from './TaskListItem';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    }
});

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.props.items
        };
    }


    _onChangeSwitch = (item, isCompleted) => {
        //let items = this.state.dataSource;
        //let item = items[index];
        //alert(item);
    };

    _onSelectItem = (item, index) => {
        //this.props.items[index].completed = isCompleted;
    };


    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };


    _renderItem = ({item}) => (
        <TaskListItem
            name={item.name}
            notes={item.notes}
            completed={item.completed}
            due={item.due}
            id={item.key}
            onChangeSwitch={this._onChangeSwitch}
            onSelectItem={this._onSelectItem}
        />
    );

    render () {
        return (
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={ (item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={this._renderItem}
                />
        );
    }
}



export default TaskList;