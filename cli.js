#!/usr/bin/env node
'use strict';

const program = require('commander')
program.version('0.0.1')
const startDay = require('./startDay')



program
    .command('startDay')
    .action( () => {
        startDay.open()
    }
    )

    program.parse(process.argv)