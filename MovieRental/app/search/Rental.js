Ext.define('VideoShop.search.Rental', {
    alias: 'search.vsrental',
    singleton: true, 

    searchConfigs: [
        {
            title: 'Rental List',  
            api: {
                read: './videoshop/api/rental/Get' 
            },
            columns: [
                {dataIndex: 'intRentalHeaderId', text: 'Rental Header ID', dataType: 'numeric', key: true, hidden: true}, 
                { dataIndex: 'intCustomerId', text: 'Customer ID', dataType: 'string', flex: 1 }, 
                { dataIndex: 'dtmRentedDate', text: 'Rented Date',  dataType: 'date', dateFormat: 'Y-m-d', flex: 1 }, 
                { dataIndex: 'dtmReturnDate', text: 'Return Date',  dataType: 'date', dateFormat: 'Y-m-d', flex: 1 },
            ]
        }
    ], 
}); 