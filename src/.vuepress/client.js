import { defineWalineConfig } from 'vuepress/client'
import {
    defineWalineConfig,
  // defineGiscusConfig,
  // defineTwikooConfig,
  // defineWalineConfig,
} from '@vuepress/plugin-comment/client'

defineWalineConfig({
  provider: "Waline",
  serverURL: "https://work.youming.dns.army",
})