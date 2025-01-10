Ext.define('VideoShop.store.Movie',{
    extend: 'Ext.data.Store',
    alias: 'store.vsmovie',

    requires: [
        'VideoShop.model.Movie'
    ],

    model: 'VideoShop.model.Movie',
    storeId: 'Movie',
    pagesize: 50,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './videoshop/api/movie/get',
            update: './videoshop/api/movie/put',
            create: './videoshop/api/movie/post',
            destroy: './videoshop/api/movie/delete',
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