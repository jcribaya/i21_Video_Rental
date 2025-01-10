Ext.define('VideoShop.search.Customer', {
    alias: 'search.vscustomer',
    singleton: true, 

    searchConfigs: [
        {
            title: 'Customer List',  
            api: {
                read: './videoshop/api/customer/Get' 
            },
            columns: [
                {dataIndex: 'intCustomerId', text: 'Customer Header ID', dataType: 'numeric', key: true, hidden: true}, 
                { dataIndex: 'strLastName', text: 'Last Name', dataType: 'string', flex: 1 },
                { dataIndex: 'strFirstName', text: 'First Name',  dataType: 'string', flex: 1 },
                { dataIndex: 'strMiddleName', text: 'Middle Name',  dataType: 'string', flex: 1 },
                { dataIndex: 'strEmail', text: 'Email',  dataType: 'string', flex: 1 },
                { dataIndex: 'dtmDateOfBirth', text: 'Date Of Birth',  dataType: 'date', dateFormat: 'Y-m-d', flex: 1 }, 
                { dataIndex: 'strStreet', text: 'Street',  dataType: 'string', flex: 1 },
                { dataIndex: 'strCity', text: 'City',  dataType: 'string', flex: 1 },
                { dataIndex: 'strProvince', text: 'Province',  dataType: 'string', flex: 1 },
                { dataIndex: 'strZipCode', text: 'Zip Code',  dataType: 'string', flex: 1 },
                { dataIndex: 'dtmDRegistrationDate', text: 'Registration Date',  dataType: 'date', dateFormat: 'Y-m-d', flex: 1 },
                { dataIndex: 'dblMemberBalance', text: 'Member Balance',  dataType: 'float', flex: 1 },
            ]
        }
    ], 
}); 