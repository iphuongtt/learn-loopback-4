import { bind, config } from '@loopback/core';
import { asGreeter, Greeter } from '../types';

/**
 * Options for the Chinese greeter
 */
 export interface ChineseGreeterOptions {
    // Name first, default to `true`
    nameFirst: boolean;
  }

  /**
 * A greeter implementation for Chinese.
 */
@bind(asGreeter)
export class ChineseGreeter implements Greeter {
  language = 'zh';

  constructor(
    /**
     * Inject the configuration for ChineseGreeter
     */
    @config()
    private options: ChineseGreeterOptions = {nameFirst: true},
  ) {}

  greet(name: string) {
    if (this.options && this.options.nameFirst === false) {
      return `你好，${name}！`;
    }
    return `${name}，你好！`;
  }
}