import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import EditBox from 'components/editbox'
import CustomButton from 'components/custombutton'
import Header from '../../components/header'
import logoImage2 from 'assets/LogoMovisafe_Quadri2x.png'
import logoutImage from 'assets/logout.png'
const Dimensions = require('Dimensions');
class Setting extends React.Component {

    componentDidMount() {
    
    }
    onPressBack = () => {
        const { goBack } = this.props.navigation;
        goBack()
    }
    
    onpressLogout = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
          });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            <LinearGradient style={styles.gradientStyle} locations={[0, 0.5391, 1]} colors={['#193A65', '#021E42', '#021E42']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                <Header header_style={ styles.header_style } header_text={'Settings'} onpress={this.onPressBack}/>
                <View style={{position: 'absolute', top: 0, right: 0, height: 140, width: '50%', flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={{flex: 0.4, alignItems:'center', justifyContent: 'center'}} onPress={this.onpressLogout}>
                        <Image source={logoutImage} style={{flex: 0.2, aspectRatio: 0.82}}/>
                        <Text style={{position: 'absolute', top: 90, color: 'white', fontSize: 12}}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.top_layout }></View>
                <EditBox.Setting1 editbox_style={ styles.fullname_style } title={'FULL NAME'} placeholder_text={'Laura wilson'}/>
                <EditBox.Setting1 editbox_style={ styles.fullname_style } title={'EMAIL'} placeholder_text={'Laura.wilson@gmail.com'}/>
                {/* <EditBox editbox_style={ styles.fullname_style } title={'MOBILE'} placeholder_text={'+55 (21) 00000 - 0000'}/> */}
                <EditBox.Setting2 editbox_style={ styles.fullname_style } title={'Phone1'} placeholder_text={'+55 (21) 00000 - 0000'}/>
                <EditBox.Setting2 editbox_style={ styles.fullname_style } title={'Phone2'} placeholder_text={'+55 (21) 00000 - 0000'}/>
                <EditBox.Setting1 editbox_style={ styles.fullname_style } title={'PASSWORD'} placeholder_text={'Password'}/>
                
            
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
// const styles = StyleSheet.create({
//     gradientStyle: {
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     top_layout: {
//         flex: 0.2,
//     },
//     header_style: {
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         left: 0,
//         height: 140,
//     },
//     fullname_style: {
//         flex: 0.12,
//         width: '100%',
//         marginTop: 8,
//         marginBottom: 8,
//     },
// })

export default Setting