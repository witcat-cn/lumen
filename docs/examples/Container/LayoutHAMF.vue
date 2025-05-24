<template>
  <div class="common-layout">
    <lm-layout direction="vertical">
      <lm-header>
        <lm-container>
          <p>Header</p>
        </lm-container>
      </lm-header>
      <lm-layout>
        <lm-aside>
          <lm-container direction="vertical">
            <p>Aside</p>
          </lm-container>
        </lm-aside>
        <lm-layout direction="vertical">
          <lm-main>
            <lm-container>
              <p>Main</p>
            </lm-container>
          </lm-main>
          <lm-footer>
            <lm-container>
              <p>Footer</p>
            </lm-container>
          </lm-footer>
        </lm-layout>
      </lm-layout>
    </lm-layout>
  </div>
</template>
