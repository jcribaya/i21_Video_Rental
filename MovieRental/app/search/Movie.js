Ext.define('VideoShop.search.Movie', {
    alias: 'search.vsmovie',
    singleton: true, 

    searchConfigs: [
        {
            title: 'Movie List',  
            api: {
                read: './videoshop/api/movie/Get' 
            },
            columns: [
                {dataIndex: 'intMovieId', text: 'Movie ID', dataType: 'numeric', key: true, hidden: true}, 
                { dataIndex: 'strMovieName', text: 'Movie Name', dataType: 'string', flex: 1 },
                { dataIndex: 'intMovieYear', text: 'Movie Year',  dataType: 'numeric', flex: 1 },
                { dataIndex: 'strDirector', text: 'Director',  dataType: 'string', flex: 1 },
                { dataIndex: 'strGenre', text: 'Genre',  dataType: 'string', flex: 1 },
                { dataIndex: 'strDescription', text: 'Description',  dataType: 'string', flex: 1},  
                { dataIndex: 'dblMovieRentalFee', text: 'Movie Rental Fee',  dataType: 'float', flex: 1 },
            ]
        }
    ], 
}); 