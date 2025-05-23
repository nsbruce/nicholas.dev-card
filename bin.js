#!/usr/bin/env node

const chalk = require('chalk');


// Define colors and styles (Base4Tone Classic C)
const border = chalk.hex('#e97263');
const divider = chalk.hex('#f18c7e');
const plainText = chalk.hex('#f5d8a8');
const secondary = chalk.hex('#de5745');
const highlight = chalk.hex('#c5dc18').bold;
const handle = chalk.hex('#16ca85');
const label = chalk.hex('#049a61').bold;
const bsky = chalk.blue;
const url = chalk.greenBright.underline;
const email = chalk.magentaBright;
// const web = chalk.blueBright;
const gh = chalk.yellowBright;
const work = chalk.redBright;

const flag = '🇨🇦';
// Card dimensions - fixed width for better alignment
const width = 54;

// Create borders with exact width
const topBorder = border('╔' + '═'.repeat(width) + '╗');
const bottomBorder = border('╚' + '═'.repeat(width) + '╝');

// Function to create a line with perfectly aligned borders
const createLine = (text, extra_whitespaces = 0) => {  // extra whitespace because I can't figure out the correct length with the flag
  // Strip ANSI codes for accurate length calculation
  const cleanText = text.replace(/\u001b\[\d+(;\d+)*m/g, '');
  const padding = width - cleanText.length; // 2 for the borders
  return border('║') + text + ' '.repeat(padding + extra_whitespaces) + border('║');
};


// Empty line and divider
const emptyLine = createLine(' '.repeat(width));
const horizLine = createLine(' ' + divider('─'.repeat(width - 2)) + ' ');

// Build the card with precise spacing
const card = [
  '',
  topBorder,
  emptyLine,
  createLine(' ' + highlight('Nicholas Bruce') + ' ' +  secondary('(') + plainText('he/him') + secondary(')')),
  horizLine,
  emptyLine,
  createLine(' ' + work('⚙') + '  ' + label('Work') + divider('    ∴ ') + plainText('Radio telescope engineer @ NRC ') + flag, 2),
  createLine(' ' + bsky('☁') + '  ' + label('Bluesky') + divider(' ∴ ') + handle('@dorktips')),
  createLine(' ' + gh('★') + '  ' + label('GitHub') + divider('  ∴ ') + url('https://github.com/nsbruce')),
  createLine(' ' + email('✉') + '  ' + label('Email') + divider('   ∴ ') + url('nicholas@nicholasbruce.ca')),
  // createLine(' ' + web('⌂') + '  ' + label('Web') + divider('     ∴ ') + url('https://dorktips.ca')),
  emptyLine,
  horizLine,
  createLine(' ' + divider('>') + ' ' + plainText('Run') + ' `' + secondary('npx') + ' ' + highlight('nicholasbruce') + '` ' + plainText('anytime to see this card')),
  emptyLine,
  bottomBorder,
  ''
].join('\n');

console.log(card);