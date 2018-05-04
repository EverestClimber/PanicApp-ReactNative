
import React from 'react'
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import logoImage1 from 'assets/icon2x.png'
import flagImage1 from 'assets/brasil2x.png'
import flagImage2 from 'assets/fr2x.png'
import flagImage3 from 'assets/us2x.png'
import logoImage2 from 'assets/LogoMovisafe_Quadri2x.png'
import I18n from 'src/translation/i18n'
const Dimensions = require('Dimensions');
class LanguageSetting extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            language: 'en'
        }
    }
    componentWillMount() {        
        I18n.locale = this.props.language
    }
    componentDidMount() {
        switch(this.props.language) {
            case 'br': 
                this.setState({language: 'br'})
                break;
            case 'fr': 
                this.setState({language: 'fr'})
                break;
            case 'en': 
                this.setState({language: 'en'})
                break;
        }
    }
    componentWillUpdate() {
    }
    componentWillReceiveProps(nextprops) {
        if (nextprops.language != this.state.language) {
            this.setState({language: nextprops.language})
            I18n.locale = nextprops.language
        }
    }
    _pressLangButton = (index) => {
        switch (index){
            case 0: 
                this.props.dispatchChangeLanguage({
                    language: 'br',
                });
                this.setState({language: 'br'})
                break;
            case 1:
                this.props.dispatchChangeLanguage({
                    language: 'fr',
                });
                this.setState({language: 'fr'})
                break;
            case 2:
                this.props.dispatchChangeLanguage({ 
                    language: 'en',
                });
                this.setState({language: 'en'})
                break;
        }
        const { navigate } = this.props.navigation;
        navigate('Register')
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
                <View style={ styles.space_layout1 }/>
                <Text style={ styles.textStyle }>{I18n.t('CHOOSE LANGUAGE')}</Text>
                <View style={ styles.space_layout2 }/>
                <View style={ styles.flag_container } >
                    <TouchableWithoutFeedback onPress={ ()=> { this._pressLangButton(0) }}>
                        <Image style={[ styles.flagImage, this.state.language == 'br' && styles.flagImage_selected ]} source={ flagImage1 }/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ ()=> { this._pressLangButton(1) }}>
                        <Image style={[ styles.flagImage, this.state.language == 'fr' && styles.flagImage_selected ]} source={ flagImage2 }/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ ()=> { this._pressLangButton(2) }}>
                        <Image style={[ styles.flagImage, this.state.language == 'en' && styles.flagImage_selected ]} source={ flagImage3 }/>
                    </TouchableWithoutFeedback>                    
                </View>
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
    space_layout1: {
        flex: 0.08
    },
    textStyle: {
        // fontFamily: 'Lato',
        fontSize: 15,
        color: '#FFFFFF',
        letterSpacing: 3
    },
    space_layout2: {
        flex: 0.07
    },
    flag_container: {
        flex: 0.072,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 50,
        paddingRight: 50,
    },
    flagImage: {
        height: 60,
        width: 60,
        opacity: 1,
    },
    flagImage_selected: {
        borderColor: 'rgba(255,255,255,0.8)',
        borderWidth: 2,
        borderRadius: 30,
        opacity: 0.4,
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

export default LanguageSetting