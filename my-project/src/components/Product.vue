<template>
  <ul class="p_s03Ul">
    <li class="p_s03Li" v-for="(value, key, index) in products" v-bind:key="index">
      <template v-if="value.link">
        <a class="p_s03Card" v-bind:href="value.link">
          <div class="p_s03Card_inner">
            <div class="p_s03Textarea">
              <h2 class="p_s03Card_name" v-bind:class="value.icon">{{value.name}}</h2>
              <div class="p03cTextarea_inner">
                <img v-if="value.spImg" class="p_s03Img is_sp" v-bind:src="value.spImg" v-bind:alt="value.name">
                <p class="p_s03Card_text">{{value.summary}}</p>
                <small class="p_s03Card_released">
                  <template v-if="value.update">
                    <span class="p_s03Card_rLabel">Last updated:</span> {{value.update}}
                  </template>
                  <template v-else>
                    <span class="p_s03Card_rLabel">Coming Soon ...</span>
                  </template>
                </small>
              </div>
            </div>
            <div class="p_s03Imgarea is_pc">
              <img class="p_s03Img" v-bind:src="value.img" v-bind:alt="value.name">
            </div>
          </div>
        </a>
      </template>
      <template v-else>
        <div class="p_s03Card">
          <div class="p_s03Card_inner">
            <div class="p_s03Textarea">
              <h2 class="p_s03Card_name" v-bind:class="value.icon">{{value.name}}</h2>
              <div class="p03cTextarea_inner">
                <img v-if="value.spImg" class="p_s03Img is_sp" v-bind:src="value.spImg" v-bind:alt="value.name">
                <p class="p_s03Card_text">{{value.summary}}</p>
                <small class="p_s03Card_released">
                    <template v-if="value.update">
                      <span class="p_s03Card_rLabel">Last updated:</span> {{value.update}}
                    </template>
                    <template v-else>
                      <span class="p_s03Card_rLabel">Coming Soon ...</span>
                    </template>
                </small>
              </div>
            </div>
            <div class="p_s03Imgarea is_pc">
              <img class="p_s03Img" v-bind:src="value.img" v-bind:alt="value.name">
            </div>
          </div>
        </div>
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Product extends Vue {
  private products = [
    {
      no: 1,
      name: 'タスク管理ツール',
      icon: 'm_task',
      link: '/task_management',
      summary: '自分が抱えている現状の課題を整理し、それぞれの優先度や作業の進捗を可視化するためのツールです。',
      img: './img/dashboard/pc_task_thumbnail01.png',
      spImg: './img/dashboard/sp_task_thumbnail01.png',
      update: '2019.06.20',
    }, {
      no: 2,
      name: '貸し借りチェッカー',
      icon: 'm_rental',
      // link: '/rental_checker',
      summary: '自分が貸しているものや、他人から借りているものをひと目で確認することができるツールです。',
      img: './img/dashboard/pc_task_thumbnail01.png',
      spImg: './img/dashboard/sp_task_thumbnail01.png',
      // update: '2019.06.19'
    },
  ];
}
</script>