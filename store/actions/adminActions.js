export const GET_ORDER_DATA='GET_ORDER_DATA';
export const GET_ADMIN_DATA='GET_ADMIN_DATA';
export const GET_RATING_DATA='GET_RATING_DATA';
export const GET_DISHES_DATA='GET_DISHES_DATA';
export const GET_ORDER_DETAILS='GET_ORDER_DETAILS';
export const GET_ORDER_COUNTS='GET_ORDER_COUNTS';
export const UPDATE_ORDER_COUNTS='UPDATE_ORDER_COUNTS';
export const UPDATE_ORDER_STATUS='UPDATE_ORDER_STATUS';
export const GET_STAFF_DATA='GET_STAFF_DATA';
export const GET_STAFF_ASSIGNED='GET_STAFF_ASSIGNED';
export const GET_STAFF_AVAILABLE='GET_STAFF_AVAILABLE';
export const UPDATE_STAFF_STATUS='UPDATE_STAFF_STATUS';
export const GET_AMOUNT_DATA='GET_AMOUNT_DATA';
export const GET_KITCHENS_PAYMENTS='GET_KITCHENS_PAYMENTS';
export const UPDATE_PAYMENTS='UPATE_PAYMENTS';
export const UPDATE_KITCHEN_PAYMENT='UPDATE_KITCHEN_PAYMENT';
export const UPDATE_KITCHEN_PAYMENT2='UPDATE_KITCHEN_PAYMENT2';



export const getOrderData=(items)=>{
    return{type:GET_ORDER_DATA,orders:items};
}

export const getDishesData=(items)=>{
    return{type:GET_DISHES_DATA,dishes:items};
}

export const getStaffData=(items)=>{
    return{type:GET_STAFF_DATA,staff:items};
}

export const getKitchensPayments=(items)=>{
    return{type:GET_KITCHENS_PAYMENTS,payments:items};
}

export const getAdminData=(item)=>{
    return{type:GET_ADMIN_DATA,admin:item};
}


export const getStaffAssigned=(items)=>{
    return{type:GET_STAFF_ASSIGNED,staff:items};
}

export const getStaffAvailable=(items)=>{
    return{type:GET_STAFF_AVAILABLE,staff:items};
}

export const getAmountData=(itemObj)=>{
    return{type:GET_AMOUNT_DATA,amount:itemObj};
}

export const getOrderDetails=(items)=>{
    return{type:GET_ORDER_DETAILS,orderDetails:items};

}

export const getOrderCounts=(countsObj)=>{
    return{type:GET_ORDER_COUNTS,orderCounts:countsObj};
}

export const getRatingData=(items)=>{
    return{type:GET_RATING_DATA,ratings:items};
}


export const updateOrderCounts=(orderType)=>{
    return{type:UPDATE_ORDER_COUNTS,orderStatus:orderType};
}

export const updateOrderStatus=(item,status)=>{
    return{type:UPDATE_ORDER_STATUS,orderId:item,orderStatus:status};
}

export const updateStaffStatus=(item,status)=>{
    return{type:UPDATE_STAFF_STATUS,staffId:item,staffStatus:status};
}

export const updateKitchenPayment=(kitchen,pending,date)=>{
    return{type:UPDATE_KITCHEN_PAYMENT,kitchen:kitchen,pending:pending,date:date};
}

export const updateKitchenPayment2=(kitchen,total,pending)=>{
    return{type:UPDATE_KITCHEN_PAYMENT2,kitchen:kitchen,total:total,pending:pending};
}
