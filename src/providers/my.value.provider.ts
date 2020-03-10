import {Provider} from '@loopback/context';
import { type } from 'os';

export class MyValueProvider implements Provider<string> {
  value() {
    return 'Hello world';
  }
}

export interface MyValue {
  
}