<template>
  <div :class="[node.type === 'start' ? 'node-wrap-box node_sid-startevent start-node' : 'node-wrap-box']">
    <div>
      <div
        class="title"
        data-spm-anchor-id="0.0.0.i2.2f244490ZxXSWD"
        :style="titlebg"
      >
        <span class="">{{ node.name }}</span>
      </div>
      <div class="content">
        <div class="text">
          {{ node.name }}
        </div><i
          aria-label="icon: right"
          class="anticon anticon-right arrow"
        ><svg
          viewBox="64 64 896 896"
          focusable="false"
          class=""
          data-icon="right"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        ><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" /></svg></i>
      </div>
    </div>
    <AddNodeApprover
      :dialog.sync="dialog"
      @setProperties="setProperties"
    />
  </div>
</template>
<script>
import AddNodeApprover from './add-node-approver'
export default {
  name: 'NodeWrapBox',
  components: {
    AddNodeApprover
  },
  props: {
    node: {
      type: Object,
      default: Object
    }
  },
  data: () => ({
    dialog: false,
    text: '请选择',
    bg1: 'background: rgb(87, 106, 149);',
    bg2: 'background: rgb(255, 148, 62);',
    titlebg: ''
  }),
  mounted () {
    if (this.node.type === 'start') {
      this.titlebg = this.bg1
    } else {
      this.titlebg = this.bg2
    }
    this.setText()
  },
  methods: {
    delNode () {
      this.$emit('delNode')
    },
    addApprover () {
      this.dialog = true
    },
    setProperties (properties) {
      this.node.properties = properties
      this.setText()
    },
    setText () {
      if (this.node.type === 'start') {
        this.text = '所有人'
      }
      // console.log(this.node.properties)
      if (this.node.properties) {
        // console.log(this.node.properties.actionerRules[0].type)
        if (this.node.properties.actionerRules[0].type === 'target_management') {
          this.text = '上级'
        } else {
          this.text = this.node.properties.actionerRules[0].labelNames
        }
        var actType = this.node.properties.actionerRules[0].actType === 'and' ? '与签' : '或签'
        this.text += '-' + actType
      }
    }
  }
}
</script>
