<template>
  <div>
    <h1>测试页面</h1>

    <section class="section-form">
      <fieldset>
        <legend>配置参数</legend>
        <el-form inline v-model="testParams" label-width="80px">
          <el-form-item label="数组大小" prop="size">
            <el-input v-model="testParams.size" type="number"></el-input>
          </el-form-item>
        </el-form>
      </fieldset>
    </section>

    <virtual-select
      v-model="selected"
      :items="data"
      :buffer="32"
      :item-size="32"
      filterable
      filter-key="name"
    >
    <template #default="{ item }">
      <el-option slot="default" :key="item.id" :label="item.name" :value="item.value"></el-option>
    </template>
    </virtual-select>
  </div>
</template>
<script>
import VirtualSelect from '@/components/VirtualSelect.vue'

const generateData = function generateData(length) {
  const data = []
  for (let i = 0; i < length; i++) {
    const item = {
      id: i,
      name: `Label ${i + 1}`,
      value: `value ${i + 1}`,
    }
    data.push(item)
  }
  return data
}

export default {
  name: 'Test',
  components: {
    VirtualSelect,
  },
  data() {
    return {
      testParams: {
        size: 100
      },
      selected: 'value 99'
    }
  },
  computed: {
    data() {
      const { size } = this.testParams
      let length = parseInt(size, 10)
      length = Number.isNaN(length) ? 0 : length
      return generateData(length)
    },
  },
  created() {
  },
  methods: {
    filterMethod() {
    }
  },
}
</script>

<style lang="scss" scoped>
.section-form {
  margin-bottom: 20px;
}
</style>
