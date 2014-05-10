(function () {
	var nativeBridge = {
		invoke: function(commandName, args) {
			console.log(commandName + ": " + JSON.stringify(args, null, 2));
			window.location = 'js-call:' + commandName + ':' + encodeURIComponent(JSON.stringify(args));
		}
	};

	var fNameTextField = $('#fNameTextField');
	var lNameTextField = $('#lNameTextField');
	var updateNativeButton = $('#updateNativeButton');

	updateNativeButton.on('click', function(e) {
		e.preventDefault();
		nativeBridge.invoke('updateNames', {
			fname: fNameTextField.val(),
			lname: lNameTextField.val()
		});
	});

	window.setNames = function(names) {
		fNameTextField.val(names.fname);
		lNameTextField.val(names.lname);
	}
})();
