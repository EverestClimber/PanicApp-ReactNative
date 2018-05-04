import React from 'react'
import { View, Image, Text, StyleSheet, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import EditBox from 'components/editbox'
import CustomButton from 'components/custombutton'
import logoImage1 from 'assets/icon2x.png'
import logoImage2 from 'assets/LogoMovisafe_Quadri2x.png'

import firebase from 'react-native-firebase';
const Dimensions = require('Dimensions');
class Login extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isAuthenticated: '',
        }
    }
    componentDidMount() {
        
    }
    onPressNext = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Main' })],
              });
            this.props.navigation.dispatch(resetAction);
        })
        .catch(err => {
            Alert.alert("Email or Password is not correct")
        })
        
        
    }
    render() {
        let self = this;
        return (
            <LinearGradient style={styles.gradientStyle} locations={[0, 0.5391, 1]} colors={['#193A65', '#021E42', '#021E42']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                <View style={ styles.top_layout }></View>
                <View style={ styles.logo_layout }>
                    <View style={ styles.logo_container}>
                        <Image style={ styles.logo_Image } source={ logoImage1 }/>
                    </View>
                </View>
                <View style={ styles.space_layout1 }/>
                <EditBox 
                    editbox_style={ styles.fullname_style } 
                    title={'EMAIL'} 
                    placeholder_text={'Email'} 
                    value={self.state.email}
                    onChangeText={(text) => {self.setState({email: text});}}
                    />
                <EditBox 
                    editbox_style={ styles.fullname_style } 
                    title={'PASSWORD'} 
                    placeholder_text={'Password'}
                    value={self.state.password}
                    onChangeText={(text) => {self.setState({password: text});}}
                    />
                <View style={{flex: 0.04}}/>
                <CustomButton 
                    button_style = { styles.nextbtn_style } 
                    text={ 'LOGIN' } 
                    onPress={this.onPressNext}/>
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
        flex: 0.162,
    },
    logo_layout: {
        flex: 0.188,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 0.1 * Dimensions.get('window').height,
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

export default Login