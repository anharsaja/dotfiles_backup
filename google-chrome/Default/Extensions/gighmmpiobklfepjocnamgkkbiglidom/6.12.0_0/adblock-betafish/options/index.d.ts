declare function isPremiumFilterListURL(url: any): boolean;
declare function send(command: any, args: any): Promise<any>;
declare function send(command: any, args: any): Promise<any>;
declare function sendTypeMessage(type: any, args: any): Promise<any>;
declare function sendTypeMessage(type: any, args: any): Promise<any>;
declare function checkForSyncError(handler: any): (event: any) => void;
declare function displayVersionNumber(): void;
declare function displayTranslationCredit(): void;
declare function startSubscriptionSelection(title: any, url: any): void;
declare function setSelectedThemeColor(): void;
declare function loadOptionalSettings(): void;
declare function updateSocialIconsVisibility(): Promise<void>;
declare const PREMIUM_FILTER_URL_LIST: string[];
declare function isSelectorFilter(text: any): boolean;
declare const rateUsCtaKey: "rate-us-cta-clicked";
declare const mailCtaKey: "mail-cta-clicked";
declare const premiumFiltersCtaKey: "premium-filters-cta-clicked";
declare const info: {};
declare const FIVE_SECONDS: 5000;
declare const TWENTY_SECONDS: number;
declare const SIXTY_SECONDS: number;
declare let autoReloadingPage: any;
declare let timeoutID: any;
declare const language: string;
declare let delayedSubscriptionSelection: any;
declare let syncErrorCode: number;
declare let initializedProxies: any;
declare function initializeProxies(): any;
declare function requestSyncMessageRemoval(delayTime: any): Promise<any>;
declare function showOutOfDateExtensionError(): void;
declare function showNoLongerSyncError(): void;
declare function addUnSyncErrorClickHandler(): void;
declare function checkForUnSyncError(): void;
declare function showSyncMessage(msgText: any, doneIndicator: any, errorIndicator: any): void;
declare function onExtensionNameError(): void;
declare function onPostDataSending(): void;
declare function onPostDataSent(): void;
declare function onPostDataSentError(errorCode: any, initialGet: any): void;
declare function onSyncDataGetting(): void;
declare function onSyncDataReceieved(): void;
declare function onSyncDataGettingError(errorCode: any, responseJSON: any): void;
declare function onSyncDataInitialGettingError(): void;
declare function removeSyncListeners(): void;
declare function addSyncListeners(): void;
declare function updateAcceptableAdsUIFN(checkAA: any, checkAAprivacy: any): void;
declare const debounceWaitTime: 1000;
declare const updateAcceptableAdsUI: (...args: any[]) => void;
declare function shouldShowRateUsCTA(): void;
declare function shouldShowEmailCTA(): void;