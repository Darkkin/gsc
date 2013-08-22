//	HYPE.documents["LensX SITE"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "LensX%20SITE.hyperesources";
	var documentName = "LensX SITE";
	var documentLoaderFilename = "lensxsite_hype_generated_script.js";
	var mainContainerID = "lensxsite_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"LenSx%20BeautyShot%20-%20Filled%20Screens%20-%201-26-11.JPG",p:1},"1":{n:"lensx.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:3}],v:{"7":{aV:8,w:"Georgia Center for Sight",a:0,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"9",aT:8,b:0,t:24,aS:8,aU:8,G:"#FFFFFF",v:"bold"},"3":{aV:8,w:"Here At Last!",a:0,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"6",k:"div",b:93,aT:8,aS:8,F:"center",e:"0.000000",t:48,aU:8,G:"#FFFFFF"},"8":{aV:8,w:"<p style=\"margin-top: 0px; margin-bottom: 10px; text-align: center; font-style: normal; font-variant: normal; font-size: 30px; line-height: normal; font-family: 'Minion Pro'; \">800-287-2519</p>",a:57,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:162,k:"div",z:"3",d:30,bF:"9",aT:8,t:16,b:28,aU:8,G:"#FFFFFF",aS:8},"4":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:84,j:"absolute",r:"inline",c:300,k:"div",z:"3",d:450,e:"0.000000"},"9":{k:"div",x:"visible",c:296,d:74,z:"2",r:"inline",a:4,j:"absolute",e:"0.000000",b:526},"5":{G:"#000000",bB:0,c:298,d:598,I:"Solid",r:"inline",e:"1.000000",J:"Solid",bC:0,K:"Solid",g:"#000000",L:"Solid",aP:"pointer",M:1,w:"",N:1,A:"#A0A0A0",j:"absolute",aA:[{goToURL:"http://www.gcs.lightyourmusic.com/?utm_source=onlineathens&utm_medium=sidebar&utm_campaign=lensx",type:5,openInNewWindow:true}],k:"div",O:1,aZ:0,x:"visible",z:"1",B:"#A0A0A0",D:"#A0A0A0",P:1,C:"#A0A0A0",a:0,bA:"#000000",aD:[{type:0}],b:0},"6":{o:"content-box",h:"1",x:"visible",a:-2,q:"100% 100%",b:345,j:"absolute",r:"none",c:302,k:"div",z:"7",d:255},"10":{c:306,d:598,I:"Solid",e:"0.000000",J:"Solid",bD:"auto",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:5}],O:1,B:"#A0A0A0",z:"8",P:1,D:"#A0A0A0",C:"#A0A0A0",a:0,b:0},"2":{aU:8,G:"#FFFFFF",c:251,aV:8,r:"inline",d:147,e:"0.000000",t:52,Z:"break-word",w:"Bladeless Cataract Surgery",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:16,F:"center",b:165}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:6.16,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.29,i:"e",e:"1.000000",s:"0.000000",o:"3"},{f:"2",t:0,d:0.28,i:"e",e:"0.000000",s:"0.000000",o:"2"},{f:"2",t:0.28,d:1.03,i:"e",e:"1.000000",s:"0.000000",o:"2"},{f:"2",t:0.29,d:1.05,i:"e",e:"1.000000",s:"1.000000",o:"3"},{f:"2",t:2,d:2,i:"b",e:-14,s:165,o:"2"},{f:"2",t:2.04,d:0.24,i:"e",e:"0.000000",s:"1.000000",o:"3"},{f:"2",t:2.29,d:2,i:"e",e:"1.000000",s:"0.000000",o:"9"},{f:"2",t:3,d:1.01,i:"e",e:"1.000000",s:"0.000000",o:"4"}],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

