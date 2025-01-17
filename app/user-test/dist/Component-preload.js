//@ui5-bundle usertest/Component-preload.js
sap.ui.require.preload({
	"usertest/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("usertest.Component",{metadata:{manifest:"json"}})});
},
	"usertest/i18n/i18n.properties":'# This is the resource bundle for usertest\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,27\nflpTitle=User Test\n',
	"usertest/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"usertest","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.1","toolsId":"36a1621e-f820-44d6-8a70-e3f0576dbfdd"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"UserTest-display":{"semanticObject":"UserTest","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.126.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"usertest.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"AuthorsList","target":"AuthorsList"},{"pattern":"Authors({key}):?query:","name":"AuthorsObjectPage","target":"AuthorsObjectPage"},{"pattern":"Authors({key})/toBooks({key2}):?query:","name":"BooksObjectPage","target":"BooksObjectPage"}],"targets":{"AuthorsList":{"type":"Component","id":"AuthorsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Authors","variantManagement":"Page","navigation":{"Authors":{"detail":{"route":"AuthorsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"AuthorsObjectPage":{"type":"Component","id":"AuthorsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Authors","navigation":{"toBooks":{"detail":{"route":"BooksObjectPage"}}}}}},"BooksObjectPage":{"type":"Component","id":"BooksObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Authors/toBooks"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"roles-test"}}'
});
//# sourceMappingURL=Component-preload.js.map
