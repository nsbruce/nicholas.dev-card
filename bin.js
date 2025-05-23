#!/usr/bin/env node

const chalk = require('chalk');


// Define colors and styles (Base4Tone Classic C)
const border = chalk.hex('#1ABC9C');
const divider = chalk.hex('#7F8C8D');
const plainText = chalk.hex('#FFFFFF');
const secondary = chalk.hex('#C0392B');
const highlight = chalk.hex('#FDBC4B').bold;
const handle = chalk.hex('#16A085');
const label = chalk.hex('#1D99F3').bold;
const bsky = chalk.hex('#3DAEE9');
const url = chalk.hex('#55A649');
const email = chalk.hex('#9B59B6');
// const web = chalk.blueBright;
const gh = chalk.hex('#FDBC4B');
const work = chalk.hex('#ED1515');

const flag = '🇨🇦';
// Card dimensions - fixed width for better alignment
const width = 54;

// Create borders with exact width
const topBorder = border('╭' + '─'.repeat(width) + '╮');
const bottomBorder = border('╰' + '─'.repeat(width) + '╯');

// Function to create a line with perfectly aligned borders
const createLine = (text, extra_whitespaces = 0) => {  // extra whitespace because I can't figure out the correct length with the flag
  // Strip ANSI codes for accurate length calculation
  const cleanText = text.replace(/\u001b\[\d+(;\d+)*m/g, '');
  const padding = width - cleanText.length; // 2 for the borders
  return border('│') + text + ' '.repeat(padding + extra_whitespaces) + border('│');
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