<template>
  <div>列表</div>
</template>

<script setup lang="ts">
const data = [
  {
    data: [
      {
        name: "15419",
        value: {
          "2022-08-15": {
            ap1: null,
            ap2: null,
          },
          "2022-08-16": {
            ap1: {
              type: "专家",
              drCode: "15419",
              drName: "章志娟",
              title: "正主任",
              deptCode: "579",
              deptName: "心内科门诊",
              schedulingNo: "579_2022-08-16_上午__15419_H0002",
              visitDate: "2022-08-16",
              weekDay: "星期二",
              ap: "1",
              fee: "35.0",
              status: "1",
              amount: "22",
              remainingAmount: "22",
              registerAmount: "0",
              scList: null,
              sortNo: null,
              areaCode: "H0002",
              visitTimeList: [
                {
                  ap: "1",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_上午__15419_H0002",
                  seqNo: "952652_20220816_上午_8:00-8:30_1_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "8:00-8:30(余1)",
                },
                {
                  ap: "1",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_上午__15419_H0002",
                  seqNo: "952652_20220816_上午_8:30-9:00_2_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "8:30-9:00(余3)",
                },
                {
                  ap: "1",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_上午__15419_H0002",
                  seqNo: "952652_20220816_上午_9:00-9:30_3_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "9:00-9:30(余3)",
                },
                {
                  ap: "1",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_上午__15419_H0002",
                  seqNo: "952652_20220816_上午_9:30-10:00_4_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "9:30-10:00(余4)",
                },
                {
                  ap: "1",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_上午__15419_H0002",
                  seqNo: "952652_20220816_上午_10:00-10:30_5_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "10:00-10:30(余5)",
                },
                {
                  ap: "1",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_上午__15419_H0002",
                  seqNo: "952652_20220816_上午_10:30-11:00_6_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "10:30-11:00(余3)",
                },
                {
                  ap: "1",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_上午__15419_H0002",
                  seqNo: "952652_20220816_上午_11:00-11:30_7_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "11:00-11:30(余3)",
                },
              ],
              visitTimeShow: true,
              classFlag: "left-flag hover_box",
            },
            ap2: {
              type: "专家",
              drCode: "15419",
              drName: "章志娟",
              title: "正主任",
              deptCode: "579",
              deptName: "心内科门诊",
              schedulingNo: "579_2022-08-16_下午__15419_H0002",
              visitDate: "2022-08-16",
              weekDay: "星期二",
              ap: "2",
              fee: "35.0",
              status: "1",
              amount: "20",
              remainingAmount: "20",
              registerAmount: "0",
              scList: null,
              sortNo: null,
              areaCode: "H0002",
              visitTimeList: [
                {
                  ap: "2",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_下午__15419_H0002",
                  seqNo: "952653_20220816_下午_14:00-14:30_9_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "14:00-14:30(余4)",
                },
                {
                  ap: "2",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_下午__15419_H0002",
                  seqNo: "952653_20220816_下午_14:30-15:00_10_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "14:30-15:00(余4)",
                },
                {
                  ap: "2",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_下午__15419_H0002",
                  seqNo: "952653_20220816_下午_15:00-15:30_11_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "15:00-15:30(余4)",
                },
                {
                  ap: "2",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_下午__15419_H0002",
                  seqNo: "952653_20220816_下午_15:30-16:00_12_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "15:30-16:00(余4)",
                },
                {
                  ap: "2",
                  organCode: "320705020",
                  schedulingNo: "579_2022-08-16_下午__15419_H0002",
                  seqNo: "952653_20220816_下午_16:00-16:30_13_H0002",
                  status: "1",
                  visitDate: "20220816",
                  visitTime: "16:00-16:30(余4)",
                },
              ],
              visitTimeShow: true,
              classFlag: "left-flag hover_box",
            },
          },
          "2022-08-17": {
            ap1: null,
            ap2: null,
          },
          "2022-08-18": {
            ap1: null,
            ap2: null,
          },
          "2022-08-19": {
            ap1: null,
            ap2: null,
          },
          "2022-08-20": {
            ap1: {
              type: "专家",
              drCode: "15419",
              drName: "章志娟",
              title: "正主任",
              deptCode: "579",
              deptName: "心内科门诊",
              schedulingNo: "579_2022-08-20_上午__15419_H0002",
              visitDate: "2022-08-20",
              weekDay: "星期六",
              ap: "1",
              fee: "35.0",
              status: "1",
              amount: "30",
              remainingAmount: "30",
              registerAmount: "0",
              scList: null,
              sortNo: null,
              areaCode: "H0002",
            },
            ap2: null,
          },
          "2022-08-21": {
            ap1: null,
            ap2: null,
          },
        },
        title: "章志娟(正主任)",
      },
    ],
    name: "高新院区",
  },
  {
    data: [
      {
        name: "15419",
        value: {
          "2022-08-15": {
            ap1: {
              type: "专家",
              drCode: "15419",
              drName: "章志娟",
              title: "正主任",
              deptCode: "24304",
              deptName: "心内科门诊",
              schedulingNo: "24304_2022-08-15_上午__15419_H0001",
              visitDate: "2022-08-15",
              weekDay: "星期一",
              ap: "1",
              fee: "35.0",
              status: "1",
              amount: "0",
              remainingAmount: "0",
              registerAmount: "0",
              scList: null,
              sortNo: null,
              areaCode: "H0001",
            },
            ap2: {
              type: "专家",
              drCode: "15419",
              drName: "章志娟",
              title: "正主任",
              deptCode: "24304",
              deptName: "心内科门诊",
              schedulingNo: "24304_2022-08-15_下午__15419_H0001",
              visitDate: "2022-08-15",
              weekDay: "星期一",
              ap: "2",
              fee: "35.0",
              status: "1",
              amount: "12",
              remainingAmount: "12",
              registerAmount: "0",
              scList: null,
              sortNo: null,
              areaCode: "H0001",
            },
          },
          "2022-08-16": {
            ap1: null,
            ap2: null,
          },
          "2022-08-17": {
            ap1: null,
            ap2: null,
          },
          "2022-08-18": {
            ap1: null,
            ap2: null,
          },
          "2022-08-19": {
            ap1: null,
            ap2: null,
          },
          "2022-08-20": {
            ap1: null,
            ap2: null,
          },
          "2022-08-21": {
            ap1: null,
            ap2: null,
          },
        },
        title: "章志娟(正主任)",
      },
    ],
    name: "通灌院区",
  },
];

data.map((val, idx) => {
  val.data.map((dataValue, index) => {
    for (const i in dataValue.value) {
      for (const j in dataValue.value[i]) {
        if (dataValue.value[i][j]) {
          data[idx].data[index].value[i][j].visitTimeShow = false;
        }
      }
    }
  });
});

console.log(data);
</script>

<style lang="less" scoped></style>
