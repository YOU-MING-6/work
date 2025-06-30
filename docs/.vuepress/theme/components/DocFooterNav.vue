<script setup lang="ts"></script>

<template>
  <div>
    <p style="color: var(--vp-c-text-2);">
      <span class="icon"></span>
      转载本站任何内容请遵守
      <VPLink class="footer-link" href="/notes/协议/转载.html">
        《转载文章内容协议》
      </VPLink>
    </p>
  </div>
  <hr class="hr"></hr>
</template>

<style scoped>

.hr {
  margin: 16px 0;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  transition: border-top var(--vp-t-color);
}

.footer-link {
  color: var(--vp-c-brand-2);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid var(--vp-c-brand-3);
  padding: 0 0.15em;
  border-radius: 0.2em;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.footer-link:hover {
  color: #fff;
  background: linear-gradient(90deg, var(--vp-c-brand-3) 0%, var(--vp-c-brand-1) 100%);
  border-color: var(--vp-c-brand-1);
  text-decoration: none;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48cGF0aCBkPSJtMTIuNTkzIDIzLjI1OGwtLjAxMS4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE0LS4wMDRsLS4wNzEtLjAzNXEtLjAxNi0uMDA1LS4wMjQuMDA1bC0uMDA0LjAxbC0uMDE3LjQyOGwuMDA1LjAybC4wMS4wMTNsLjEwNC4wNzRsLjAxNS4wMDRsLjAxMi0uMDA0bC4xMDQtLjA3NGwuMDEyLS4wMTZsLjAwNC0uMDE3bC0uMDE3LS40MjdxLS4wMDQtLjAxNi0uMDE3LS4wMThtLjI2NS0uMTEzbC0uMDEzLjAwMmwtLjE4NS4wOTNsLS4wMS4wMWwtLjAwMy4wMTFsLjAxOC40M2wuMDA1LjAxMmwuMDA4LjAwN2wuMjAxLjA5M3EuMDE5LjAwNS4wMjktLjAwOGwuMDA0LS4wMTRsLS4wMzQtLjYxNHEtLjAwNS0uMDE4LS4wMi0uMDIybS0uNzE1LjAwMmEuMDIuMDIgMCAwIDAtLjAyNy4wMDZsLS4wMDYuMDE0bC0uMDM0LjYxNHEuMDAxLjAxOC4wMTcuMDI0bC4wMTUtLjAwMmwuMjAxLS4wOTNsLjAxLS4wMDhsLjAwNC0uMDExbC4wMTctLjQzbC0uMDAzLS4wMTJsLS4wMS0uMDF6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkgM2ExIDEgMCAwIDEgLjExNyAxLjk5M0w5IDVINXYxNGgxNHYtOWExIDEgMCAwIDEgMS45OTMtLjExN0wyMSAxMHY5YTIgMiAwIDAgMS0xLjg1IDEuOTk1TDE5IDIxSDVhMiAyIDAgMCAxLTEuOTk1LTEuODVMMyAxOVY1YTIgMiAwIDAgMSAxLjg1LTEuOTk1TDUgM3ptMTAuNTEzIDBjLjYyMiAwIC45ODQuNDY4IDEuMDc1Ljg1NmMuMDkxLjM4OS0uMDI1Ljk3MS0uNTg1IDEuMjQ3bC0uNDE0LjIxMWwtLjE2NC4wODhsLS4zNjMuMjAxbC0uNDA1LjIzNmwtLjQzOS4yN2MtLjY4Mi40My0xLjQ2Ljk3Ni0yLjI0MiAxLjYzN2MtMS42NTQgMS4zOTktMy4yNTggMy4yNjEtNC4wMjcgNS41N2ExIDEgMCAwIDEtMS44OTgtLjYzMmMuOTI4LTIuNzg0IDIuODIzLTQuOTMzIDQuNjM0LTYuNDY1Yy40MzEtLjM2NS44NjItLjY5OCAxLjI3OC0xbC4zMS0uMjE5SDE0YTEgMSAwIDAgMS0uMTE3LTEuOTkzTDE0IDN6Ii8+PC9nPjwvc3ZnPg==");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: invert(48%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(90%) contrast(90%);
}

</style>