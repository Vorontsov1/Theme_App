import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AppContext } from '../context/AppContext';
import { Ionicons } from "@expo/vector-icons";
import {useContext} from 'react';




const SettingScreen = ({navigation}) => {
  const { colors } = useTheme();
  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);
 

  const goBack = () => { 
    navigation.navigate('Home'); 
  }


  return (
    <View style={{flex: 1, paddingVertical: 16, paddingHorizontal: 32,}}>
      <Text style={{
        color: colors.text,
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 30,
      }}>Settings</Text>

      <TouchableOpacity style={{
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: colors.card,
        borderRadius: 8,
        marginTop: 16,
       alignItems: 'center',
      }}
      onPress={() => setIsDarkTheme(!isDarkTheme)}
      >
        
        <Ionicons  size={24} color={colors.text} marginRight={10} name={isDarkTheme ? 'sunny' : 'moon'} />
        <Text style={{
          color: colors.text,
        }}>{isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goBack}>
        <Ionicons
        name="chevron-back" 
          size={30}
          style={{marginTop: 10, color: colors.text}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
