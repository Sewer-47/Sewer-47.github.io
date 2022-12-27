var messageManager = new MessageManager("pl_PL");
new MessageLoader(messageManager).load();

setPreferedLanguage();


async function setPreferedLanguage() {
	await new Promise(r => setTimeout(r, 300));

	var preferedLanguage = navigator.languages[0];

	//at the moment i only use two languages so im not extending it
	if (!preferedLanguage.includes("pl")) {
		switchNextLocale("en_EN")
	}
}

function switchNextLocale(targetLocale) {
	var i18Button = document.getElementById("lang-button");
	var nextLocale;

	if (targetLocale == null) {
		//hardcoded because maps in js has not indexing :(
		switch (this.messageManager.getLocaleCode()) {
			case "pl_PL":
				nextLocale = "en_EN";
				break;
			case "en_EN":
				nextLocale = "pl_PL";
				break;
		}
	} else {
		nextLocale = targetLocale;
	}

	i18Button.innerHTML = this.messageManager.getMessageMap().getDisplayName();
	messageManager.setLocale(nextLocale);  

	document.querySelectorAll("*").forEach(function(element) {
		if (element.hasAttribute("i18n")) {
			var attribute = element.getAttribute("i18n");
			var message = messageManager.getMessage(attribute);
			element.innerHTML = message;
		}
	});
}
