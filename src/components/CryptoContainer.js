import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class CryptoContainer extends Component {
    render(){
        return (
            <View>
                <Text>Container</Text>
            </View>
        );
    }
}

const mapStateToProps = ( state ) => ({
    crypto: state.crypto
});

export default connect(mapStateToProps)(CryptoContainer);