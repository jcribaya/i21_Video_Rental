Ext.define('VideoShop.store.BufferedCustomer',{
    extend: 'Ext.data.BufferedStore',
    alias: 'store.vsbufferedcustomer',

    requires: [
        'VideoShop.model.Customer'
    ],

    model: 'VideoShop.model.Customer',
    storeId: 'BufferedCustomer',
    pagesize: 100,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './videoshop/api/customer/search'
        },
        reader:{
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message',
        }
    }

});