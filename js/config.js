var siteurl = "http://vantagewebtech.com/passbrazil/app";
var realsiteurl = "http://vantagewebtech.com/passbrazil";
alert(siteurl);
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

/*
function storecategories(store=false)
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
			jQuery(res['categories']).each(function(i){
				html+='<li><a href="events.html?category='+res['categories'][i]['id']+'">'+res['categories'][i]['name']+'</a></li>';		
			});
			html+='</ul>';
			
			localStorage.setItem('categorilist', html);	
			
			
	   }
	 },  
	 error: function(response, d, a){
		jQuery('body .bodyoverlay').remove();
		jQuery('body .popupbox').remove();
		var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
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
		alert('start');				
	 },		
	 complete: function() {
		alert('finish');						
	 },
	 success: function(res) {
		 alert('process');
	   if(typeof res['categories']!='undefined')
	   {
		   	var chtml='<ul>';
			jQuery(res['categories']).each(function(i){
				chtml+='<li><a href="events.html?category='+res['categories'][i]['id']+'">'+res['categories'][i]['name']+'</a></li>';		
			});
			chtml+='</ul>';
			jQuery('#header .mobilenav').html(chtml);
			
	   }
	 },  
	 error: function(response, d, a){
		jQuery('body .bodyoverlay').remove();
		jQuery('body .popupbox').remove();
		var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
		jQuery('body').append(html);
		
		jQuery('.okbox').click(function(){
			jQuery('body .bodyoverlay').remove();
			jQuery('body .popupbox').remove();
		}); 
		
	 } 
   });
		
}
*/

