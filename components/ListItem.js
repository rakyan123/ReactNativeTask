import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

const ListItem = (props) => {
    return(
        <View style={styles.listView}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>
             {props.item}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
   listView: {
       width:'95%',
       alignSelf:'center',
       display:'flex',
       alignItems:'flex-start',
       marginVertical:15,
       borderBottomColor:'black',
       borderBottomWidth:1
   }
})

export default ListItem