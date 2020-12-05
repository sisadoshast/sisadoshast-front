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
    {{ response }}
  </div>
</template>

<script>

import Arsham from '~/components/Arsham.vue';
import config from '~/plugins/config'

export default {
  components: {
      Arsham
  },
  async asyncData({ params, error }) {
    const response = await fetch(`${config.server}/api/departments`)
      .then(res => res.json())
    return { response }
  },
  mounted() {
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
      ],
      response: {}
    };
  },
  methods: {
    handleKir(name) {
      alert('kir tu ' + name)
    }
  }
};
</script>
