import React from 'react'
import { TextInput, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import backImage from 'assets/arrowback2x.png'
import settingImage from 'assets/cogwheelsilhouette2x.png'
const Dimensions = require('Dimensions');
class Header extends React.Component {
    render() {
        const { header_style, header_text } = this.props
        return (
            <View style={ [header_style, styles.backgroundStyle] }>
                <TouchableOpacity style={ styles.back_container } onPress={this.props.onpress}>
                    { this.props.navType == 'main'? (
                        <Image source={settingImage} style={ styles.setting_style } />
                    ) : (
                        <Image source={backImage} style={ styles.back_style } />
                    )}
                    
                </TouchableOpacity>
                <Text style={ styles.nav_title_style }>{header_text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back_container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back_style: {
        flex: 0.12,
        aspectRatio: 1.44,
    },
    setting_style: {
        flex: 0.2,
        aspectRatio: 1,
    },
    nav_title_style: {
        color: '#ffffff',
        fontSize: 22,
    }
})

export default Header