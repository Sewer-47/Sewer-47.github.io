class MessageLoader {

	constructor(messageManager) {
		this.messageManager = messageManager;
	}

	async load() {
		var request = new Request("locales.json");
		var response = await fetch(request);
		var jsonObject = await response.json();
		
		var locales = jsonObject.locales;

		for (var locale of locales) {
			var messageMap = new MessageMap(key => "Missing " + key + " message.", locale.code, locale.displayName);

			Object.keys(locale).forEach(function(key) {
				if (key != "code" && key != "displayName") {
					messageMap.set(key, locale[key]);
				}
			});
			this.messageManager.registerLocale(messageMap);
		}
	}
}