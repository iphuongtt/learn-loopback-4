import {createBindingFromClass} from '@loopback/context';
import {Component} from '@loopback/core';
import {GreetingService, ChineseGreeter} from '../services';
import {GREETING_SERVICE} from '../keys';

/**
 * Define a component to register the greeter extension point and built-in
 * extensions
 */
export class GreetingComponent implements Component {
  bindings = [
    createBindingFromClass(GreetingService, {
      key: GREETING_SERVICE,
    }),
    createBindingFromClass(ChineseGreeter),
  ];
}