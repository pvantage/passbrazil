document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	alert('ready');
var push = PushNotification.init({
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
push.on('registration', function(data) {
        console.log('registration event: ' + data.registrationId);
		alert('registration event: ' + data.registrationId);

        var oldRegId = localStorage.getItem('registrationId');
        if (oldRegId !== data.registrationId) {
            // Save new registration ID
            localStorage.setItem('registrationId', data.registrationId);
            // Post registrationId to your app server as the value has changed
        }

        /*var parentElement = document.getElementById('registration');
        var listeningElement = parentElement.querySelector('.waiting');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/
    });
}