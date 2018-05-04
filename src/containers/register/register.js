import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import I18n from 'src/translation/i18n'
import Header from '../../components/header'
import EditBox from '../../components/editbox'
import CustomButton from 'components/custombutton'

import logoImage2 from 'assets/LogoMovisafe_Quadri2x.png'
const Dimensions = require('Dimensions');
// I18n.locale = this.props.language.language
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isAuthenticated: '',
        }
        
    }
    componentWillMount() {        
        // console.log(this.props.language);
        I18n.locale = this.props.language
    }

    onPressNext = () => {
        const { navigate } = this.props.navigation;

        navigate('Code')
    }
    onPressBack = () => {
        const { goBack } = this.props.navigation;
        goBack()
    }
    render() {
        
        return (
            <LinearGradient style={styles.gradientStyle} locations={[0, 0.5391, 1]} colors={['#193A65', '#021E42', '#021E42']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                <Header header_style={ styles.header_style } header_text={I18n.t('REGISTER')} onpress={this.onPressBack}/>
                <View style={ styles.top_layout }></View>
                <EditBox editbox_style={ styles.fullname_style } title={I18n.t('FULL NAME')} placeholder_text={'Laura wilson'}/>
                <EditBox editbox_style={ styles.fullname_style } title={I18n.t('EMAIL')} placeholder_text={'Laura.wilson@gmail.com'}/>
                <EditBox editbox_style={ styles.fullname_style } title={I18n.t('MOBILE')} placeholder_text={'+55 (21) 00000 - 0000'}/>
                <EditBox editbox_style={ styles.fullname_style } title={I18n.t('PASSWORD')} placeholder_text={'Password'} inRegister={true}/>
                <View style={{flex: 0.04}}/>
                <CustomButton button_style = { styles.nextbtn_style } text={ I18n.t('NEXT') } onPress={this.onPressNext}/>
                <Text style={ styles.faq_text_style }>{I18n.t('FAQ about MOVI SOS')}</Text>
                <View style={ styles.bottomBackground } >
                    <Image source={ logoImage2 } style={ styles.bottomLogo } />
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    gradientStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    top_layout: {
        flex: 0.2
    },
    header_style: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 140,
    },
    fullname_style: {
        flex: 0.1,
        width: '100%',
    },
    nextbtn_style: {
        flex: 0.08,
        width: '100%',
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

export default Register