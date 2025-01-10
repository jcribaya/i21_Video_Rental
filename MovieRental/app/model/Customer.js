Ext.define('VideoShop.model.Customer',{
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intCustomerId',

    fields: [
        { name: 'intCustomerId', type: 'int' },
        { name: 'strLastName', type: 'string' },
        { name: 'strFirstName', type: 'string' },
        { name: 'strMiddleName', type: 'string' },
        { name: 'strEmail', type: 'string' },
        { name: 'dtmDateOfBirth', type: 'date', dateFormat: 'c' },
        { name: 'strStreet', type: 'string' },
        { name: 'strCity', type: 'string' },
        { name: 'strProvince', type: 'string' },
        { name: 'strZipCode', type: 'string' },
        { name: 'dtmDRegistrationDate', type: 'date', dateFormat: 'c', allowNull: true },
        { name: 'dblMemberBalance', type: 'float' } 
    ]
});