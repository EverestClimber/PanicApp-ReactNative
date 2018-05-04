import React from 'react'
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import Header from 'components/header'

import sosImage from 'assets/SOSbutton2x.png'
import alertsentImage from 'assets/alertsent.png'
import calloffImage from 'assets/alertoff2X.png'
import logoImage2 from 'assets/LogoMovisafe_Quadri2x.png'
import arrowbackImage from 'assets/arrowback2x.png'
const Dimensions = require('Dimensions');
class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            callSelected: 0,
            callOffSelected: false,
        }
    }
    componentDidMount() {
    
    }
    changeLogo = () => {
        if (this.state.callSelected != 1) {
            this.setState({callSelected: this.state.callSelected + 1})
        }
    }
    calllogoRender = () => {
        var source, style
        switch(this.state.callSelected) {
            case 0:
                source = sosImage
                style = styles.call_logo
                return  (<TouchableWithoutFeedback onPress={() => this.changeLogo()} style={{flex: 1, width: '100%', alignItems: 'center',justifyContent: 'center',}}>
                            <Image source={source} style={style}/>
                        </TouchableWithoutFeedback>)
                break
            case 1:
                source = alertsentImage
                style = {flex: 1,
                    aspectRatio: 1,}
                return (<TouchableWithoutFeedback onPress={() => this.changeLogo()} style={{flex: 1, width: '100%', alignItems: 'center',justifyContent: 'center',}}>
                            <Image source={source} style={style}/>
                        </TouchableWithoutFeedback>)
                break
            case 2:
                return (
                <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>
                        FALSE ALERT
                    </Text>
                    <Text style={{color: 'white'}}>
                        YOUR CALL HAS BEEN CANCELED
                    </Text>
                    <Image source={calloffImage} style={{top: 0.09 * Dimensions.get('window').height, flex: 0.45, aspectRatio: 1.03}}/>
                    {/* <View style={{backgroundColor:'white', flex: 0.7, width: '100%'}}></View> */}
                </View>
                )

                break
            default:
                break
        }
        
    }
    pressoffCall = () => {
        if (this.state.callSelected != 2)
            this.setState({callOffSelected: !this.state.callOffSelected, callSelected: 2})
        else
            this.setState({callOffSelected: !this.state.callOffSelected, callSelected: 0})
    }
    callofflogoRender = () => {
        var source, style

        if (this.state.callOffSelected == false) {
            source = calloffImage
            style = styles.calloff_logo
        } else {
            source = arrowbackImage
            style = styles.arrow_logo
        }
        return <Image source={source} style={style}/>
    }
    onPressSetting = () => {
        const { navigate } = this.props.navigation;

        navigate('Setting')
    }
    render() {
        return (
            <LinearGradient style={styles.gradientStyle} locations={[0, 0.5391, 1]} colors={['#193A65', '#021E42', '#021E42']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                <Header header_style={ styles.header_style } header_text={'Panic button'} onpress={this.onPressSetting} navType={'main'}/>
                <View style={ styles.top_layout }></View>
                <View style={ styles.call_container }>
                    { 
                        this.calllogoRender()
                    }
                </View>
                <View style={ {flex: 0.015} }></View>
                <View style={{ flex: 0.06, width: '100%',alignItems: 'center', justifyContent: 'center',}}>
                { this.state.callSelected >= 1 &&
                    <TouchableWithoutFeedback onPress={() => this.pressoffCall()} style={{ flex: 1, width: '100%',alignItems: 'center', justifyContent: 'center',}}>
                        {
                            this.callofflogoRender()
                        }
                    </TouchableWithoutFeedback>
                }
                </View>
                <Text style={ styles.faq_text_style }>FAQ about MOVI SOS</Text>
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
        // paddingTop: 0.2 * Dimensions.get('window').height,
    },
    top_layout: {
        flex: 0.27,
    },
    header_style: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 140,
    },
    call_container: {
        flex: 0.43,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    call_logo: {
        flex: 0.77,
        aspectRatio: 1,
    },
    calloff_logo: {
        flex: 1,
        aspectRatio: 1.03,
    },
    arrow_logo: {
        flex: 0.42,
        aspectRatio: 1.44
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

export default Main
