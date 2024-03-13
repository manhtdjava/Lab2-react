import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
const colors = ['white','gray','red','yellow','blue','orange'];
export type UserType={
    name: string;
    avatar: string;
}

const Main = () => {
    const [user, setUser] = useState<UserType>({
        name: 'Chưa có tên',
        avatar: 'https://th.bing.com/th/id/R.476b50c7e3b3cbeb88fda131eb07af94?rik=wMxICAtG6ARsGw&pid=ImgRaw&r=0'
    })
    // cập nhật thông tin
const hanldeUpdate = useCallback((_user: UserType)=>{
    setUser(_user)
},[])


    const [lastTimeUpdate, setlastTimeUpdate] = useState('Bạn chưa cập nhật thông tin')
    const [footerColor, setfooterColor] = useState([0]);
    const handelRandomColer = useCallback(
      () => {
        const number =Math.floor(Math.random() * colors.length)
        setfooterColor(colors[number]);
      },
      [],
    )

    useEffect(() => {
        const current = new Date();
        const dateTime =
            current.getDate()+'/' +
            (current.getMonth()+1)+'/'+
            current.getFullYear()+' '+
            current.getHours()+':'+
            current.getMinutes()+':'+
            current.getSeconds();
            setlastTimeUpdate(dateTime);
    
    }, [user])
    
    
  return (
   <View style={{flex:1}}>
        <Header user={user}/>
        <Body onUpdate={hanldeUpdate}
                onClickFooter={handelRandomColer}
            />
        <Footer 
        timeUpdate={lastTimeUpdate}
                backColor={footerColor}
        />
   </View>
  )
}

export default Main

const styles = StyleSheet.create({})