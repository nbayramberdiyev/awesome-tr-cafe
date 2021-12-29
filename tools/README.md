# Tools

This script automatically does houskeeping work:
- Sets the `marker-color` for cafés by the internet speed,
- Sets the `marker-symbol` for cafés if it hasn't been set,
- Updates `README.md` file.

Color  | Hex     | Speed
------ | ------- | -----
Red    | #C24740 | 0 ~ 4 Mbps
Yellow | #F3AE1A | 4 ~ 10 Mbps
Green  | #50C240 | 10+ Mbps

## Prerequisites

- [Node.js 16+](https://nodejs.org)

## Installation

Before installing, make sure you have NPM and Node.js installed on your machine.

**1. Clone the repository:**

```shell
git clone git@github.com:nbayramberdiyev/awesome-tr-cafe.git
```

**2. Go to the `tools` folder:**

```shell
cd awesome-tr-cafe/tools
```

**3. Install the dependencies:**

```shell
npm install
```

## Running

```shell
node housepeeker.js
```
