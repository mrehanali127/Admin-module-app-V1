import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import Colors from "../constants/Colors";
import PendingTable from "./tableComponentPending";

const  NotificationCardHome=props=>{
   
    return(
        <View style={styles.notificationCard}>
            <View style={styles.orderHeader}>
                <Text style={styles.headerText}>Pending Orders</Text>
            </View>
            <PendingTable/>
               {/*
                <Text style={styles.title}>Order Id: {props.orderId}</Text>
                <View style={styles.notificationContainer}></View>
                <Text style={styles.subTitle}>Order by:  {props.customerName}</Text>
                <Text style={styles.subTitle}>Order to:  {props.kitchenName}</Text>
                <Text style={styles.subTitle}>Total Amount:  {props.totalAmount}</Text>
                <Text style={styles.subTitle}>Current Status:  {props.currentStatus}</Text>
                <Text style={{...styles.subTitle}}>Order placed at:</Text>
                <Text style={{...styles.subTitle}}>Confirmed by chef:</Text>


            {props.notSeen &&
            <View style={styles.btnContainer}>
            <TouchableOpacity>
                <View style={{...styles.buttonContainer}}>
                    <Text style={styles.btnTitle}>Cancel</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{...styles.buttonContainer}}>
                    <Text style={styles.btnTitle}>Confirm</Text>
                </View>
            </TouchableOpacity>
            </View>
            }  */}
        </View>
    )
};

const styles=StyleSheet.create({


    notificationCard:{
         width:'95%',
         backgroundColor:'#f5f5f5',
         borderRadius:15,
         elevation:5,
        paddingTop:10,
        paddingHorizontal:5,
        paddingBottom:5,
         overflow:'hidden',
         marginVertical:5,
         marginHorizontal:10
       
    },  
    orderHeader:{
        justifyContent:'center',
        alignItems:'center'
    }, 
    headerText:{
        color:Colors.primaryColor,
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold'
    }, 
    



    
    title:{
        fontSize:16,
        fontWeight:"bold",
        color:'#000'
    },
    subTitle:{
        fontSize:16,
        color:"#000"
    },
    notificationContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonContainer:{
        backgroundColor:Colors.primaryColor,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:70,
        marginHorizontal:5,
        borderRadius:10
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:5
    },
    btnTitle:{
        color:Colors.whiteColor,
        fontSize:16,
    }


});

export default NotificationCardHome;