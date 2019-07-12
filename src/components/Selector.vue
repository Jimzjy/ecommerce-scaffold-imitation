<template>
  <div id="selector" v-if="props">
    <span v-for="(item, index) in props" :key="index">
      <span @click="() => changeData(index)" :class="['indicator', selected == index ? 'selected': '']">{{ item }}</span>
      <el-divider direction="vertical" v-if="index < props.length - 1"></el-divider>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Selector extends Vue {
  @Prop() readonly props!: string

  selected = 0

  @Emit('changeData')
  changeData (index: number) {
    this.selected = index
    return index
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_global.scss';

.indicator {
  color: $light-font-color;
  font-size: 12px;

  &:hover {
    color: $font-color;
    cursor: pointer;
  }
}

.selected {
  color: $primary-color;
}

</style>
