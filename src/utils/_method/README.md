# Styler Method

You can choose a method to appy tenoxui. First you can use `@nousantx/tenoxui-styler` package that has built-in color generator, default classes, and so on. Or build them yourself.

## Method 1

### Installation

The only thing you need is one package:

```sh
npm i @nousantx/tenoxui-styler
```

### Usage

`styler.ts` :

```ts
import { useLayoutEffect } from 'preact/hooks'
import { init, createConfig() } from '@nousantx/tenoxui-styler'

export const styler = () => {
  useLayoutEffect(() => {
    init({ config: createConfig(/* other config here */) })
  }, [])
}
```

With this method, you will get this final build size:

```
vite v6.0.3 building for production...
✓ 18 modules transformed.
dist/index.html                  0.46 kB │ gzip:  0.30 kB
dist/assets/index-DsIz9v1x.css   0.23 kB │ gzip:  0.19 kB
dist/assets/index-BbGe8bdm.js   51.05 kB │ gzip: 19.08 kB
✓ built in 3.21s
```

## Method 2

### Installation

You need to install several dependencies to use this method:

```sh
npm i @tenoxui/core @tenoxui/property @nousantx/someutils @nousantx/color-generator
```

### Usage

```ts
import { useLayoutEffect } from 'preact/hooks'
import { MakeTenoxUI } from '@tenoxui/core'
import type { Values, Classes } from '@tenoxui/core'
import { property } from '@tenoxui/property'
import { generateColors } from '@nousantx/color-generator'
import { transformClasses, merge } from '@nousantx/someutils'

export const styler = (deps: any = []) => {
  useLayoutEffect(() => {
    document.querySelectorAll('*:not(head, head *, script)').forEach((element) => {
      new MakeTenoxUI({
        element: element as HTMLElement,
        property: {
          ...property,
          bg: {
            property: 'backgroundColor',
            value: 'rgb({0} / var(--bg-opacity, 1))'
          },
          text: {
            property: 'color',
            value: 'rgb({0} / var(--text-opacity, 1))'
          }
        },
        values: generateColors({
          color: {
            primary: '#ccf654',
            red: '#f03838',
            green: '#15e05f',
            blue: '#3d82f2',
            yellow: '#f1c230',
            slate: '#636c7c',
            neutral: '#737373'
          },
          option: {
            format: 'object2',
            output: 'rgb-only'
          }
        }) as Values,
        classes: merge(
          transformClasses({
            center: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }),
          {
            display: {
              flex: 'flex'
            },
            alignItems: {
              'items-center': 'center'
            },
            justifyContent: {
              'space-between': 'space-between'
            }
          }
        ) as Classes
      }).useDOM()
    })
  }, [...deps])
}
```

Using this method, you will get this build size output:

```
vite v6.0.3 building for production...
✓ 17 modules transformed.
dist/index.html                  0.46 kB │ gzip:  0.30 kB
dist/assets/index-DsIz9v1x.css   0.23 kB │ gzip:  0.19 kB
dist/assets/index-C64ebYNu.js   42.93 kB │ gzip: 16.48 kB
✓ built in 3.22s
```

## Conclusion

Would you sacrifice `10kb` for more configuration?
