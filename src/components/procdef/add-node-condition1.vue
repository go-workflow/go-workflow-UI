<template>
  <AModal :dialog="show1">
    <div class="side-modal-body">
      <div class="side-modal-body-content">
        <div class="panel-condition">
          <div class="ant-row-flex ant-row-flex-middle condition-tip">
            <div class="ant-col ant-col-1">
              <i
                aria-label="icon: info-circle"
                class="anticon anticon-info-circle"
                style="color: rgb(16, 142, 233);"
              ><svg
                viewBox="64 64 896 896"
                focusable="false"
                class=""
                data-icon="info-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              ><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" /><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" /></svg></i>
            </div>
            <div class="ant-col ant-col-19 tip">
              当审批单同时满足以下条件时进入此流程
            </div>
          </div>
          <ConditionGroup
            v-for="(item, index) in properties.conditions[0]"
            :key="index"
            :data.sync="item"
            :pos="index"
            @del="delGroup(index)"
          />
          <ConditionAddBtn @click="addCondition" />
          <div>
            <button
              type="button"
              class="ant-btn ant-btn-default"
              @click="cancel"
            >
              <span>取 消</span>
            </button>
            <button
              type="button"
              class="ant-btn ant-btn-primary"
              @click="save"
            >
              <span>保 存</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </AModal>
</template>
<script>
import ConditionGroup from './condition-group'
import ConditionAddBtn from './condition-add-btn'
export default {
  components: {
    ConditionGroup,
    ConditionAddBtn
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    properties: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      show1: false,
      type1: 'dingtalk_actioner_range_condition'
    }
  },
  watch: {
    show (val) {
      this.show1 = val
    },
    show1 (val) {
      this.$emit('update:show', val)
    }
  },
  mounted () {
  },
  methods: {
    ifValid (cond) {
      if (!cond.paramKey || !cond.paramLabel) {
        alert('参数的paramKey和paramLabel 值不能为空')
        return false
      }
      if (!cond.type || cond.type === '') {
        alert('条件类型不能为空')
        return false
      }

      return true
    },
    cancel () {
      this.$emit('update:show', false)
    },
    save () {
      if (this.properties.conditions[0].length === 0) {
        alert('条件不能为空')
        return
      }
      var flag = this.properties.conditions[0].every(cond => {
        return this.ifValid(cond)
      })
      // console.log(flag)
      if (flag) {
        this.show1 = false
        this.$emit('on-success', this.properties)
      }
    },
    addCondition () {
      this.properties.conditions[0].push({
        pos: this.properties.conditions[0].length + 1,
        type: this.type1
      })
    },
    delGroup (index) {
      this.properties.conditions[0].splice(index, 1)
    }
  }
}
</script>
