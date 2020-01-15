<template>
  <div class="dingflow-design">
    <div class="zoom">
      <div class="zoom-out" /><span>100%</span><div class="zoom-in" />
    </div>
    <div class="ie-polyfill-container">
      <div
        id="box-scale"
        class="box-scale"
        style="transform: scale(1); transform-origin: 50% 0px 0px;"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
        >
          <Node
            :node="item"
            @addnode="addnode"
            @delNode="delNode(item)"
          />
        </div>
        <EndNode />
      </div>
    </div>
  </div>
</template>
<script>
import EndNode from './procdef/end-node'
export default {
  components: {
    EndNode
  },
  data () {
    return {
      node1: {
        name: '发起人',
        type: 'start',
        nodeId: 'sid-startevent',
        childNode: {
          name: 'UNKNOWN',
          type: 'approver',
          prevId: 'sid-startevent',
          nodeId: '7cf3_1699',
          properties: {
            activateType: 'ALL',
            agreeAll: true,
            actionerRules: [
              {
                type: 'target_label',
                labelNames: '主管',
                labels: 427529101,
                isEmpty: false,
                memberCount: 0,
                actType: 'and'
              }
            ],
            noneActionerAction: 'admin'
          },
          childNode: {
            type: 'route',
            prevId: '7cf3_1699',
            nodeId: 'e00d_7667',
            conditionNodes: [
              {
                name: '条件1',
                type: 'condition',
                prevId: 'e00d_7667',
                nodeId: 'ff40_9cf9',
                properties: {
                  conditions: [
                    [
                      {
                        type: 'dingtalk_actioner_range_condition',
                        paramKey: 'MoneyField-J8R09VIT',
                        paramLabel: '住宿费（元）',
                        lowerBound: 100,
                        upperBound: '',
                        isEmpty: false,
                        valid: 'valid'
                      },
                      {
                        type: 'dingtalk_actioner_range_condition',
                        paramKey: 'MoneyField-J8R09VIU',
                        paramLabel: '餐饮费（元）',
                        lowerBound: 100,
                        upperBound: '',
                        isEmpty: false,
                        valid: 'valid'
                      }
                    ]
                  ]
                },
                childNode: {
                  name: '审批人',
                  type: 'approver',
                  prevId: 'ff40_9cf9',
                  nodeId: 'sid-1234_5678',
                  properties: {
                    activateType: 'ONE_BY_ONE',
                    agreeAll: false,
                    allowTaskAppend: false,
                    allowTaskRedirect: true,
                    actionerRules: [
                      {
                        type: 'target_management',
                        level: 1,
                        isEmpty: false,
                        autoUp: true
                      }
                    ],
                    noneActionerAction: 'admin'
                  }
                }
              },
              {
                name: '条件2',
                type: 'condition',
                prevId: 'e00d_7667',
                nodeId: '8f5e_917f',
                properties: {
                  conditions: [
                    [
                      {
                        type: 'dingtalk_actioner_range_condition',
                        paramKey: 'MoneyField-J8R09VIT',
                        paramLabel: '住宿费（元）',
                        lowerBound: '',
                        upperBound: '',
                        isEmpty: false,
                        valid: 'valid',
                        lowerBoundNotEqual: '',
                        upperBoundEqual: 100,
                        boundEqual: '',
                        key: 'le'
                      },
                      {
                        type: 'dingtalk_actioner_range_condition',
                        paramKey: 'MoneyField-J8R09VIU',
                        paramLabel: '餐饮费（元）',
                        lowerBound: '',
                        upperBound: '',
                        isEmpty: false,
                        valid: 'valid',
                        lowerBoundNotEqual: '',
                        upperBoundEqual: 100,
                        boundEqual: '',
                        key: 'le'
                      }
                    ]
                  ]
                },
                childNode: {
                  name: 'UNKNOWN',
                  type: 'approver',
                  prevId: '8f5e_917f',
                  nodeId: '2906_1c37',
                  properties: {
                    activateType: 'ONE_BY_ONE',
                    agreeAll: false,
                    actionerRules: [
                      {
                        type: 'target_management',
                        level: 1,
                        isEmpty: false,
                        autoUp: true
                      }
                    ],
                    noneActionerAction: 'admin'
                  }
                }
              }
            ],
            properties: {}
          }
        }
      }
    }
  }
}
</script>
