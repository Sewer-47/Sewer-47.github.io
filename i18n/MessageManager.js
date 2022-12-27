class MessageManager {

	constructor(defaultLocale) {
		this.locale = defaultLocale;
		this.localeMap = new Map();
	}

	registerLocale(messageMap) {
		this.localeMap.set(messageMap.getLocaleCode(), messageMap);
	}

	getMessage(message) {
		var text = this.getMessageMap().get(message);
		return text;
	}

	getLocaleCode() {
		return this.locale;
	}

	getMessageMap() {
		return this.localeMap.get(this.locale);
	}

	hasLocale(localeCode) {
		return this.localeMap.has(this.locale);
	} 

	setLocale(localeCode) {
		this.locale = localeCode;
	}

	getLocaleMap() {
		return this.localeMap;
	}

}