<script setup lang="ts"></script>

<template>
  <div>
    <p style="color: var(--vp-c-text-2); font-size: 14px;">
      | Youming 工作室 |
      <VPLink class="footer-link" href="/notes/协议/转载.html">
        转载须知 
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

</style>