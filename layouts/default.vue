<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header>
      <el-row type="flex">
        <el-col :span="2">
          <nuxt-link tag="a" to="/">
            <img style="height: 60%; width: 60%; object-fit: contain" src="/logo919.png"/>
          </nuxt-link>
        </el-col>
        <el-col :span="19"/>
        <el-col :span="1">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="1"><span>Tom</span></el-col>
        <el-col :span="1">
          <el-button type="danger"
                     @click="logout"
                     :loading="logoutLoading"
                     icon="el-icon-switch-button" circle>
          </el-button>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-menu"></i>Management</template
            >
            <el-menu-item-group>
              <template slot="title">Department</template>
              <nuxt-link tag="el-menu-item" to="/departments" index="2-1">List</nuxt-link>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container style="max-height: 100%; overflow: scroll">
        <el-main>
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  transition: 'home',
  data() {
    return {
      logoutLoading: false
    }
  },
  methods: {
    logout() {
      this.logoutLoading = true
      this.$store.commit('logout')
      setTimeout(() => {
        this.$router.push({ path: "/login" })
        this.logoutLoading = false
      }, 200)
    }
  }
}
</script>

<style>
.el-header {
  background-color: #c2c2c5;
  color:#3429d4;
  line-height: 60px;
}

.el-aside {
  color: #3429d4;
}
</style>
