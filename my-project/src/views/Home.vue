<template>
  <div class=" p_dashboard">
    <div class="l_wrap p_wrap">
      <div class="l_globalnav">
        <div class="l_gLogo is_pc">
          <img class="l_gLogo_img" src="./../../public/img/common/d-dev_logo.svg" alt="D-Developpers" />
        </div>
        <nav class="l_gInner">
          <ul class="l_gUl">
            <li class="l_gLi">
              <a class="l_gLink m_dashboard is_current" href="./">ダッシュボード</a>
            </li>
            <li class="l_gLi">
              <a class="l_gLink m_task" href="./task_management">タスク管理ツール</a>
            </li>
            <li class="l_gLi">
              <a class="l_gLink m_rental" href="./rental_checker">貸し借りチェッカー</a>
            </li>
          </ul>
        </nav>
        <div class="l_account is_pc">
          <div class="l_aInner">
            <p class="l_aInfo">
              <img class="l_aIcon" src="./../../public/img/common/account_thumbnail.png" alt />
              <span class="l_aName">アカウント名</span>
            </p>
            <a class="l_aLogout" href>ログアウト</a>
          </div>
        </div>
      </div>
      <main class="l_main">
        <section class="p_sec01">
          <div class="p_s01Inner">
            <h1 class="p_s01Title">4F生物室</h1>
          </div>
          <div class="p_s01Messages">
            <p class="p_s01Message">
              こんばんは。4F生物室へようこそ。
              <br />ここでは、D-Developpersが開発・運用を行う
              <br />Webサービスの一覧を掲載しています。
            </p>
          </div>
        </section>
        <section class="p_sec02">
          <div class="p_s02Block">
            <h2 class="p_s02Head">Notification</h2>
            <Notification />
          </div>
        </section>
        <section class="p_sec03">
          <Product />
        </section>
      </main>
      <footer class="l_footer">
        <div class="l_account is_sp">
          <div class="l_aInner">
            <p class="l_aInfo">
              <img class="l_aIcon" src alt />
              <span class="l_aName">アカウント名</span>
            </p>
            <a class="l_aLogout" href>ログアウト</a>
          </div>
        </div>
        <div class="l_fInner">
          <div class="l_fLogo is_sp">
            <img src="./../../public/img/common/d-dev_logo.svg" alt="D-Developpers" />
          </div>
          <small class="l_fCredit">Supported by Djungarian Delopers</small>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Notification from '@/components/Notification.vue';
import Product from '@/components/Product.vue';

@Component({
  components: {
    Notification,
    Product,
  },
})
export default class Home extends Vue {}
</script>
