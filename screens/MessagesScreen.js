import {FlatList, View} from 'react-native'
import React ,{useState}from 'react'


import ListItemSeparator from '../components/ListItemSeparator'
import ListItem from '../components/ListItem'
import Screen from './Screen'
import ListItemDeleteAction from '../components/ListItemDeleteAction'



const initialMessages =[
    {
        id:1,
        title:"T1",
        description:"D1",
        image:require("../images/mosh.jpg")
    },
    {
        id:2,
        title:"T2",
        description:"D2",
        image:require("../images/mosh.jpg")
    }
]


export default function MessagesScreen() {
    
    const [refreshing,setRefreshing] = useState(false)
    const [messages,setMessages] = useState(initialMessages)
    const handleDelete = message => {
        setMessages(messages.filter(m=>m.id !== message.id))
    }

  return (
      <Screen style={{flex:1}}>
        <FlatList
            data={messages}
            keyExtractor={message=>message.id.toString()}
            renderItem={({item})=><ListItem 
            renderRightActions={()=>(<ListItemDeleteAction onPress={()=>handleDelete(item)}></ListItemDeleteAction>)}
              onPress={()=>{}} 
              title={item.title} 
              subTitle={item.description} 
              image={item.image}/>}

            ItemSeparatorComponent={()=>(
               <ListItemSeparator  />
             ) }
             refreshing={refreshing}
             onRefresh={()=>{setMessages([
                {
                    id:1,
                    title:"T1",
                    description:"D1",
                    image:require("../images/mosh.jpg")
                },
                {
                    id:2,
                    title:"T2",
                    description:"D2",
                    image:require("../images/mosh.jpg")
                }
             ])}}
             
        />
    </Screen>
  )
}
