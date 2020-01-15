<template>
  <div class="add-node-btn">
    <button
      class="btn"
      type="button"
    >
      <span class="iconfont"><h1>+</h1></span>
    </button>
    <!-- <AddNodeDialog
      :dialog.sync="dialog"
      :node="node"
      @addnode="addnode"
    /> -->
  </div>
</template>
<script>
// import AddNodeDialog from './add-node-dialog'
export default {
  name: 'AddNodeBtn',
  components: {
    // AddNodeDialog
  },
  props: {
    node: {
      type: Object,
      default: undefined
    }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    click () {
      this.dialog = true
    },
    addnode (node) {
      this.$emit('addnode', node)
    }
  }
}
</script>
