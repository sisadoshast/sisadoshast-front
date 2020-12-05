<template>
  <el-container>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="organization.name"
        label="Organization Name">
      </el-table-column>
      <el-table-column
        label="Operations"
        width="120">
        <template slot-scope="scope">
          <nuxt-link :to="`/departments/${scope.row.id}`" type="text" size="small">Detail</nuxt-link>
          <el-button type="text" size="small" @click="openEditDialog(scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Shipping address" :visible.sync="editFormVisible">
      <el-form :model="selected">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="selected.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="selected.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai"></el-option>
            <el-option label="Zone No.2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="editFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="editFormVisible = false">Confirm</el-button>
  </span>
    </el-dialog>

  </el-container>
</template>

<script>
import config from '~/plugins/config'

export default {
  data() {
      return {
        list: [],
        editFormVisible: false,
        selected: {}
      }
  },
  async asyncData({ params, error }) {
    const list = await fetch(`${config.server}/api/departments`)
      .then(res => res.json())
    return { list }
  },
  methods: {
    openEditDialog(row) {
      this.selected = row
      this.editFormVisible = true
    }
  }
}
</script>
