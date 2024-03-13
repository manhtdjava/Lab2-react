import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { FC, memo, useState } from 'react'
import { UserType } from './Main'

type BodyType ={
    onUpdate: (user: UserType)=> void;
    onClickFooter: ()=> void;
}
export const Body: FC<BodyType>= memo(props => {
    const {onUpdate, onClickFooter} = props;
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
const check =()=>{
    if (name.length > 0 && link.length > 0) {
        onUpdate({name, avatar: link});
    } else {
        ToastAndroid.show('Không được để trống!', ToastAndroid.SHORT);
    }
}

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 28}}>PH41895</Text>
        <TextInput 
            placeholder='Nhập tên mới'
            style={styles.input}
            onChangeText={(text)=> {
                setName(text)
               
            }}
            value={name}
        />
        <TextInput 
            placeholder='Nhập link ảnh'
            style={styles.input}
            onChangeText={(text)=> {
                setLink(text)
                
            }}
            value={link}
        />
        <TouchableOpacity style={styles.btn} onPress={()=> check()}>
            <Text style={{color: 'white'}}>Cập nhật thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=> onClickFooter()}>
            <Text style={{color: 'white'}}>Đổi màu footer</Text>
        </TouchableOpacity>
    </View>
  )
})

export default Body

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1
        
    },
    input:{
        width:'80%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        borderRadius: 15
    },
    btn:{
        marginTop: 10,
        padding:10,
        backgroundColor: '#3399FF',
        
    }
})