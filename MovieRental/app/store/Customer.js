Ext.define('VideoShop.store.Customer',{
    extend: 'Ext.data.Store',
    alias: 'store.vscustomer',

    requires: [
        'VideoShop.model.Customer'
    ],

    model: 'VideoShop.model.Customer',
    storeId: 'Customer',
    pagesize: 50,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './videoshop/api/customer/get',
            update: './videoshop/api/customer/put',
            create: './videoshop/api/customer/post',
            destroy: './videoshop/api/customer/delete',
        },
        reader:{
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message',
        },
        writer: {
            type: 'json',
            allowSingle: false
        }
    }

});