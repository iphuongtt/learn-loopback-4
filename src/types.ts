import {BindingTemplate} from '@loopback/context';
import {extensionFor} from '@loopback/core';

/**
 * Typically an extension point defines an interface as the contract for
 * extensions to implement
 */
 export interface Greeter {
    language: string;
    greet(name: string): string;
  }

/**
 * Name/id of the greeter extension point
*/
export const GREETER_EXTENSION_POINT_NAME = 'greeters';


/**
 * A binding template for greeter extensions
 */
 export const asGreeter: BindingTemplate = binding => {
    extensionFor(GREETER_EXTENSION_POINT_NAME)(binding);
    binding.tag({namespace: 'greeters'});
  };