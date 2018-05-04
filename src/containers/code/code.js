import React from 'react'
import { View, Image, Text, StyleSheet, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import EditBox from 'components/editbox'
import CustomButton from 'components/custombutton'
import Header from 'components/header'

import logoImage2 from 'assets/LogoMovisafe_Quadri2x.png'
import ActivationCode from 'components/activationcode'
import I18n from 'src/translation/i18n'
const Dimensions = require('Dimensions');

class Code extends React.Component {

    componentDidMount() {
    
    }
    componentWillMount() {        
        // console.log(this.props.language);
        I18n.locale = this.props.language
    }
    onPressBack = () => {
        const { goBack } = this.props.navigation;
        goBack()
    }

    onPressNext = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            <LinearGradient style={styles.gradientStyle} locations={[0, 0.5391, 1]} colors={['#193A65', '#021E42', '#021E42']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                <Header header_style={ styles.header_style } header_text={I18n.t('ACTIVATION')} onpress={this.onPressBack}/>
                <View style={ styles.top_layout }></View>
                <View style={{flex: 0.05}}/>
                <Text style={styles.text_contact}>{I18n.t('EMERGENCY CONTACT NUMBERS')}</Text>
                <View style={{flex: 0.01}}/>
                <EditBox.PN editbox_style={ styles.email_style } type={'Phone1'} title={I18n.t('Optional')} placeholder_text={'+55 (21) 00000 - 0000'}/>
                <EditBox.PN editbox_style={ styles.password_style } type={'Phone2'} title={I18n.t('Optional')} placeholder_text={'+55 (21) 00000 - 0000'}/>
                <View style={{flex: 0.05}}/>
                <Text style={{ alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 15}}>{I18n.t('ACTIVATION CODE')}</Text>
                <View style={{flex: 0.02}}/>
                <ActivationCode style={{ width: '80%', flex: 0.07}}/>
                <View style={{flex: 0.05}}/>
                <CustomButton button_style = { styles.nextbtn_style } text={ I18n.t('ACTIVATE APP') } onPress={this.onPressNext}/>
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
        // paddingTop: 0.18 * Dimensions.get('window').height,
    },
    top_layout: {
        flex: 0.18,
    },
    header_style: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 140,
    },
    text_contact: {
        color: 'white',
    },
    email_style: {
        flex: 0.1,
        width: '100%',
    },
    password_style: {
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

export default Code