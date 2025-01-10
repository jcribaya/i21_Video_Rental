Ext.define('VideoShop.controller.VideoShop', {
    extend: 'i21.controller.Module',
    alias: 'controller.videoshop',
    moduleName: 'VideoShop',
    requires:[   
    ],
    singleton:true,
 
    constructor: function() {
        this.superclass.constructor.call(this);
    },
     
    init: function(){
    },
 
    isReady: function(){
        var me = this;

      return true;
    },

    onDestroy: function() {
        this.callParent(arguments);
    }

    
});