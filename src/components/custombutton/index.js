import React from 'react'
import { TextInput, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Dimensions = require('Dimensions');
class CustomButton extends React.Component {
    renderButton(text) {
        switch(text) {
            case "Start-REGISTER":
                return (
                    <View style={ styles.start_register_btn_style }>
                        <Text style={ styles.start_register_text_style }>{'REGISTER'}</Text>
                    </View>
                )
                break
            case "Start-LOGIN":
                return (
                    <View style={ styles.start_login_btn_style }>
                        <Text style={ styles.start_login_text_style }>{'LOGIN'}</Text>
                    </View>
                )
                break
            default:
                return (
                    <View style={ styles.login_btn_style }>
                        <Text style={ styles.login_text_style }>{text}</Text>
                    </View>
                )
                break
        }
    }
    render() {
        const { button_style, text } = this.props
        return (
            <TouchableOpacity style={ [button_style, styles.btn_background] } onPress={this.props.onPress}>
                {
                    this.renderButton(text)
                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn_background: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_btn_style: {
        flex: 0.9,
        height: '100%',
        backgroundColor: '#7F2628',
        borderRadius: 0.04*Dimensions.get('window').height,
        borderColor: 'rgba(255,255,255,0.6)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_text_style: {
        color: '#ffffff',
        fontSize: 15,
    },
    start_register_btn_style: {
        flex: 0.9,
        height: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 0.04*Dimensions.get('window').height,
        borderColor: '#7F2628',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    start_register_text_style: {
        color: '#7F2628',
        fontSize: 15,
        fontWeight: 'bold'
    },
    start_login_btn_style: {
        flex: 0.9,
        height: '100%',
        backgroundColor: '#7F2628',
        borderRadius: 0.04*Dimensions.get('window').height,
        borderColor: 'rgba(255,255,255,0.6)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    start_login_text_style: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
})
export default CustomButton