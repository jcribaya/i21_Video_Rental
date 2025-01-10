Ext.define('VideoShop.model.RentalDetail',{
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intRentalHeaderDetailId',

    fields: [
        { name: 'intRentalHeaderDetailId', type: 'int' },
        { name: 'intRentalHeaderId',  type: 'int',
            reference: {
                type: 'VideoShop.model.Rental',
                inverse: {
                    role: 'tblVSRentalHeaderDetails',
                    storeConfig: {
                        complete: true,
                        proxy: {
                            type: 'ajax',
                            api: {
                                read: './videoshop/api/rentaldetail/get',
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'data',
                                messageProperty: 'message',
                            },
                        },
                    }, 
                }, 
            }
         },
         { name: 'intMovieId',  type: 'int',
            reference: {
                type: 'VideoShop.model.Movie',
                inverse: {
                    role: 'tblVSRentalHeaderDetail',
                    storeConfig: {
                        complete: true,
                        proxy: {
                            type: 'ajax',
                            api: {
                                read: './videoshop/api/movie/get',
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'data',
                                messageProperty: 'message',
                            },
                        },
                    }, 
                }, 
            }
         }
    ]
});