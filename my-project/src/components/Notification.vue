<template>
  <ul class="p_s02Ul">
    <li class="p_s02Li" v-for="(value, key, index) in notifications" v-bind:key="index">
      <template v-if="value.important">
        <p class="p_s02Label is_important" v-html="value.text"></p>
      </template>
      <template v-else>
        <p class="p_s02Label" v-html="value.text"></p>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Notification extends Vue {
  private notifications = [
    {
      no: 1,
      text: '期日が超過しているタスクが5件あります。',
      important: true,
    }, {
      no: 2,
      text: '『<a href="/task_management" class="p_s02Link">タスク管理ツール</a>』サービスをリリースしました！',
    }, {
      no: 3,
      text: '『<a href="/task_management" class="p_s02Link">タスク管理ツール</a>』をアップデートしました。',
    },
  ];
}
</script>