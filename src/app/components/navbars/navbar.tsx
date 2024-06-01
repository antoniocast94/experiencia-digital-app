import { View, Text } from "react-native";
import { useNavbarStyles } from "./navbar-styles";
import { LinearGradient } from 'expo-linear-gradient';
import { gradientsColors } from "@/src/packages/ui/constants/token-colors";

export interface NavbarProps {
  label: string;
  description: string;
  hasBackground?: boolean;
  hasDescription?: boolean;
}

export const Navbar = (props: NavbarProps) => {

  const { label, description, hasBackground, hasDescription } = props;

  return (

    <View style={ useNavbarStyles( hasBackground, hasDescription ).container }>
      <LinearGradient colors={ gradientsColors.gradient02 }>
        <Text style={ useNavbarStyles().label }>{label}</Text>
        <Text style={ useNavbarStyles().description }>{description}</Text>
      </LinearGradient>
    </View>
  )
}
