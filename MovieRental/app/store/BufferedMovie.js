Ext.define('VideoShop.store.BufferedMovie',{
    extend: 'Ext.data.BufferedStore',
    alias: 'store.vsbufferedmovie',

    requires: [
        'VideoShop.model.Movie'
    ],

    model: 'VideoShop.model.Movie',
    storeId: 'BufferedMovie',
    pagesize: 100,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './videoshop/api/movie/search'
        },
        reader:{
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message',
        }
    }

});