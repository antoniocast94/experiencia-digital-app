import { FlatList, Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

import { Stack, router, useNavigation } from 'expo-router';
import Button from '@/src/packages/ui/components/button';
import ButtonOutline from '@/src/packages/ui/components/button.outline';

export default function Buttons () {
  
    const navigation = useNavigation();

    const _goBack = () => {
        router.navigate('index');
    }

    return (
        
        <View style={{ padding: 30, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => { _goBack(); }}>
                        <Image style={{ height: 24, width: 24 }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png" }}></Image>
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, fontWeight: 500, fontSize: 20, color: "#00583C" }}> 🎨 Design System</Text>
            </View>

            <Text style={{ fontSize: 16, marginTop: 20, color: "#008866" }}>Buttons</Text>
            <Text style={{ paddingTop: 20 }}>Standard</Text>
            <Button onPress={() => alert("")} title="Label" icon=""></Button>
            <Button disabled onPress={() => alert("")} title="Label" icon=""></Button>
            <Text style={{ paddingTop: 20 }}>Outline</Text>

            <ButtonOutline onPress={() => alert("")} title="Label" icon=""></ButtonOutline>

        </View>
    );


}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: "#EFF2F5",
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 60
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    text: {
        marginLeft: 10,
        color: "#444",
        fontSize: 14
    },
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },

});
