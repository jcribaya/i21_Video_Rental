Ext.define('VideoShop.store.Rental',{
    extend: 'Ext.data.Store',
    alias: 'store.vsrental',

    requires: [
        'VideoShop.model.Rental'
    ],

    model: 'VideoShop.model.Rental',
    storeId: 'Rental',
    pagesize: 50,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './videoshop/api/rental/get',
            update: './videoshop/api/rental/put',
            create: './videoshop/api/rental/post',
            destroy: './videoshop/api/rental/delete',
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