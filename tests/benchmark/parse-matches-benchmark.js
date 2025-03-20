const { parseMatches } = require('../../dist/commonjs/parser/parse-matches');
const { AnchorTagBuilder } = require('../../dist/commonjs/anchor-tag-builder');

// Sample text with various match types
const sampleText = `
  Visit https://example.com or www.example.org for more info.
  Contact us at info@example.com or call +1-234-567-8901.
  Follow us on Twitter @autolinker and use #autolinkerjs.
  IP address example: 192.168.1.1
`.repeat(1000); // Repeat to make timing more measurable

const tagBuilder = new AnchorTagBuilder();

// Configuration for parseMatches
const config = {
    tagBuilder,
    stripPrefix: { scheme: true, www: true },
    stripTrailingSlash: true,
    decodePercentEncoding: true,
    hashtagServiceName: 'twitter',
    mentionServiceName: 'twitter',
};

// Run benchmark
console.time('parseMatches');
const matches = parseMatches(sampleText, config);
console.timeEnd('parseMatches');
console.log(`Found ${matches.length} matches`);
