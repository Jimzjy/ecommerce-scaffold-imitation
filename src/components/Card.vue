<template>
  <div id="card">
    <h4 v-if="title != null" class="title">
      {{ title }}
    </h4>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  @Prop() readonly title!: string
}
</script>

<style lang="scss" scoped>

#card {
  background: white;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;

  .title {
    margin: 0 0 20px 0;
  }
}

</style>
