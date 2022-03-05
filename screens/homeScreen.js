import React,{useEffect,useState} from "react";
import { View,Text,StyleSheet, Button, FlatList, Dimensions,TouchableOpacity,RefreshControl} from "react-native";
import * as Notifications from 'expo-notifications';
import Colors from '../constants/Colors';
import OrdersCard from "../components/ordersCard";
import { HeaderButtons,Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/customHeaderButton";
import NotificationCardHome from "../components/NotificationCardHome";
import StaffCardHome from "../components/staffCardHome";
import PendingTable from "../components/tableComponentPending";
import { useDispatch,useSelector } from "react-redux";
import { getOrderCounts,getOrderData,getStaffData,getAmountData,getStaffAssigned,getAdminData } from "../store/actions/adminActions";
import { ScrollView } from "react-native-gesture-handler";
import IP from "../constants/IP";


const HomeScreen=(props)=>{

    const [refreshing, setRefreshing] = useState(true);
    const [isOrdersLoading,setOrdersLoading]=useState(true);
    const [isStaffLoading,setStaffLoading]=useState(true);
    const [isStaffAvLoading,setStaffAvLoading]=useState(true);
    const [isAmountLoading,setAmountLoading]=useState(true);
    const [OrderCountsDetails,setOrderCountsDetails]=useState([]);
    const dispatch=useDispatch();

    
    const adminData=props.navigation.getParam('admin');
    
    let AdminToken;

    const totalOrdersCounts=useSelector(state=>state.admin.OrdersCounts);
    const ordersData=useSelector(state=>state.admin.Orders);
    const staffRecord=useSelector(state=>state.admin.Staff);
    const adminDetail=useSelector(state=>state.admin.AdminDetails);
    const staffAssignedRecord=useSelector(state=>state.admin.StaffAssigned);
    const amountData=useSelector(state=>state.admin.AmountData);
   
    
    useEffect(()=>{
        Notifications.getExpoPushTokenAsync()
        .then(response=>{
          console.log(response);
          AdminToken=response.data;
          console.log(AdminToken);
        })
        .then(()=>dispatch(getAdminData(adminData)))
        .catch((error)=>console.error(error))
      },[]);


    
    useEffect(()=>{
            fetch(`http://${IP.ip}:3000/orderCounts/countsForAdmin`)
            .then((response)=>response.json())
            .then((response)=>setOrderCountsDetails(response[0]))
            .then(()=>dispatch(getOrderCounts(OrderCountsDetails)))
            //.then(()=>console.log(totalOrdersCounts))
            
        .catch((error)=>console.error(error))
        .finally(()=>setRefreshing(false));

    },[refreshing])


    useEffect(()=>{     
       fetch(`http://${IP.ip}:3000/order/names/ordersForAdmin`)
        .then((response)=>response.json())
        .then((response)=>dispatch(getOrderData(response)))
        //.then((response)=>setAllOrdersData(response))
        //.then(()=>dispatch(getOrderData(allOrdersData)))
        //.then(()=>console.log(ordersData))
        //.then(()=>setPendingOrders(preparePendingOrdersForTable))
    .catch((error)=>console.error(error))
    .finally(()=>setOrdersLoading(false));
},[isOrdersLoading,refreshing])


useEffect(()=>{ 
    fetch(`http://${IP.ip}:3000/staff`)
    .then((response)=>response.json())
    .then((response)=>dispatch(getStaffData(response)))
    //.then((response)=>setStaffData(response))
    //.then(()=>dispatch(getStaffData(staffData)))
    //.then(()=>console.log(staffRecord))
    .catch((error)=>console.error(error))
    .finally(()=>setStaffLoading(false));
},[isStaffLoading,refreshing])

useEffect(()=>{ 
    fetch(`http://${IP.ip}:3000/staff/staffAvailable/assigned`)
    .then((response)=>response.json())
    .then((response)=>dispatch(getStaffAssigned(response))) 
    .then(()=>console.log(staffAssignedRecord))
    .catch((error)=>console.error(error))
    .finally(()=>setStaffAvLoading(false));
},[isStaffAvLoading,refreshing])




useEffect(()=>{
    fetch(`http://${IP.ip}:3000/payments`)
    .then((response)=>response.json())
    .then((response)=>dispatch(getAmountData(response[0])))
    .then(()=>console.log(amountData))
    .then(()=>setAmountLoading(false))
    .catch((error)=>console.error(error))
  },[isAmountLoading,refreshing]);


    
    /*
    useEffect(()=>{
        let dataArray=[];
        let staffArray=[];
        fetch(`http://${IP.ip}:3000/order/names/ordersForAdmin`)
        .then((response)=>response.json())
        .then((response)=>setAllOrdersData(response))
        .then(()=>dispatch(getOrderData(allOrdersData)))
        .then(()=>console.log(ordersData))
        
        .then(()=>{
            pendingOrders.map((row)=>{
                 let orderId=row.order_id;
                 let custId=row.cust_id;
                 let chefId=row.chef_id;
                 let time=row.total_amount;
                 let newRow=[orderId,custId,chefId,time];
                 dataArray.push(newRow);       
        })
        })
        .then(()=>setTableData(dataArray))
        .then(()=>{
            fetch(`http://${IP.ip}:3000/staff/1`)
        .then((response)=>response.json())
        .then((response)=>setStaff(response))
        .then(()=>{
            staff.map((row)=>{
                 let staffId=row.staff_id;
                 let name=row.firstname;
                 let phone=row.contact;
                 let newRow=[staffId,name,phone];
                 staffArray.push(newRow);       
        })
        }).then(()=>setRefreshing(false))
        .then(()=>setStaffTableData(staffArray))

        })
        .then(async ()=>{
            await fetch(`http://${IP.ip}:3000/orderCounts/countsForAdmin`)
            .then((response)=>response.json())
            .then((response)=>setOrderCountsDetails(response[0]))
            .then(()=>dispatch(getOrderCounts(OrderCountsDetails)))

        })
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false));
      },[refreshing]);*/

    const preparePendingOrdersForTable=(orders)=>{
        const pendings=orders.filter(item=>item.status==='pending');
        const tempArray=[];
        pendings.map((row)=>{
            let orderId=row.order_id;
            let custName=row.firstname;
            let kitchen=row.kitchen_name;
            let amount=row.total_amount;
            let newRow=[orderId,custName,kitchen,amount];
            tempArray.push(newRow);  
         }) 
        
        return tempArray;
    }


    const prepareStaffForTable=(staff)=>{
        const available=staff.filter(item=>item.status===1);
        const tempArray=[];
        available.map((row)=>{
            let staffId=row.staff_id;
            let name=row.firstname;
            let phone=row.contact;
            let newRow=[staffId,name,phone];
            tempArray.push(newRow);  
         }) 
        
        return tempArray;
    }

    const prepareAssignedStaffForTable=(staff)=>{
        const tempArray=[];
        staff.map((row)=>{
            let staffId=row.staff_id;
            let orderId=row.order_id;
            let dpart=row.departure;
            let arriv=row.arrival;
            let newRow=[staffId,orderId,dpart,arriv];
            tempArray.push(newRow);  
         }) 
        console.log(tempArray);       
        return tempArray;
    }

    

    const moveToNotifications=()=>{
        props.navigation.navigate({
            routeName:'Notifications',
        });
    }
    
        return(
          <View style={styles.screen}>
              
              <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={()=>{setRefreshing(true)}}/>}>
              <OrdersCard pending={totalOrdersCounts.pendingCounts} box1="Pending" confirmed={totalOrdersCounts.confirmedCounts} box2="Confirmed" delivered={totalOrdersCounts.deliveredCounts} box3="Delivered" header="Orders Summary"/>
              <NotificationCardHome tableData={preparePendingOrdersForTable(ordersData)}
            onSelect={()=>{}}/>
            {/*<StaffCardHome tableData={prepareStaffForTable(staffRecord)}/>*/}
            <StaffCardHome tableData={prepareAssignedStaffForTable(staffAssignedRecord)}/>
            </ScrollView>
          </View>
        )
    };

    HomeScreen.navigationOptions=navigationData=>{
       const moveNotifications=()=>{
            navigationData.navigation.navigate({
                routeName:'Notifications'
            })
       }
        return{
            headerRight: ()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="notification" iconName='ios-notifications' onPress={moveNotifications}/>
            </HeaderButtons>
        }
    }
    

const styles=StyleSheet.create(
    {
        screen:{
            flex:1,
        }
       
    }
)

export default HomeScreen;
