<script setup lang="ts">
import { computed } from 'vue'
import { useRouteLocale } from 'vuepress/client'

interface Locale {
  horn: string
  link: string
  amil: string
  ym: string
}

const locales: Record<string, Locale> = {
  '/': {  horn: '公告', link: '社交链接页', amil: '反馈中心', ym: '工作室' },
}

const lang = useRouteLocale()
const locale = computed(() => locales[lang.value])
</script>

<template>
  <div class="aside-nav-wrapper">
    <VPLink class="link" href="/notes/更多/公告.html">
      <span class="vpi-horn" />
      <span class="link-text">{{ locale.horn }}</span>
      <span class="vpi-arrow-right" />
    </VPLink>
    <VPLink class="link" href="/notes/更多/链接.html">
      <span class="vpi-link" />
      <span class="link-text">{{ locale.link }}</span>
      <span class="vpi-arrow-right" />
    </VPLink>
    <VPLink class="link" href="/notes/反馈中心/">
      <span class="vpi-amil" />
      <span class="link-text">{{ locale.amil }}</span>
      <span class="vpi-arrow-right" />
    </VPLink>
        <VPLink class="link" href="/notes/更多/工作室.html">
      <img class="vpi-ym" src="/rc/ym-docs-icon.svg" style="border-radius: 50%;" />
      <span class="link-text">{{ locale.ym }}</span>
      <span class="vpi-arrow-right" />
    </VPLink>
  </div>
</template>

<style scoped>
.aside-nav-wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  font-size: 0.9em;
  border-top: solid 1px var(--vp-c-divider);
}

.aside-nav-wrapper .link {
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--vp-c-text-2);
  transition: color var(--vp-t-color);
}

.aside-nav-wrapper .link:hover {
  color: var(--vp-c-brand-1);
}

.aside-nav-wrapper .link .link-text {
  flex: 1 2;
  font-size: 14px;
  padding: 4px 0;
}

.vpi-horn {
  --icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0xMi41OTQgMjMuMjU4bC0uMDEyLjAwMmwtLjA3MS4wMzVsLS4wMi4wMDRsLS4wMTQtLjAwNGwtLjA3MS0uMDM2cS0uMDE2LS4wMDQtLjAyNC4wMDZsLS4wMDQuMDFsLS4wMTcuNDI4bC4wMDUuMDJsLjAxLjAxM2wuMTA0LjA3NGwuMDE1LjAwNGwuMDEyLS4wMDRsLjEwNC0uMDc0bC4wMTItLjAxNmwuMDA0LS4wMTdsLS4wMTctLjQyN3EtLjAwNC0uMDE2LS4wMTYtLjAxOG0uMjY0LS4xMTNsLS4wMTQuMDAybC0uMTg0LjA5M2wtLjAxLjAxbC0uMDAzLjAxMWwuMDE4LjQzbC4wMDUuMDEybC4wMDguMDA4bC4yMDEuMDkycS4wMTkuMDA1LjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0cS0uMDA1LS4wMTktLjAyLS4wMjJtLS43MTUuMDAyYS4wMi4wMiAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0cS4wMDEuMDE4LjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDAzLS4wMTFsLjAxOC0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMXoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMjAuMjU1IDUuNTJsLjA4Ny4yOThsLjA4OS4zMzhsLjA0NC4xODVsLjA4OS40bC4wODUuNDQzbC4wODEuNDg1cS4wMzguMjUzLjA3NC41MjhsLjA2NS41NzJjLjA4Ljc5MS4xMzEgMS43LjEzMSAyLjczMXMtLjA1IDEuOTQtLjEzIDIuNzMxbC0uMDY2LjU3MnEtLjAzNS4yNzUtLjA3NC41MjhsLS4wOC40ODVsLS4wODYuNDQzbC0uMDg5LjRsLS4wODkuMzZsLS4wODguMzE3bC0uMDQzLjE0NGMtLjMzMSAxLjA4Ny0xLjQ2NCAxLjUwNS0yLjM5NCAxLjE5NWwtMS4xOC0uMzkzbC0uNC45MzNhMiAyIDAgMCAxLTIuNDcgMS4xMWwtNS4wOTYtMS43YTIgMiAwIDAgMS0xLjIwNi0yLjY4NGwuMjY5LS42MjhMNyAxNS4wNTVsLTEuMzY4LjQ1NkEyIDIgMCAwIDEgMyAxMy42MTNWOS4zODhBMiAyIDAgMCAxIDUuNjMyIDcuNDlMNyA3Ljk0NmwxMC44NjEtMy42MmMuOTMtLjMxIDIuMDYzLjEwNyAyLjM5NCAxLjE5NE05LjY4MiAxNS45NDhsLS4zMzUuNzhsNS4wOTYgMS43bC4zMzUtLjc4MXptOC43MDYtOS42OUw4IDkuNzIxdjMuNTU4bDEwLjM4OCAzLjQ2M2wuMDc3LS4yODNsLjA4LS4zMjdsLjA0LS4xOGwuMDc4LS4zOTRhMTggMTggMCAwIDAgLjA3Ni0uNDM5bC4wNy0uNDg1Yy4xMTItLjg0Ny4xOTEtMS44ODcuMTkxLTMuMTM0cy0uMDgtMi4yODctLjE5LTMuMTM0bC0uMDcxLS40ODVxLS4wMzctLjIzLS4wNzYtLjQ0bC0uMDc5LS4zOTNsLS4wOC0uMzQ5ek01IDkuMzg4djQuMjI1bDEtLjMzNFY5LjcyMXoiLz48L2c+PC9zdmc+");
}

.vpi-link {
  --icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJtMTIuNTkzIDIzLjI1OGwtLjAxMS4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE0LS4wMDRsLS4wNzEtLjAzNXEtLjAxNi0uMDA1LS4wMjQuMDA1bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdxLS4wMDQtLjAxNi0uMDE3LS4wMThtLjI2NS0uMTEzbC0uMDEzLjAwMmwtLjE4NS4wOTNsLS4wMS4wMWwtLjAwMy4wMTFsLjAxOC40M2wuMDA1LjAxMmwuMDA4LjAwN2wuMjAxLjA5M3EuMDE5LjAwNS4wMjktLjAwOGwuMDA0LS4wMTRsLS4wMzQtLjYxNHEtLjAwNS0uMDE4LS4wMi0uMDIybS0uNzE1LjAwMmEuMDIuMDIgMCAwIDAtLjAyNy4wMDZsLS4wMDYuMDE0bC0uMDM0LjYxNHEuMDAxLjAxOC4wMTcuMDI0bC4wMTUtLjAwMmwuMjAxLS4wOTNsLjAxLS4wMDhsLjAwNC0uMDExbC4wMTctLjQzbC0uMDAzLS4wMTJsLS4wMS0uMDF6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE2LjI0MyA5Ljg3OGExIDEgMCAwIDEgMS4zMi0uMDgzbC4wOTQuMDgzTDE5Ljc3OCAxMmE1LjUgNS41IDAgMCAxLTcuNTk2IDcuOTUyTDEyIDE5Ljc3OGwtMi4xMjEtMi4xMjFhMSAxIDAgMCAxIDEuMzItMS40OThsLjA5NC4wODNsMi4xMjEgMi4xMjJhMy41IDMuNSAwIDAgMCA1LjA5MS00LjhsLS4xNDEtLjE1bC0yLjEyMS0yLjEyMWExIDEgMCAwIDEgMC0xLjQxNU05LjE3IDkuMTcxYTEgMSAwIDAgMSAxLjMyLS4wODNsLjA5NS4wODNsNC4yNDIgNC4yNDNhMSAxIDAgMCAxLTEuMzIgMS40OTdsLS4wOTQtLjA4M2wtNC4yNDMtNC4yNDJhMSAxIDAgMCAxIDAtMS40MTVtLTQuOTUtNC45NWE1LjUgNS41IDAgMCAxIDcuNTk3LS4xNzNsLjE4Mi4xNzRsMi4xMjEgMi4xMkExIDEgMCAwIDEgMTIuOCA3Ljg0bC0uMDk0LS4wODNsLTIuMTIxLTIuMTIxYTMuNSAzLjUgMCAwIDAtNS4wOTEgNC44bC4xNDEuMTVsMi4xMjEgMi4xMmExIDEgMCAwIDEtMS4zMiAxLjQ5OGwtLjA5NC0uMDgzTDQuMjIyIDEyYTUuNSA1LjUgMCAwIDEgMC03Ljc3OFoiLz48L2c+PC9zdmc+");
}

.vpi-amil {
  --icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJtMTIuNTkzIDIzLjI1OGwtLjAxMS4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE0LS4wMDRsLS4wNzEtLjAzNXEtLjAxNi0uMDA1LS4wMjQuMDA1bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdxLS4wMDQtLjAxNi0uMDE3LS4wMThtLjI2NS0uMTEzbC0uMDEzLjAwMmwtLjE4NS4wOTNsLS4wMS4wMWwtLjAwMy4wMTFsLjAxOC40M2wuMDA1LjAxMmwuMDA4LjAwN2wuMjAxLjA5M3EuMDE5LjAwNS4wMjktLjAwOGwuMDA0LS4wMTRsLS4wMzQtLjYxNHEtLjAwNS0uMDE4LS4wMi0uMDIybS0uNzE1LjAwMmEuMDIuMDIgMCAwIDAtLjAyNy4wMDZsLS4wMDYuMDE0bC0uMDM0LjYxNHEuMDAxLjAxOC4wMTcuMDI0bC4wMTUtLjAwMmwuMjAxLS4wOTNsLjAxLS4wMDhsLjAwNC0uMDExbC4wMTctLjQzbC0uMDAzLS4wMTJsLS4wMS0uMDF6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIwIDRhMiAyIDAgMCAxIDEuOTk1IDEuODVMMjIgNnYxMmEyIDIgMCAwIDEtMS44NSAxLjk5NUwyMCAyMEg0YTIgMiAwIDAgMS0xLjk5NS0xLjg1TDIgMThWNmEyIDIgMCAwIDEgMS44NS0xLjk5NUw0IDR6bTAgMy40MTRsLTYuOTQgNi45NGExLjUgMS41IDAgMCAxLTIuMTIgMEw0IDcuNDE0VjE4aDE2ek0xOC41ODYgNkg1LjQxNEwxMiAxMi41ODZ6Ii8+PC9nPjwvc3ZnPg==");
}

</style>
