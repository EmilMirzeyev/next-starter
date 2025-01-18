import { LocaleType } from "./i18n.config";

type Props = { currentLang: LocaleType };

let instance: unknown;
let globalState: Props = {
    currentLang: "az",
};

class StateUtility {
    constructor() {
        if (instance) {
            throw new Error("New instance cannot be created!!");
        }

        instance = this;
    }

    getLang(): LocaleType {
        return globalState.currentLang;
    }

    setLang(lang: LocaleType) {
        globalState.currentLang = lang;
    }
}

let languageInstance = Object.freeze(new StateUtility());

export default languageInstance;
