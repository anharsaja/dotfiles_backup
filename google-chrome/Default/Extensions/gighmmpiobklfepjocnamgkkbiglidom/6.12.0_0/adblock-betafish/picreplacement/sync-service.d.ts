export default SyncService;
declare namespace SyncService {
    export { enableSync };
    export { disableSync };
    export { getSyncData };
    export { processFetchRequest };
    export { getCurrentExtensionName };
    export { getAllExtensionNames };
    export { setCurrentExtensionName };
    export { removeCurrentExtensionName };
    export { removeExtensionName };
    export { syncNotifier };
    export { getCommitVersion };
    export { setCommitVersion };
    export { getLastPostStatusCode };
    export { resetLastPostStatusCode };
    export { setLastPostStatusCode };
    export { getLastGetStatusCode };
    export { resetLastGetStatusCode };
    export { setLastGetStatusCode };
    export { getLastGetErrorResponse };
    export { resetLastGetErrorResponse };
    export { setLastGetErrorResponse };
    export { resetAllErrors };
    export { getSyncLog };
    export { deleteSyncLog };
    export { processUserSyncRequest };
    export { processEventChangeRequest };
    export { addSyncLogText };
}
declare function enableSync(initialGet: any): void;
declare function disableSync(removeName: any): void;
declare function getSyncData(initialGet: any, disableEmitMsg: any, callback: any, shouldForce: any): void;
declare function processFetchRequest(commitVersion: any): void;
declare function getCurrentExtensionName(): string;
declare function getAllExtensionNames(): Promise<any>;
declare function setCurrentExtensionName(newName: any): Promise<void>;
declare function removeCurrentExtensionName(): Promise<void>;
declare function removeExtensionName(extensionName: any, extensionGUID: any): void;
declare const syncNotifier: EventEmitter;
declare function getCommitVersion(): number;
declare function setCommitVersion(newVersionNum: any): void;
declare function getLastPostStatusCode(): number;
declare function resetLastPostStatusCode(): void;
declare function setLastPostStatusCode(newCode: any): void;
declare function getLastGetStatusCode(): number;
declare function resetLastGetStatusCode(): void;
declare function setLastGetStatusCode(newCode: any): void;
declare function getLastGetErrorResponse(): {};
declare function resetLastGetErrorResponse(): void;
declare function setLastGetErrorResponse(newObject: any): void;
declare function resetAllErrors(): void;
declare function getSyncLog(): Promise<any>;
declare function deleteSyncLog(): void;
declare function processUserSyncRequest(): void;
declare function processEventChangeRequest(): void;
declare function addSyncLogText(msg: any): void;
import { EventEmitter } from "../../adblockplusui/adblockpluschrome/lib/events";