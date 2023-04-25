#!/usr/bin/env node
import { Command } from 'commander';
import compare from '../src/compare.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-v, --vers', 'output the current version')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    console.log(compare(filepath1, filepath2));
  });
program.parse();
