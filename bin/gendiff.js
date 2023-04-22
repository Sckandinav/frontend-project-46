#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
import { Command } from 'commander';

const program = new Command();

program
  .option('-n, --name', 'show name of project')
  .option('-d, --description', 'get description of projects')
  .option('-v, --version', 'show version');

program.parse(process.argv);

const options = program.opts();
if (options.name) console.log('Difference Search');
if (options.description) console.log('Difference finder program that determines the difference between two data structures');
if (options.version) console.log('1.0.0');
