Ext.define('ContentModelViewer.widgets.TreePanel', {
    extend: 'Ext.tree.Panel',
    uses: [
        'Ext.tree.Panel'
    ],
    region: 'west', 
    store:'treemembers',
    autoLoad: false,
    root: 'data',
    rootVisible: false,
    collapsible: true,
    collapseDirection: 'left',
    title: 'Projects',
    width: 200,
    listeners: {
      itemdblclick: {
        fn: function(view, record, item, index, event) {
            //the record is the data node that was clicked
            //the item is the html dom element in the tree that was clicked
            //index is the index of the node relative to its parent
            //nodeId = record.data.id;
            link = record.data.link;
            //leaf = record.data.leaf;
            //htmlId = item.id;
            window.location = link;
        }
      }
    }
});


