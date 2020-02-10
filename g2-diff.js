import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';

const data = [
  { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, May: 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
  { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, May: 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 }
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'fold',
  fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'], // 展开字段集
  key: '月份',
  value: '月均降雨量'
});

const chart = new Chart({
  container: 'container',
  forceFit: true,
  height: 500
});
chart.source(dv);
chart.intervalStack()
  .position('月份*月均降雨量')
  .color('name');
chart.render();
