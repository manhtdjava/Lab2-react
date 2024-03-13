import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC, memo } from 'react'
type FooterType = {
    timeUpdate: string;
    backColor : string;
}
export const Footer: FC<FooterType> = memo(props=> {
    const {timeUpdate, backColor} = props;

  return (
    <View style={{
        height: 100,
        backgroundColor: backColor,
        alignItems:'center',
        justifyContent:'center'
    }}>
        <Text>Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
    </View>
  )
})

export default Footer

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
    }
})
// const containerStyle = (props: ViewStyle)=>({
//     ...props,
// });