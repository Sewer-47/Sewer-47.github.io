class MessageMap extends Map {

	constructor(undefinedFunction, localeCode, displayName) {
		super();
		this.undefinedFunction = undefinedFunction;
		this.localeCode = localeCode;
        this.displayName = displayName;
	}

    get(key) {
    	var result = super.get(key);
    	if (result == null) {
    		return this.undefinedFunction(key);
    	}
    	return result;
    }

    getLocaleCode() {
    	return this.localeCode;
    }

    getDisplayName() {
        return this.displayName;
    }

    getUndefined() {
    	return this.undefinedFunction;
    }	
}