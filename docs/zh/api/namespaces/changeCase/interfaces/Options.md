[conversion-library](../../../globals.md) / [changeCase](../index.md) / Options

# Interface: Options

Options used for converting strings to any case.

## Extended by

- [`PascalCaseOptions`](PascalCaseOptions.md)

## Properties

### delimiter?

```ts
optional delimiter: string;
```

#### Defined in

node\_modules/change-case/dist/index.d.ts:20

***

### locale?

```ts
optional locale: Locale;
```

#### Defined in

node\_modules/change-case/dist/index.d.ts:16

***

### prefixCharacters?

```ts
optional prefixCharacters: string;
```

#### Defined in

node\_modules/change-case/dist/index.d.ts:21

***

### ~~separateNumbers?~~

```ts
optional separateNumbers: boolean;
```

#### Deprecated

Pass `split: splitSeparateNumbers` instead.

#### Defined in

node\_modules/change-case/dist/index.d.ts:19

***

### split()?

```ts
optional split: (value: string) => string[];
```

#### Parameters

• **value**: `string`

#### Returns

`string`[]

#### Defined in

node\_modules/change-case/dist/index.d.ts:17

***

### suffixCharacters?

```ts
optional suffixCharacters: string;
```

#### Defined in

node\_modules/change-case/dist/index.d.ts:22
