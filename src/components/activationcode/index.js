import React from 'react'
import { TextInput, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class ActivationCode extends React.Component {

    onChangeText = (text, index) => {
        if (text.length != 0)
        switch (index) {
            case 1:
                this.refs.text2.focus();
                break;
            case 2:
                this.refs.text3.focus();
                break;
            case 3:
                this.refs.text4.focus();
                break;
            case 4:
                this.refs.text5.focus();
                break;
            case 5:
                this.refs.text5.blur();
                break;
        }
    }

    render() {
        return (
            <View style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 7,
                borderWidth: 1,
                ... this.props.style
            }}>
                <TextInput
                    ref='text1'
                    onChangeText={text => this.onChangeText(text, 1)}
                    maxLength={1}
                    style={styles.textInput}
                />
                <TextInput
                    ref='text2'
                    onChangeText={text => this.onChangeText(text, 2)}
                    maxLength={1}
                    style={styles.textInput}
                />
                <TextInput
                    ref='text3'
                    onChangeText={text => this.onChangeText(text, 3)}
                    maxLength={1}
                    style={styles.textInput}
                />
                <TextInput
                    ref='text4'
                    onChangeText={text => this.onChangeText(text, 4)}
                    maxLength={1}
                    style={styles.textInput}
                />
                <TextInput
                    ref='text5'
                    onChangeText={text => this.onChangeText(text, 5)}
                    maxLength={1}
                    style={styles.textInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: 10,
        fontSize: 14,
        fontWeight: 'normal',
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: 3
    }
})