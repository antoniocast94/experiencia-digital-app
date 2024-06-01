import React, { useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';


export default function ButtonOutline(props: { onPress: any; title: any; icon: any, disabled?: boolean }) {

    const { onPress, title = 'Save', disabled = false, icon = "" } = props;


    return (
            <TouchableOpacity
                disabled={props.disabled} style={[props.disabled ? styles.btn_disabled : styles.btn_primary, styles.btn]} onPress={props.disabled ? null : onPress}

            >

                {typeof (props.icon) == "string" && props.icon != "" ?
                    <Image
                        style={styles.icon}
                        source={{ uri: props.icon }}
                    /> : null
                }

                {/* {typeof (props.icon) != "string" ?
                    <FontAwesomeIcon color={styles.text_primary.color} size={styles.icon.height} icon={props.icon} /> : null
                } */}

                <Text style={[props.disabled ? styles.text_disabled : styles.text_primary, styles.text]}>{title}</Text>
            </TouchableOpacity>
     
    );
}


const styles = StyleSheet.create({
    btn: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 50,
        marginTop: 10,

    },
    btn_primary: {
        backgroundColor: '#FFFFFF',
        borderColor: '#018765',
        borderWidth: 2
    },
    btn_disabled: {
        borderColor: '#cacaca',
        backgroundColor: '#EFF2F5',
        borderWidth: 2
    },
    icon: {
        height: 25,
        width: 25,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'normal',
        letterSpacing: 0.25,
    },
    text_primary: {
        color: '#018765',
    },
    text_disabled: {
        color: '#cacaca',
    },

});


