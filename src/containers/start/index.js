import React from 'react'
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import logoImage1 from 'assets/icon2x.png'
import logoImage2 from 'assets/LogoMovisafe_Quadri2x.png'

import CustomButton from 'components/custombutton'
const Dimensions = require('Dimensions');
class Start extends React.Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    onPressLogin = () => {
        const { navigate } = this.props.navigation;

        navigate('LanguageSetting')
    }
    onPressRegister = () => {
        const { navigate } = this.props.navigation;

        navigate('Login')
    }
    render() {
        return (
            <LinearGradient style={styles.gradientStyle} locations={[0, 0.5391, 1]} colors={['#193A65', '#021E42', '#021E42']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                <View style={ styles.top_layout }></View>
                <View style={ styles.logo_layout }>
                    <View style={ styles.logo_container}>
                        <Image style={ styles.logo_Image } source={ logoImage1 }/>
                    </View>
                </View>
                <View style={ styles.space_layout} />
                <View style={ styles.text_container }>
                    <Text style={ styles.textStyle }>MOVI SOS</Text>
                    <Text style={ styles.textStyle1 }>your panic button to assist you 24/7</Text>
                </View>
                <CustomButton button_style = { styles.nextbtn_style } text={ 'Start-REGISTER' } onPress={this.onPressLogin}/>
                <View style={ styles.space_layout }></View>
                <CustomButton button_style = { styles.nextbtn_style } text={ 'Start-LOGIN' } onPress={this.onPressRegister}/>
                <Text style={ styles.faq_text_style }>FAQ about MOVI SOS</Text>
                <View style={ styles.bottomBackground } >
                    <Image source={ logoImage2 } style={ styles.bottomLogo } />
                </View>
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    gradientStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    top_layout: {
        flex: 0.162,
    },
    logo_layout: {
        flex: 0.188,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo_container: {
        flex: 1,
        width: "100%",
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    logo_Image: {
        flex: 0.879,
        aspectRatio: 1,
    },
    space_layout: {
        flex: 0.02,
    },
    text_container: {
        flex: 0.15,
        alignItems: 'center',
    },
    textStyle: {
        // fontFamily: 'Lato',
        fontSize: 14,
        color: '#FFFFFF',
    },
    textStyle1: {
        fontSize: 13,
        color: '#FFFFFF',
        fontStyle: 'italic'
    },
    nextbtn_style: {
        flex: 0.08,
        width: '100%',
        // marginTop: 0.04 * Dimensions.get('window').height,
    },
    faq_text_style: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.7)',
        position: 'absolute',
        bottom: 0.18 * Dimensions.get('window').height,
    },
    bottomBackground: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 0.122 * Dimensions.get('window').height,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomLogo: {
        flex: 0.58,
        aspectRatio: 2.84,
    }
})

export default Start