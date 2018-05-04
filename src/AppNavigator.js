import React from 'react'
import { StackNavigator } from 'react-navigation'
import Splash from 'containers/splash'
import LanguageSetting from 'containers/languagesetting'
import Login from 'containers/login'
import Register from 'containers/register'
import Code from 'containers/code'
import Main from 'containers/main'
import Setting from 'containers/setting'
import Start from 'containers/start'
const AppNavigator = StackNavigator({
    Splash: { screen: Splash },
    LanguageSetting: { screen: LanguageSetting },
    Login: { screen: Login },
    Register: { screen: Register },
    Code: { screen: Code },
    Main: { screen: Main},
    Setting: { screen: Setting },
    Start: { screen: Start}
},
{
    initialRouteName: 'Splash',
    navigationOptions: {
        header: null,
    }
})

export default AppNavigator