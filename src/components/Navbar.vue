<template>
  <div id="navbar">
    <section class="hero is-link is-border">
      <div class="hero-body">
        <p class="title">
          Shut BB
        </p>
        <p class="subtitle">
          a bbs
        </p>
      </div>
    </section>
    <nav class="navbar is-light is-border is-small">
      <div class="navbar-menu ml-2">
        <div class="navbar-start">
          <router-link to="/portal" class="navbar-item" active-class="is-active">
            <span class="icon mr-1 is-small">
              <img src="./../assets/icon/portal.svg"/>
            </span>
            门户
          </router-link>

          <router-link to="/forum" class="navbar-item" active-class="is-active">
            <span class="icon mr-1 is-small">
              <img src="./../assets/icon/forum.svg"/>
            </span>
            论坛
          </router-link>

          <router-link to="/members" class="navbar-item" active-class="is-active">
            <span class="icon mr-1 is-small">
              <img src="./../assets/icon/members.svg"/>
            </span>
            用户
          </router-link>

          <router-link to="/search" class="navbar-item" active-class="is-active">
            <span class="icon mr-1 is-small">
              <img src="./../assets/icon/search.svg"/>
            </span>
            搜索
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-info is-small">登录</a>
              </p>
              <p class="control">
                <a class="button is-info is-small">注册</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data: function() {
      return {
        menhu: "src/assets/icon/menhu.png"
      }
    }
  }
</script>

<style lang="stylus">
</style>