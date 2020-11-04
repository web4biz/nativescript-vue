import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'de.web4biz.nativescript',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig
