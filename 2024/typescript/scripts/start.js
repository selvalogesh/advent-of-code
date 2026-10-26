// run a compiled day: node scripts/start.js day01
const dayName = process.argv[2];
if (!dayName) {
  console.error('Usage: pnpm start dayXX');
  process.exit(1);
}

await import(`../dist/${dayName}/main.js`);
