/**
 * Created by Marvin on 2016/10/12.
 */

'use strict';
import React, {Component} from 'react';
import {
    View,
    WebView,
    Platform,
    StyleSheet,
    Dimensions
} from 'react-native';


export default class PDWebView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.baseView}>
                <WebView style={styles.container}
                         startInLoadingState={true}
                         javaScriptEnabled={true}
                         source={{uri: this.props.url}}
                         scalesPageToFit={true}
                         scrollEnabled={true}
                         bounces={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseView: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    container: {
        flex: 1,
        height: Dimensions.get('window').height

    }
});
