# Advent of Code

My [Advent of Code](https://adventofcode.com/) solutions, across years and languages.

## Layout

```
<year>/<language>/   one self-contained project per year and language
```

| Year | Language   | Folder                                 |
| ---- | ---------- | -------------------------------------- |
| 2024 | TypeScript | [2024/typescript](2024/typescript)     |

Each `<year>/<language>` folder has its own README, dependencies and scripts.
Run its commands from inside that folder.

Shared at the root, for every year and language:

- `.env` — your AoC session cookie (not committed)
- `.gitignore` — covers all languages, plus puzzle inputs
- `.prettierrc` — formatting for TypeScript/JavaScript projects
- `.vscode/launch.json` — debug configs that ask for the year and day

## Session cookie

Input download needs your AoC session cookie. Create a `.env` file at the repo root:

```
AOC_SESSION={YOUR_AOC_SESSION_VALUE}
```

You can get the value from the AoC website cookie
(`Developer Tools` > `Application` > `Cookies`).

## Puzzle inputs

New inputs (`input.txt`) are git-ignored, as the AoC creator asks that they are
not shared publicly. They stay on your disk and the generate scripts download them.

## Starting a new year or language

- **Same language, new year** — copy the latest year's folder without its
  solutions, e.g. `2024/typescript` → `2025/typescript` (skip `src/` and
  `node_modules/`), then `pnpm install` and `pnpm gen day01`. The year is taken
  from the folder name.
- **New language** — create `<year>/<language>/` with that language's own
  tooling and README, and add a row to the table above.
