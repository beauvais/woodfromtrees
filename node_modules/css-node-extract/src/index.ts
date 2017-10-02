import * as postcss from 'postcss';

import postcssNodeExtract = require('./lib/postcss-node-extract');

import { IProcessOptions } from './interfaces/IProcessOptions';

/**
 * Synchronously extract nodes from a string.
 */
export const processSync = ({
  css,
  filters,
  customFilters,
  postcssSyntax,
  preserveLines,
}: IProcessOptions) => postcss(postcssNodeExtract(filters, customFilters, preserveLines))
  .process(css, { syntax: postcssSyntax }).css
  .replace(/\/\* START preserve lines|preserve lines END \*\//g, ``);

/**
 * Asynchronously extract nodes from a string.
 */
export const process = (options: IProcessOptions) => new Promise((resolve) => {
  const result = processSync(options);
  resolve(result);
});

/**
 * cssNodeExtract
 */
export default {
  process,
  processSync,
};
