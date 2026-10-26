# Advent of Code 2024 — TypeScript

Solutions for [Advent of Code 2024](https://adventofcode.com/2024) in TypeScript.

Built with

- [pnpm](https://pnpm.io/)
- [typescript](https://www.typescriptlang.org/)
- [vitest](https://vitest.dev/)

Based on [aoc-2024-typescript-template](https://github.com/2wndrhs/aoc-2024-typescript-template).

## Usage

Run every command from this folder (`2024/typescript`).

```shell
# install dependencies
$ pnpm install

# run tests for day01
$ pnpm test day01

# run the day01
$ pnpm start day01
```

## Generate

You can generate all necessary files for an AoC solution with a simple command:

```shell
$ pnpm gen day01
```

The command creates the following files

```shell
* creating src/day01/resources/input.txt
* creating src/day01/main.ts
* creating src/day01/part2.ts
* creating src/day01/part1.ts
* creating src/day01/__tests__/day01.test.ts
```

The year in the input URL comes from the folder name (`2024/typescript` → 2024),
and `AOC_SESSION` is read from the `.env` file at the repo root. See the
[root README](../../README.md).
