((win, doc, $) => {
	var chatModule = (() => {
		let _leadself = 'Me: ',
			_leadcomputer = "PC: ",
			_aSaid = ["This is a Cyber Chat"],
			_msgYes = "Yes, that's a great idea.",
			_msgNo = "No, that must be a mistake.",
			_aSassyStuff = ["Like mold on books, grow myths on history.",
				"She moved like a poem and smiled like a sphinx.",
				"As long as we don’t die, this is gonna be one hell of a story.",
				"She laughed, and the desert sang.",
				"You’ve got about as much charm as a dead slug."];

		let _echo = (msg) => {
			_aSaid.push(`<div>${msg}</div>`);

			let start = Math.max(_aSaid.length - 6, 0),
				out = '',
				aSaidLength = _aSaid.length;

			_aSaid.forEach(function (element) {
				out += element;
			});

			$('.advert').html(out);
			$('#talk span').text(msg);
		}

		let talk = (msg) => {
			_echo(_leadself + msg);
		};
		let replyYesNo = () => {
			let msg = Math.random() > .5 ? _msgYes : _msgNo;
			_echo(_leadcomputer + msg);
		};
		let saySassyStuff = () => {
			let msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)]
			_echo(_leadself + msg);
		};

		return { talk, replyYesNo, saySassyStuff };
	})();

	$(doc).ready(function ()  {
		chatModule.talk('this is great');
		chatModule.replyYesNo();
		chatModule.saySassyStuff();
	});

	if (!window.chatModule) window.chatModule = chatModule;
})(window, document, $);