// .vuepress/client.ts
import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";

export default defineClientConfig({
  setup:() => {
    setupRunningTimeFooter(
      new Date("2024-07-16"),
      {
        "/": "本站已经苟活了 :day 天︱:hour: :minute: :second",
      },
      true,
    );
  },
});
