import { useLayoutEffect } from 'preact/hooks'

import config from '../../tenoxui.config'
import { init } from '@nousantx/tenoxui-styler'

export const styler = (deps: any = []) => {
  useLayoutEffect(() => {
    init({ config })
  }, [...deps])
}

export default styler
