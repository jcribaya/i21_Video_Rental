Ext.define('VideoShop.model.Rental',{
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field', 
        'VideoShop.model.RentalDetail'
    ],

    idProperty: 'intRentalHeaderId',

    fields: [
        { name: 'intRentalHeaderId', type: 'int' }, 
        { name: 'intCustomerId', type: 'int'},
        { name: 'dtmRentedDate', type: 'date', dateFormat: 'c' },
        { name: 'dtmReturnDate', type: 'date', dateFormat: 'c', allowNull: true },
    ]
});