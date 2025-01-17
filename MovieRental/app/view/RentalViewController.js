/*
 * File: app/view/RentalViewController.js
 *
 * This file was generated by Sencha Architect version 4.3.6.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('VideoShop.view.RentalViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vsrental',

    config: {
        binding: {
          cboCustomer: {
              value: '{current.intCustomerId}',
              store: '{bufferedcustomer}', 
              origValueField: 'intCustomerId',
              origUpdateField: 'intCustomerId',  
          },
            dtmRentDate: {
                value: '{current.dtmRentedDate}'
            },
            dtmReturnDate: {
                value: '{current.dtmReturnDate}'
            },
            grdRentMovie: {
              colDetailMovie: {   
                    dataIndex: 'strMovieName',  
                      editor: {      
                        origValueField: 'intMovieId', 
                        origUpdateField: 'intMovieId',  
                        store: '{bufferedmovie}' 
                    } 
                }
            }
        }
    },
    show: function(config) {
        var me = this,
            win = this.getView(),
            action = config && config.action;
        if (action) {
          win.show();
          var context = win.context ? win.context.initialize() : me.setupContext();
          if (action === 'new') {
            context.data.addRecord();
          } else {
            context.data.load({ filters: config.filters });
          }
        }
      },

      setupContext: function() {
        var me = this,
            win = me.getView();

        win.context = Ext.create('iRely.Engine', {
          window: win,
          store: Ext.create('VideoShop.store.Rental', { pageSize: 1 }),
          binding: me.config.binding, 
          details: [{
            key: 'tblVSRentalHeaderDetails',
            lazy: true,
            component: Ext.create('iRely.grid.Manager', {
              grid: win.down('#grdRentMovie')
            })    
          }], 
          enableAudit: true
        }); 
        return win.context;
      }

      
});
