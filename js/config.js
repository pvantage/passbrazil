var siteurl = "http://passbrazil.com/app";
//alert(siteurl);
function gup(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}


function storecategories()
{
	var url=siteurl+'/api/events';
	
	jQuery.ajax({  
	 type: 'POST',  
	 url: url,  
	 //contentType: contentType,  
	 dataType: 'json',  
	 data: {listcategory:1},  
	 crossDomain: true,  
	 beforeSend: function() {
						
	 },		
	 complete: function() {
							
	 },
	 success: function(res) {  
	   if(typeof res['categories']!='undefined')
	   {
		   	var html='<ul>';
			html+='<li><a href="javascript:;" class="current">TODOS</a></li>';
			jQuery(res['categories']).each(function(i){
				html+='<li><a href="events.html?category='+res['categories'][i]['id']+'">'+res['categories'][i]['name']+'</a></li>';		
			});
			html+='<li><a href="javascript:;" data-toggle="modal" data-target="#myModal" style="color:#27b11c;">Clube VIP PassBrazil</a></li>';
			html+='</ul>';
			
			localStorage.setItem('categorilist', html);	
			
			
	   }
	 },  
	 error: function(response, d, a){
		jQuery('body .bodyoverlay').remove();
		jQuery('body .popupbox').remove();
		var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
		jQuery('body').append(html);
		
		jQuery('.okbox').click(function(){
			jQuery('body .bodyoverlay').remove();
			jQuery('body .popupbox').remove();
		}); 
		
	 } 
   });
		
}
function categories()
{
	
	var url=siteurl+'/api/events';
	jQuery.ajax({  
	 type: 'POST',  
	 url: url,  
	 //contentType: contentType,  
	 dataType: 'json',  
	 data: {listcategory:1},  
	 crossDomain: true,  
	 beforeSend: function() {
	 },		
	 complete: function() {
	 },
	 success: function(res) {
	   if(typeof res['categories']!='undefined')
	   {
		   	var chtml='<ul>';
			chtml+='<li><a href="events.html?category=0" class="current">TODOS</a></li>';
			jQuery(res['categories']).each(function(i){
				chtml+='<li><a href="events.html?category='+res['categories'][i]['id']+'">'+res['categories'][i]['name']+'</a></li>';		
			});
			chtml+='<li><a href="javascript:;" data-toggle="modal" data-target="#myModal" style="color:#27b11c;">Clube VIP PassBrazil</a></li>';
			chtml+='</ul>';
			jQuery('#header .mobilenav').html(chtml);
			jQuery('#header .header-logo a.icon').click(function(){
				jQuery('#myModal .modal-header button.close').trigger('click');													 
			});
			
	   }
	 },  
	 error: function(response, d, a){
		jQuery('body .bodyoverlay').remove();
		jQuery('body .popupbox').remove();
		var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
		jQuery('body').append(html);
		
		jQuery('.okbox').click(function(){
			jQuery('body .bodyoverlay').remove();
			jQuery('body .popupbox').remove();
		}); 
		
	 } 
   });
		
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	if(typeof localStorage.getItem('registrationId')=='undefined' || localStorage.getItem('registrationId')=='')
	{
		var url=siteurl+'/api/events';
		jQuery.ajax({  
		 type: 'POST',  
		 url: url,  
		 //contentType: contentType,  
		 dataType: 'json',  
		 data: {check_register_appids:1, device_id:device.uuid},  
		 crossDomain: true,  
		 beforeSend: function() {
		 },		
		 complete: function() {
		 },
		 success: function(res) {
		   if(typeof res['device']!='undefined' && typeof res['device']['exist']!='undefined')
		   {
				if(res['device']['exist']=='no'){
					var push2 = PushNotification.init({
					"android": {
							"senderID": "315537388956"
					},
					"ios": {
							"sound": true,
							"vibration": true,
							"badge": true
					},
					"windows": {}
						});
					push2.on('registration', function(data) {
					   var registerid=data.registrationId;
						
						
						jQuery.ajax({  
							 type: 'POST',  
							 url: url,  
							 //contentType: contentType,  
							 dataType: 'json',  
							 data: {register_newapp_id:1, device_id:device.uuid,os_type:device.platform, reg_id:registerid},  
							 crossDomain: true,  
							 beforeSend: function() {
							 },		
							 complete: function() {
							 },
							 success: function(res) {
							   if(typeof res['adddevice']!='undefined' && typeof res['adddevice']['success']!='undefined')
							   {
									var oldRegId = localStorage.getItem('registrationId');
									if (oldRegId !== registerid) {
										// Save new registration ID
										localStorage.setItem('registrationId', registerid);
										// Post registrationId to your app server as the value has changed
									}
									//alert('new: '+localStorage.getItem('registrationId'));
							   }
							 },  
							 error: function(response, d, a){
								jQuery('body .bodyoverlay').remove();
								jQuery('body .popupbox').remove();
								var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
								jQuery('body').append(html);
								
								jQuery('.okbox').click(function(){
									jQuery('body .bodyoverlay').remove();
									jQuery('body .popupbox').remove();
								}); 
								
							 } 
						   });
						
					});
				}
				else
				{
					localStorage.setItem('registrationId', res['device']['exist']['reg_id']);
					//alert('Old: '+res['device']['exist']['reg_id']);
				}
		   }
		 },  
		 error: function(response, d, a){
			jQuery('body .bodyoverlay').remove();
			jQuery('body .popupbox').remove();
			var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
			jQuery('body').append(html);
			
			jQuery('.okbox').click(function(){
				jQuery('body .bodyoverlay').remove();
				jQuery('body .popupbox').remove();
			}); 
			
		 } 
	   });
	}
};