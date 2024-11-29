import { Command } from "./command-library.types";
import { ParamDefinitionList, ParamValidator } from "./param-validator.types";
export declare const isNumeric: ParamValidator;
export declare const isNotEmpty: ParamValidator;
export declare const isValidLicenseStates: ParamValidator;
export declare const isSafeUrl: ParamValidator;
export declare function validateParams<T>(command: Command, paramDefinitions: ParamDefinitionList<T>): string[];
export declare const isValidDomainList: ParamValidator;
export declare const isValidDate: ParamValidator;
