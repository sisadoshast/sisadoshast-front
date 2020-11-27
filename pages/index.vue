<template>
  <div>
    <arsham v-for="name in names" :key="name" :name="name" @kir="handleKir" />
    <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140">
              </el-table-column>
              <el-table-column prop="name" label="Name" width="120">
              </el-table-column>
              <el-table-column prop="address" label="Address"> </el-table-column>
    </el-table>
    <h2>{{ $store.state.count }}</h2>
    <button @click="$store.commit('increment')">increment</button>
  </div>
</template>

<script>

import Arsham from '~/components/Arsham.vue';

export default {
  components: {
      Arsham
  },
  mounted() {
      fetch("https://reqres.in/api/users?page=2")
      .then(response => response.json())
      .then(function(data) {
          console.log(data)
          alert(JSON.stringify(data))
      })
      .catch(function() {
          // This is where you run code if the server returns any errors
      });
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    };
    return {
      tableData: Array(10).fill(item),
      names: [
        'Arsham',
        'Ali',
        'Nima'
      ]
    };
  },
  methods: {
    handleKir(name) {
      alert('kir tu ' + name)
    }
  }
};
</script>