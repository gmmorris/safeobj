# safeobj
Safely access proprties on an object without the danger of **Uncaught TypeError: Cannot read property '🚀' of undefined**.

As described in my article [Using ES6's Proxy for safe Object property access](https://medium.com/@chekofif/using-es6-s-proxy-for-safe-object-property-access-f42fa4380b2c), we can avoid errors by using proxies.
This allows us to achieve a cleaner and safer style of coding.

I'd recommend reading the article to fully understand the incentive.

## Usage in TypeScript

This package contains embedded [TypeScript](https://www.typescriptlang.org/) type definitions.
TypeScript 2.2.0 or higher is required.

## API

The API is very simple.
We have a default export from the module, which is a function you apply to any object you wish to make *safe*.

For example:
```js
import safe from 'safeobj'

const safeDarthVader = safe({
  name : 'Anakin',
  mother : {
    name : 'Shmi'
  }
})
```

The *constant* **safeDarthVader** will now be safe and you can access any property on it without the fear of an error being throws.

When you access a property on a *safe* object you will get back either the object's property or a constant called **Undefined** which we can identify using the **isUndefined** function.

For example:

```js
import safe, { Undefined, isUndefined } from 'safeobj'

const safeDarthVader = safe({
  name : 'Anakin',
  mother : {
    name : 'Shmi'
  }
})

expect(safeDarthVader.name).toBe('Anakin');
expect(safeDarthVader.mother.name).toBe('Shmi');
expect(safeDarthVader.father.name).toBe(Undefined);
expect(isUndefined(safeDarthVader.father.name).toBe(true);
```

This mean we no longer need to fear accessing properties on the object **safeDarthVader**, as apposed to **dangerousDarthVader**

```js
const dangerousDarthVader = {
  name : 'Anakin',
  mother : {
    name : 'Shmi'
  }
}

expect(dangerousDarthVader.name).toBe('Anakin');
expect(dangerousDarthVader.mother.name).toBe('Shmi');
// The next line throws an "Uncaught TypeError: Cannot read property 'name' of undefined" Error
expect(dangerousDarthVader.father.name).toBe(undefined);
```

To make using the safe object a little easier we also provide an **either** function which takes as a first argument a property on the safe object and as a second argument a default value to use if the property is undefined.

```js
import safe, { either } from 'safeobj'

const safeDarthVader = safe({
  name : 'Anakin',
  mother : {
    name : 'Shmi'
  }
})

expect(
  either(safeDarthVader.mother.name, new Error('TypeError: Darth Vader must have a mother'))
).toBe(
  'Shmi'
);

expect(
  either(safeDarthVader.father.name, 'Darth Vader has no father'))
.toBe(
  'Darth Vader has no father'
);
```

Good luck, and may the force be with you!
