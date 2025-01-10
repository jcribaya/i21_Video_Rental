Ext.define('VideoShop.model.Movie',{
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intMovieId',

    fields: [
        { name: 'intMovieId', type: 'int' },
        { name: 'strMovieName', type: 'string' },
        { name: 'intMovieYear', type: 'int' },
        { name: 'strDirector', type: 'string' },
        { name: 'strGenre', type: 'string' },
        { name: 'strDescription', type: 'string'}, 
        { name: 'dblMovieRentalFee', type: 'float' },
    ]
});