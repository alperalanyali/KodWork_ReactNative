import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './CustomButton-styles'
const CustomButton = ({iconName,title,onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.btn_container}>
            {iconName && <Icon name={iconName} size={20} color="white"/>}
            <Text style={styles.btn_title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton;