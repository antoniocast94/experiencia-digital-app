import { Palette } from "@/src/icons/icons";
import { redColors } from "@/src/packages/ui/constants/token-colors";
import { router, useNavigation } from "expo-router";
import { FlatList, TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function ComponentList() {
    const navigation = useNavigation();

    const _onPress = (item: any) => {
  
      if (!item.ready) {
        alert(item.title + ": 🧑‍💻 lo estamos trabajando");
        return;
      }
  
      router.navigate('screens/design-system/' + item.key);
  
    }
    
    return (
        <View style={{ padding: 30, backgroundColor: "#fff" }}> 
        <Text style={{ fontWeight: 500, fontSize: 24, color: "#00583C" }}> Experiencia Digital</Text> 
        <Text style={{ fontSize: 16, marginTop: 16, color: "#008866" }}><Palette size = { 20 } color = {redColors.red100}/> Design System</Text>
  
        <FlatList style={styles.flatList}
          data={[
            { key: 'buttons/buttons-screen', title: 'Buttons', ready: true },
            // { key: 'StatusBar', title: 'StatusBar', ready: false },
            // {key: 'NavBars',  title: 'NavBars', ready: false },
            // { key: 'BottonSheet',  title: 'BottonSheet', ready: false },
            // { key: 'Inputs',  title: 'Inputs', ready: false },
            // { key: 'Tag', title: 'Tag', ready: false },
            // { key: 'Steps', title: 'Steps', ready: false },
            // { key: 'Controls', title: 'Controls', ready: false },
            // { key: 'Controls', title: 'Chips', ready: false },
            // { key: 'Tootip', title: 'Tootip', ready: false },
            // { key: 'Avatar',  title: 'Tootip', ready: false },
            // { key: 'Notification',  title: 'Tootip', ready: false },
            // { key: 'Pills',  title: 'Tootip', ready: false },
            // { key: 'SearchBar',  title: 'Tootip', ready: false },
            // { key: 'List',  title: 'Tootip', ready: false },
            // { key: 'Tab',  title: 'Tootip', ready: false },
          ]}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.row} onPress={() => _onPress(item)}>
              {item.ready ?
                <Image style={{ height: 24, width: 24 }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/190/190411.png" }}></Image>
                :
                <Image style={{ height: 24, width: 24 }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3264/3264753.png" }}></Image>
              }
              <Text style={styles.text} >{item.title}</Text>
            </TouchableOpacity>
          }
        />
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
  