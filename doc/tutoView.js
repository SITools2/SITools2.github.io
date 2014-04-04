Ext.onReady(function(){
	var myData = [{
		entete : 'Getting Started :', 
		name : 'Installation', 
		description : "This tutorial explains how to install SITools2", 
		url : "http://sitools2.sourceforge.net/doc/installation.htm"
	}, {
		entete : 'Getting Started, part1 : ', 
		name : 'Defining a data source', 
		description : "The fist step for an administrator is to define a data source. This tutorial explains how to define a relational database as a data source", 
		url : "http://sitools2.sourceforge.net/doc/createDb.htm"
	}, {
		entete : 'Getting Started, part2 : ', 
		name : 'Defining a dataset', 
		description : "From a defined data source, the administrator can define a set of datasets. This tutorials explains how to define a simple dataset", 
		url : "http://sitools2.sourceforge.net/doc/createDataset.htm"
	}, {
		entete : 'Getting Started, part3 : ', 
		name : 'Defining a project', 
		description : "When a set of datasets is defined, it is then possible to publish the datasets through a web client by the use of a project. This tutorial explains how to create a project", 
		url : "http://sitools2.sourceforge.net/doc/project.htm"
	}, {
		entete : 'Getting Started, part4 : ', 
		name : 'Looking at the result', 
		description : "This tutorials shows a brief result of the whole Getting started from the client side", 
		url : "http://sitools2.sourceforge.net/doc/project_client.htm"
	}];
	var store = new Ext.data.JsonStore({
        fields: [
           {name: 'entete'},
           {name: 'name'},
           {name: 'description'},
           {name: 'url'}
        ]
    });
    store.loadData(myData);
    
    var myDataView = new Ext.DataView({
        store : store, 
        tpl : new Ext.XTemplate('<ul>', '<tpl for=".">', 
				'<li id="{id}" class="tuto">', 
				'<img width="80" height="80" src="http://sitools2.sourceforge.net/images/video.png" />', 
				'<strong>{entete}</strong>',
                '<strong>{name}</strong>',
                '<span>{description} </span>', '</li>', '</tpl>', '</ul>', 
                {
				compiled : true, 
				disableFormats : true
            }),

        id : 'tutoDataView',
        itemSelector : 'li.tuto',
        overClass : 'tuto-hover',
        singleSelect : true,
        multiSelect : false,
        autoScroll : true,
        listeners : {
            scope : this,
            click : function (dataView, index, node, e) {
                // get the projectId
                
                var data = dataView.getRecord(node).data;
                var url = data.url;
                window.open(url);
            }
        }
    });

    myDataView.render("grid-1");

	var myData2 = [{
		name : 'Buidling a dataset with a Join condition and Relationship between datasets', 
		description : "This tutorial explains how to build a dataset based on a Join condition. Then this dataset is used to create a relationship with another", 
		url : "http://sitools2.sourceforge.net/doc/datasetLink.htm"
	}, {
		name : 'Setting up a HTML export service on a result', 
		description : "This tutorial explains how to configure a SVA plugin. The example is based on a HTML export", 
		url : "http://sitools2.sourceforge.net/doc/sva.htm"
	}, {
		name : 'Adding semantics to your dataset', 
		description : "This tutorial explains how to create a dictionary and to set a dictionary's element to a dataset's attribute", 
		url : "http://sitools2.sourceforge.net/doc/Definition.htm"
	}, {
		name : 'Unit conversion', 
		description : "This tutorial explains how to create a physical dimension and to add units in it. Then, this physical dimension can be exploited for automatic unit conversion", 
		url : "http://sitools2.sourceforge.net/doc/units.htm"
	}];
	var store2 = new Ext.data.JsonStore({
        fields: [
           {name: 'name'},
           {name: 'description'},
           {name: 'url'}
        ]
    });
    store2.loadData(myData2);
    
    var myDataView2 = new Ext.DataView({
        store : store2, 
        tpl : new Ext.XTemplate('<ul>', '<tpl for=".">', 
				'<li id="{id}" class="tuto">', 
				'<img width="80" height="80" src="http://sitools2.sourceforge.net/images/video.png" />', 
				'<strong>{name}</strong>',
                '<span>{description} </span>', '</li>', '</tpl>', '</ul>', 
                {
				compiled : true, 
				disableFormats : true
            }),

        id : 'tutoDataView',
        itemSelector : 'li.tuto',
        overClass : 'tuto-hover',
        singleSelect : true,
        multiSelect : false,
        autoScroll : true,
        listeners : {
            scope : this,
            click : function (dataView, index, node, e) {
                // get the projectId
                
                var data = dataView.getRecord(node).data;
                var url = data.url;
                window.open(url);
            }
        }
    });

    myDataView2.render("grid-2");

	var myData3 = [{
                entete : 'Architecture Document (V2.0)',
                name : 'French version',
                description : "This document explains the SITools2's architecture",
                url : "http://sourceforge.net/projects/sitools2/files/Documentation/V2.0/DAR-SITOOLS2-V2-1.1.pdf"
        }, {
                entete : 'Design document (V2.0)',
                name : 'English version',
                description : "This document explains the SITools2's design",
                url : "http://sourceforge.net/projects/sitools2/files/Documentation/V2.0/DCP-SITOOLS2-V2-1.0.pdf"
        }, {
                entete : 'Developer Guide (V2.0)',
                name : 'French version',
                description : "This document explains how to create plugins for SITools2",
                url : "http://sourceforge.net/projects/sitools2/files/Documentation/V2.0/DG-SITOOLS2-V2-1.2.pdf"
        }, {
                entete : 'Administrator Guide (V2.0)',
                name : 'French version',
                description : "This document should help the administrator to configure SITools2",
                url : "http://sourceforge.net/projects/sitools2/files/Documentation/V2.0/UGA-SITOOLS2-V2-1.0.pdf"
        }, {
                entete : 'Developer Guide (V2.1)',
                name : 'French version',
                description : "This document explains how to create plugins for SITools2",
                url : "http://sourceforge.net/projects/sitools2/files/Documentation/V2.1/DG-SITOOLS2-V2-2.0.pdf"
        }, {
                entete : 'Developer Guide (V2.2)',
                name : 'French version',
                description : "This document explains how to create plugins for SITools2",
                url : "http://sourceforge.net/projects/sitools2/files/Documentation/V2.2/DG-SITOOLS2-V2-1.6.pdf"
        }


];
	var store = new Ext.data.JsonStore({
        fields: [
           {name: 'entete'},
           {name: 'name'},
           {name: 'description'},
           {name: 'url'}
        ]
    });
    store.loadData(myData3);
    
    var myDataView3 = new Ext.DataView({
        store : store, 
        tpl : new Ext.XTemplate('<ul>', '<tpl for=".">', 
				'<li id="{id}" class="tuto">', 
				'<img width="80" height="80" src="http://sitools2.sourceforge.net/images/download-pdf.png" />', 
				'<strong>{entete}</strong>',
                '<strong>{name}</strong>',
                '<span>{description} </span>', '</li>', '</tpl>', '</ul>', 
                {
				compiled : true, 
				disableFormats : true
            }),

        id : 'tutoDataView',
        itemSelector : 'li.tuto',
        overClass : 'tuto-hover',
        singleSelect : true,
        multiSelect : false,
        autoScroll : true,
        listeners : {
            scope : this,
            click : function (dataView, index, node, e) {
                // get the projectId
                
                var data = dataView.getRecord(node).data;
                var url = data.url;
                window.open(url);
            }
        }
    });

myDataView3.render("grid-3");
    
});


