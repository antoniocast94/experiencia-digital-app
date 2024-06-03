import Icon from 'react-native-vector-icons/FontAwesome6';
import { redColors } from '../packages/ui/constants/token-colors';

// AGREGO INTERFAZ DE PROPS PARA QUE PODAMOS CONFIGURARLO DE MANERA GLOBAL
export interface IconProps {
    size: number;
    color: string;
  } 

// ASI DEBEMOS DE CREAR LOS ICONOS PARA PODER EXPORTARLOS Y REUTILIZARLOS EN VARIAS PAGINAS

export const Comments = () => < Icon name='comments' size={ 30 } />  
export const Palette  = ( props: IconProps ) => < Icon name = 'palette' size = { props.size } color = { props.color } />   