/**
 * Created by Marvin on 2016/10/8.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class DemoCell extends Component {
    render() {
        var sectionStyle = this.props.rowID == 0 ? styles.sepSectionView : {};
        var sectionRow = this.props.rowID == 0 ? styles.sectionHeaderRow : styles.row;
        var sectionHeaderContent = this.props.rowID == 0 ? styles.sectionHeaderContent : {};
        var sectionText = this.props.rowID == 0 ? this.props.sectionID : '';

        return (
            <View>
                <View style={sectionStyle}></View>
                <TouchableHighlight onPress={this.props.onSelect}>
                    <View style={sectionRow}>
                        <View style={sectionHeaderContent}>
                            <Text style={styles.text}>{sectionText}</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.text}>{this.props.rowData}</Text>
                        </View>
                    </View>
                </TouchableHighlight>

                <View style={styles.sepLine}>

                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'skyblue',
        height: 150
    },
    sectionHeaderRow: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingTop: 50,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'skyblue',
        height: 200
    },
    sectionHeaderContent: {
        flex: 1,
        backgroundColor: 'orange',
        position: 'absolute',
        top: 20,
        left: 30,
        right: 20,
        height: 30
    },
    text: {
        color: 'blue'
    },
    sepLine: {
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#dddddd'
    },
    sepSectionView: {
        height: 20,
        backgroundColor: 'blue'
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});