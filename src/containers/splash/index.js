import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';

import loadingImage from 'assets/loading.jpg'

class Splash extends React.Component {

    componentDidMount() {
        setTimeout(this.moveToLangPage, 1000)
    }

    moveToLangPage = () => {
        // const { navigate, reset } = this.props.navigation;
        // navigate('Start')
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Start' })],
          });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <Image source={loadingImage} style={styles.splash}/>
        )
    }
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
})

export default Splash