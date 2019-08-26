<template>
  <svg aria-hidden="true" :class="['svg-icon', className]" :color="svgColor">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    svgColor: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
