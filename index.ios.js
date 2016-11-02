/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    ListView,
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Dimensions
} from 'react-native';

import DemoCell from './cells/DemoCell';
import PDWebView from './WebView';

export default class DemoList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2,
            sectionHeaderHasChanged: (s1, s2) => s1 != s2
        });
        this.state = {
            dataSource: ds.cloneWithRowsAndSections({'firstSetion': ['h'], 'sectionSection': ['a', 'b', 'c']})
        };
        this._renderRow = this._renderRow.bind(this);
    }


    _renderRow(rowData, rowID, sectionID) {
        return (
            <DemoCell
                onSelect={ () => {
                console.log('rowID:' + rowID + '###' + 'sectionID:' + sectionID + '###' + 'rowData:' + rowData);
            }
            }
                rowData={rowData}

                rowID={rowID}

                sectionID={sectionID}

            />

        )
            ;
    }


    render() {
        return (
            <View style={styles.container}>
                <ListView style={styles.listViewStyle}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, rowID, sectionID)}
                />
            </View>

        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    listViewStyle: {
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: 'blue'

    }
});


AppRegistry.registerComponent('DemoList', () => DemoList);
