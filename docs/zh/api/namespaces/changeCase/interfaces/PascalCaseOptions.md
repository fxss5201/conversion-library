[conversion-library](../../../globals.md) / [changeCase](../index.md) / PascalCaseOptions

# Interface: PascalCaseOptions

Options used for converting strings to pascal/camel case.

## Extends

- [`Options`](Options.md)

## Properties

### delimiter?

```ts
optional delimiter: string;
```

#### Inherited from

[`Options`](Options.md).[`delimiter`](Options.md#delimiter)

#### Defined in

node\_modules/change-case/dist/index.d.ts:20

***

### locale?

```ts
optional locale: Locale;
```

#### Inherited from

[`Options`](Options.md).[`locale`](Options.md#locale)

#### Defined in

node\_modules/change-case/dist/index.d.ts:16

***

### mergeAmbiguousCharacters?

```ts
optional mergeAmbiguousCharacters: boolean;
```

#### Defined in

node\_modules/change-case/dist/index.d.ts:10

***

### prefixCharacters?

```ts
optional prefixCharacters: string;
```

#### Inherited from

[`Options`](Options.md).[`prefixCharacters`](Options.md#prefixcharacters)

#### Defined in

node\_modules/change-case/dist/index.d.ts:21

***

### ~~separateNumbers?~~

```ts
optional separateNumbers: boolean;
```

#### Deprecated

Pass `split: splitSeparateNumbers` instead.

#### Inherited from

[`Options`](Options.md).[`separateNumbers`](Options.md#separatenumbers)

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

#### Inherited from

[`Options`](Options.md).[`split`](Options.md#split)

#### Defined in

node\_modules/change-case/dist/index.d.ts:17

***

### suffixCharacters?

```ts
optional suffixCharacters: string;
```

#### Inherited from

[`Options`](Options.md).[`suffixCharacters`](Options.md#suffixcharacters)

#### Defined in

node\_modules/change-case/dist/index.d.ts:22
