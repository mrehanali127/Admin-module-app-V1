import React from "react";
import { View,Text,StyleSheet, Button, FlatList, Dimensions,TouchableOpacity } from "react-native";
import Colors from '../constants/Colors';

import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { ScrollView } from "react-native-gesture-handler";

const CONTENT = {
  tableHead: ['Staff#','Order#','Departure','Arrival'],
  tableData: [
    ['09','Rehan Ali', '03082562292','100'],
    ['0','a', 'b','000'],
    ['0','1', '2','000'],
    ['0','a', 'b','000'],
    ['0','a', 'b','000'],
    ['0','a', 'b','000'],
  ],
};


const AssignedStaffTableHome=(props)=>{

    
        return(
            <View style={styles.container}>
              <ScrollView>  
            <Table borderStyle={{ borderWidth: 0.7 }}>
              <Row
                data={CONTENT.tableHead}
                flexArr={[1, 1,1,1]}
                style={styles.head}
                textStyle={styles.text}
              /> 
              <TableWrapper style={styles.wrapper}>
                <Rows
                  //data={CONTENT.tableData}
                  data={props.tableData}
                  flexArr={[1,1,1,1]}
                  style={styles.row}
                  onPress={()=>{console.log('')}}
                  textStyle={styles.text}
                />
              </TableWrapper>
              
            </Table>
            </ScrollView>
            
          </View>
        )
    };


const styles=StyleSheet.create(
    {
        container: { flex: 1, backgroundColor: '#fff',height:150},
        head: { height: 35, backgroundColor: 'orange'},
        wrapper: { flexDirection: 'row' },
        row: { height: 26 },
        text: { textAlign: 'center' },
       
    }
)

export default AssignedStaffTableHome;
