<template>
  <div />
</template>
<script>
// import AddRoleDialog from './add-role-dialog'
// import ShowUserInRole from './show-user-in-role'
export default {
  components: {
    // AddRoleDialog,
    // ShowUserInRole
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog1: false,
    dialog2: false,
    approver: 'target_management',
    actType: 'or',
    approvers: [
      { label: '上级', value: 'target_management', color: 'red' },
      { label: '角色', value: 'target_label', color: 'green' }
    ],
    actTypes: [
      { label: '或签', value: 'or', color: 'red' },
      { label: '与签', value: 'and', color: 'green' }
    ],
    properties: {
      actionerRules: [
        {
          type: 'target_management', // 审批人类型
          labelNames: '',
          memberCount: 1, // 审批人数
          actType: 'or' // 会签类型
        }
      ]
    }
  }),
  watch: {
    'dialog' (val) {
      this.dialog1 = val
    },
    dialog1 (val) {
      this.$emit('update:dialog', val)
    },
    approver (val) {
      this.properties.actionerRules[0].type = val
    },
    actType (val) {
      this.properties.actionerRules[0].actType = val
    }
  },
  methods: {
    save () {
      this.dialog1 = false
      // console.log(this.properties)
      this.$emit('setProperties', this.properties)
    }
  }
}
</script>
