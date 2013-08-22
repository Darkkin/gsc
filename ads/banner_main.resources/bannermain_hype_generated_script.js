//	HYPE.documents["banner_main"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "banner_main.resources";
	var documentName = "banner_main";
	var documentLoaderFilename = "bannermain_hype_generated_script.js";
	var mainContainerID = "bannermain_hype_container";

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
	if(typeof HYPE_150 == "undefined") {
		if(typeof window.HYPE_150_DocumentsToLoad == "undefined") {
			window.HYPE_150_DocumentsToLoad = new Array();
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=150';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);
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
	
	var hypeDoc = new HYPE_150();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"LenSx%20BeautyShot%20-%20Filled%20Screens%20-%201-26-11.JPG",p:1},"1":{n:"House-nivo.jpg",p:1},"2":{n:"sign.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:1,sceneSymbol:1}],v:{"15":{x:"visible",k:"div",c:906,d:300,z:"3",e:"0.000000",a:44,j:"absolute",b:0},"3":{aV:8,w:"Bladeless Cataract Surgery",x:"visible",a:0,Z:"break-word",b:104,j:"absolute",r:"inline",z:"2",aS:8,k:"div",aT:8,bF:"15",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",e:"1.000000",t:54,aU:8,G:"#FFFFFF",y:"preserve"},"4":{o:"content-box",h:"0",x:"visible",a:706,q:"100% 100%",b:0,j:"absolute",r:"inline",c:200,z:"1",k:"div",d:300,bF:"15",e:"1.000000"},"14":{aV:8,w:"(800) 287-2519",x:"visible",a:232,Z:"break-word",b:246,j:"absolute",r:"inline",z:"7",aS:8,k:"div",aT:8,s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",F:"left",e:"0.000000",t:36,aU:8,G:"#FFFFFF",y:"preserve"},"5":{aU:8,G:"#FFFFFF",aV:8,r:"inline",e:"0.000000",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",X:1,t:64,Y:"24px",Z:"break-word",w:"<div>Georgia Center for Sight</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"6",aS:8,aT:8,a:0,F:"center",b:236},"6":{c:950,d:300,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,O:0,C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:0,b:0},"2":{aV:8,w:"Here At Last",x:"visible",a:232,Z:"break-word",b:107,j:"absolute",r:"inline",z:"2",k:"div",aS:8,aT:8,s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",t:48,y:"preserve",aU:8,G:"#FFFFFF"},"18":{c:948,d:298,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"8",k:"div",D:"#A0A0A0",aA:[{type:5,goToURL:"http://www.georgiacenterforsight.com/?utm_source=onlineathens&utm_medium=banner&utm_campaign=lensx",openInNewWindow:true}],a:0,b:0}},n:"Main",T:{kTimelineDefaultIdentifier:{d:4.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0.13,d:1.02,i:"a",e:232,r:1,s:232,o:"2"},{f:"2",t:0.13,d:1.02,i:"b",e:0,r:1,s:107,o:"2"},{f:"2",t:1.15,d:1.11,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:2.26,d:1.19,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"17":{c:950,d:300,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,O:0,C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:0,b:0},"13":{aV:8,w:"<div class=\"location-name\" style=\"margin: 0px; border-width: 0px; outline: 0px; vertical-align: baseline; font: inherit; color: rgb(0, 0, 0); font-family: 'Helvetica Neue', Helvetica, Arial; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: normal; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; \"><span style=\"\"><font size=\"7\">Athens</font></span></div><div class=\"address\" itemprop=\"address\" itemscope=\"\" itemtype=\"http://schema.org/PostalAddress\" style=\"margin: 0px; border-width: 0px; outline: 0px; vertical-align: baseline; font: inherit; color: rgb(0, 0, 0); font-family: 'Helvetica Neue', Helvetica, Arial; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: normal; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; \"><span itemprop=\"streetAddress\" style=\"margin: 0px; border-width: 0px; outline: 0px; vertical-align: baseline; font: inherit; \">651 S. Milledge Ave.</span><br><span itemprop=\"addressLocality\" style=\"margin: 0px; border-width: 0px; outline: 0px; vertical-align: baseline; font: inherit; \">Athens</span>,&nbsp;<span itemprop=\"addressRegion\" style=\"margin: 0px; border-width: 0px; outline: 0px; vertical-align: baseline; font: inherit; \">GA</span>&nbsp;<span itemprop=\"postalCode\" style=\"margin: 0px; border-width: 0px; outline: 0px; vertical-align: baseline; font: inherit; \">30605</span><br><span class=\"phone\" itemprop=\"telephone\" style=\"margin: 0px; border-width: 0px; outline: 0px; vertical-align: baseline; font: inherit; \">(706) 546-9290</span></div>",x:"visible",a:7,Z:"break-word",b:43,j:"absolute",r:"inline",z:"2",k:"div",aS:8,aT:8,bF:"16",s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",t:36,y:"preserve",aU:8,G:"#000000"},"16":{x:"visible",k:"div",c:351,d:306,z:"3",e:"0.000000",a:159,j:"absolute",b:0},"12":{c:349,d:304,I:"Solid",e:"0.752950",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:1,N:1,bF:"16",A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:0,b:0},"20":{c:948,d:298,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"4",k:"div",D:"#A0A0A0",aA:[{goToURL:"http://www.georgiacenterforsight.com/?utm_source=onlineathens&utm_medium=banner&utm_campaign=lensx",type:5,openInNewWindow:true}],a:0,b:0},"11":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:-22,j:"absolute",r:"inline",c:950,z:"2",k:"div",d:322,e:"0.000000"}},n:"House",T:{kTimelineDefaultIdentifier:{d:4,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:1.15,i:"e",e:"1.000000",s:"0.000000",o:"11"},{f:"2",t:1.16,d:1.14,i:"e",e:"1.000000",s:"0.000000",o:"16"}],f:30}},o:"9"}];
	
	var javascripts = [{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\t\n}",identifier:"19"}];
	
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

