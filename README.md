# DAN COMMON

## Consuming Dependencies

There are several kinds of dependencies your library might have. This section shows how to import them into the declaration file.

### Dependencies on Global Libraries

If your library depends on a global library, use a /// <reference types="..." /> directive:

```TypeScript
/// <reference types="someLib" />

function getThing(): someLib.thing
```

### Dependencies on Modules

If your library depends on a module, use an import statement:

```TypeScript
import * as moment from "moment";

function getThing(): moment;
```

### Dependencies on UMD libraries

From a Global Library
If your global library depends on a UMD module, use a _/// <reference types directive:_

```TypeScript
/// <reference types="moment" />

function getThing(): moment;
```

### From a Module or UMD Library

If your module or UMD library depends on a UMD library, use an import statement:

```TypeScript
import * as someLib from 'someLib';
```

Do not use a _/// <reference_ directive to declare a dependency to a UMD library!

## Footnotes

### Preventing Name Conflicts

Note that it’s possible to define many types in the global scope when writing a global declaration file. We strongly discourage this as it leads to possible unresolvable name conflicts when many declaration files are in a project.

A simple rule to follow is to only declare types namespaced by whatever global variable the library defines. For example, if the library defines the global value ‘cats’, you should write

```TypeScript
declare namespace cats {
  interface KittySettings { }
}
```

But not

```TypeScript
// at top-level
interface CatsKittySettings { }
```

---

## <br/>

# TypeScript Language Specification

## 10.1 Namespace Declarations

```TypeScript
namespace M {
  export interface P { x: number; y: number; }
  export var a = 1;
}

var p: M.P;             // M used as NamespaceName
var m = M;              // M used as PrimaryExpression
var x1 = M.a;           // M used as PrimaryExpression
var x2 = m.a;           // Same as M.a
var q: m.P;             // Error
```

```TypeScript
namespace A.B.C {
  export var x = 1;
}
```

corresponds to

```TypeScript
namespace A {
  export namespace B {
    export namespace C {
      export var x = 1;
    }
  }
}
```

The hierarchy formed by namespace and named type names partially mirrors that formed by namespace instances and members. The example

```TypeScript
namespace A {
  export namespace B {
    export class C { }
  }
}
```

introduces a named type with the qualified name 'A.B.C' and also introduces a constructor function that can be accessed using the expression 'A.B.C'. Thus, in the example

```TypeScript
var c: A.B.C = new A.B.C();
```

the two occurrences of 'A.B.C' in fact refer to different entities. It is the context of the occurrences that determines whether 'A.B.C' is processed as a type name or an expression.

## 10.3 Import Alias Declarations

In the example

```TypeScript
namespace A {
  export interface X { s: string }
  export var X: X;
}

namespace B {
  interface A { n: number }
  import Y = A;   // Alias for namespace A
  import Z = A.X; // Alias for type and value A.X
  var v: Z = Z;
}
```
