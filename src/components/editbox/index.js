import React from 'react'
import { TextInput, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import emailImage from 'assets/email2x.png'
import lockImage from 'assets/lock2x.png'
import divideImage from 'assets/line2x.png'
import userImage from 'assets/user2x.png'
import phoneImage from 'assets/phoneoutline2X.png'

import mobileImage1 from 'assets/mobile12x.png'
import mobileImage2 from 'assets/mobile22x.png'

import editImage from 'assets/edit.png'
const Dimensions = require('Dimensions');
class EditBox extends React.Component {
    logoRender(title) {
        var logo_style
        var logo_source
        switch(title) {
            case "PASSWORD":
                logo_style = styles.lock_logo
                logo_source = lockImage
                break;
            case "EMAIL":
                logo_style = styles.email_logo
                logo_source = emailImage
                break;
            case "FULL NAME":
                logo_style = styles.name_logo
                logo_source = userImage
                break;
            case "MOBILE":
                logo_style = styles.phone_logo
                logo_source = phoneImage
                break;
            default:
                logo_style = styles.lock_logo
                logo_source = lockImage
                break;
        }
        return <Image source={ logo_source } style={ logo_style }/>
    }
    textinputRender(title, placeholder_text, inRegister) {
        if (inRegister == true) {
            return (
                <View style={ styles.password_input_container }>
                    <TextInput 
                        style={ [styles.email_input_style, styles.password_input] } 
                        secureTextEntry={true} 
                        placeholder={placeholder_text} 
                        placeholderTextColor={'rgba(255,255,255,0.5)'}
                        value={this.props.value}
                        onChangeText={this.props.onChangeText}/>    
                </View>
            )
        }
        switch(title) {
            case "PASSWORD":
                return (
                    <View style={ [styles.password_input_container,{}] }>
                        <TextInput 
                            style={ [styles.email_input_style, {flex: 0.5}] } 
                            secureTextEntry={true} 
                            placeholder={placeholder_text} 
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            value={this.props.value}
                            onChangeText={this.props.onChangeText}
                            />    
                        <TouchableOpacity onPress={ ()=> {  }} style={{flex: 0.5, alignItems: 'center',  width: '100%',}}>
                            <Text style={ [styles.forgot_text_style, {width: '100%', }] }>Forgot Password</Text>
                        </TouchableOpacity>  
                    </View>
                )
                break;
            case "EMAIL":
                return <TextInput 
                            style={ styles.email_input_style } 
                            placeholder={placeholder_text} 
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            value={this.props.value}
                            onChangeText={this.props.onChangeText}
                            autoCapitalize="none"/>
                break;
            case "FULL NAME":
            case "MOBILE":
                return <TextInput 
                            style={ styles.email_input_style } 
                            placeholder={placeholder_text} 
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            value={this.props.value}
                            onChangeText={this.props.onChangeText}/>
                break;
            default:
                return <TextInput 
                            style={ styles.email_input_style } 
                            placeholder={placeholder_text} 
                            placeholderTextColor={'rgba(255,255,255,0.5)'}
                            value={this.props.value}
                            onChangeText={this.props.onChangeText}/>
                break;
        }
    }
    render() {
        const { editbox_style, title, placeholder_text, inRegister } = this.props
        return (
            <View style={ editbox_style }>
                <View style={styles.background} >
                    <View style={ styles.edit_logo_container }> 
                        {
                            this.logoRender(title)
                        }
                    </View>
                    <View style={{ flex: 0.8, height: '100%',justifyContent: 'space-between' }}>
                        <Text style={ styles.email_text_style }>{title}</Text>  
                        {
                            this.textinputRender(title, placeholder_text, inRegister)
                        }
                    </View>
                </View>
                <Image source={divideImage} style={styles.divider_style} />
            </View>
        )
    }
}
class PNEditBox extends React.Component {
    logoRender(type) {
        var logo_source
        switch(type) {
            case "Phone1":
                logo_source = mobileImage1
                break;
            case "Phone2":
                logo_source = mobileImage2
                break;
            default:
                logo_source = mobileImage1
                break;
        }
        return <Image source={ logo_source } style={ styles.mobile_logo }/>
    }
    render() {
        const { editbox_style, type, placeholder_text, title } = this.props
        
        return (
            <View style={ editbox_style }>
                <View style={styles.background} >
                    <View style={ styles.edit_logo_container }> 
                        {
                            this.logoRender(type)
                        }
                    </View>
                    <View style={ {flex: 0.5, justifyContent: 'center'} }>
                        <TextInput style={ styles.email_input_style } placeholder={placeholder_text} placeholderTextColor={'rgba(255,255,255,0.5)'}/>
                    </View>
                    <Text style={{ flex: 0.3, color: 'rgba(255,255,255,0.8)', alignItems: 'center', marginLeft: 30 }}>{title}</Text>
                </View>
                <Image source={divideImage} style={styles.divider_style1} />
            </View>
        );
    }
}
class SettingEditBox2 extends React.Component {
    logoRender(title) {
        var logo_source
        switch(title) {
            case "Phone1":
                logo_source = mobileImage1
                break;
            case "Phone2":
                logo_source = mobileImage2
                break;
            default:
                logo_source = mobileImage1
                break;
        }
        return <Image source={ logo_source } style={ styles.mobile_logo }/>
    }
    render() {
        const { editbox_style, title, placeholder_text } = this.props
        
        return (
            <View style={ editbox_style }>
                <View style={styles.background} >
                    <View style={ styles.edit_logo_container }> 
                        {
                            this.logoRender(title)
                        }
                    </View>
                    <View style={ {flex: 0.6, justifyContent: 'center'} }>
                        <TextInput style={ [styles.email_input_style, {width: '100%'}] } placeholder={placeholder_text} placeholderTextColor={'rgba(255,255,255,0.5)'}/>
                    </View>
                    {/* <View style={{ flex: 0.3, color: 'rgba(255,255,255,0.8)', marginLeft: 30, justifyContent: 'center'}}>Optional</Text> */} */}
                    <View style={{flex: 0.2, height: '100%',alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity onPress={ ()=> {  }} style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={editImage} style={{flex: 0.8, aspectRatio: 1.04}}/>
                        </TouchableOpacity>  
                    </View>
                    {/* <Image source={editImage} style={{ flex: 0.3, a color: 'rgba(255,255,255,0.8)', textAlign: 'right', marginLeft: 30, justifyContent: 'center'}}/> */}
                </View>
                <Image source={divideImage} style={styles.divider_style1} />
            </View>
        );
    }
}
class SettingEditBox1 extends React.Component {
    logoRender(title) {
        var logo_style
        var logo_source
        switch(title) {
            case "PASSWORD":
                logo_style = styles.lock_logo
                logo_source = lockImage
                break;
            case "EMAIL":
                logo_style = styles.email_logo
                logo_source = emailImage
                break;
            case "FULL NAME":
                logo_style = styles.name_logo
                logo_source = userImage
                break;
            default:
                logo_style = styles.lock_logo
                logo_source = lockImage
                break;
        }
        return <Image source={ logo_source } style={ logo_style }/>
    }
    textinputRender(title, placeholder_text) {
        switch(title) {
            case "PASSWORD":
                return <TextInput style={ [styles.email_input_style, styles.password_input] } secureTextEntry={true} placeholder={placeholder_text} placeholderTextColor={'rgba(255,255,255,0.5)'}/>    
                break;
            case "EMAIL":
            case "FULL NAME":
                return <TextInput style={ [styles.email_input_style, styles.password_input] } placeholder={placeholder_text} placeholderTextColor={'rgba(255,255,255,0.5)'}/>    
                break;
            default:
                return <TextInput style={ [styles.email_input_style, styles.password_input] } placeholder={placeholder_text} placeholderTextColor={'rgba(255,255,255,0.5)'}/>    
                break;
        }
    }
    render() {
        const { editbox_style, title, placeholder_text } = this.props
        return (
            <View style={ editbox_style }>
                <View style={styles.background} >
                    <View style={ styles.edit_logo_container }> 
                        {
                            this.logoRender(title)
                        }
                    </View>
                    <View style={ styles.edit_main }>
                        <Text style={ styles.email_text_style }>{title}</Text>
                        <View style={ styles.password_input_container }>
                            {
                                this.textinputRender(title, placeholder_text)
                            }
                            {/* <TextInput style={ [styles.email_input_style, styles.password_input] } secureTextEntry={true} placeholder={placeholder_text} placeholderTextColor={'rgba(255,255,255,0.5)'}/>     */}
                            {/* <TouchableOpacity onPress={ ()=> {  }} style={{flex: 0.4, alignItems: 'flex-end', justifyContent:'center'}}>
                                <Image source={editImage} style={{flex: 0.5, aspectRatio: 1}}/>
                            </TouchableOpacity>   */}
                        </View>
                    </View>
                    <View style={{flex: 0.2, height: '100%',alignItems: 'center', justifyContent: 'space-between'}}>
                        <View></View>
                        <TouchableOpacity onPress={ ()=> {  }} style={{flex: 0.5, alignItems: 'center', justifyContent: 'flex-end'}}>
                            <Image source={editImage} style={{flex: 0.8, aspectRatio: 1.04}}/>
                        </TouchableOpacity>  
                    </View>
                </View>
                <Image source={divideImage} style={styles.divider_style} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    background: {
        flex: 0.55,
        flexDirection: 'row',
        alignItems: 'center',
    },
    edit_logo_container: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    email_logo: {
        flex: 0.4,
        aspectRatio: 1.32,
        opacity: 0.88,
    },
    lock_logo: {
        flex: 0.6,
        aspectRatio: 0.72,
        opacity: 0.88,
    },
    name_logo: {
        flex: 0.5,
        aspectRatio: 0.85,
        opacity: 0.88,
    },
    phone_logo: {
        flex: 0.8,
        aspectRatio: 0.54,
        opacity: 0.88,
    },
    mobile_logo: {
        flex: 0.8,
        aspectRatio: 0.54,
        opacity: 0.88,
    },
    edit_main: {
        flex: 0.6,
        height: '100%',
        justifyContent: 'space-between',
    },
    email_text_style: {
        color: '#FFFFFF',
        letterSpacing: 2,
    },
    email_input_style: {
        color: 'rgba(255,255,255,0.5)',

    },
    password_input_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    password_input: {
        flex: 1,
    },
    forgot_text_style: {
        color: 'rgba(255,255,255,0.9)',
    },
    divider_style: {
        width: '100%',
        height: 1,
        top: 0.02 * Dimensions.get('window').height
    },
    divider_style1: {
        width: '100%',
        height: 1,
        top: 0.01 * Dimensions.get('window').height
    }
})

EditBox.PN = PNEditBox
EditBox.Setting1 = SettingEditBox1
EditBox.Setting2 = SettingEditBox2
export default EditBox