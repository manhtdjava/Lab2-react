import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, memo } from 'react'
import { UserType } from './Main'


type HeaderType ={
    user :UserType;
}
export const Header: FC<HeaderType>  = memo(props=>{
    const {user} = props;

    return (
        <View style={styles.container}>
            <Image resizeMode="cover" style={styles.img} source={{uri: user.avatar}}/>
            <View style={{paddingLeft: 20}}>
                <Text>Chào ngày mới</Text>
                <Text>{user.name}</Text>
            </View>
        </View>
    )
})

export default Header

const styles = StyleSheet.create({
    container:{
        height: 'auto',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        alignItems:'center'
    },
     img:{
        height: 70,
        width: 70,
        borderRadius: 70
     }
})