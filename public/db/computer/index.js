import basicDB from './basic.db';
import windowsDB from './windows.db';
import wordDB from './word.db';

export default [
  {
    name: 'basic',
    type: 'choice',
    title: '计算机基础知识',
    description: '',
    data: basicDB,
  },
  {
    name: 'windows',
    type: 'choice',
    title: 'Windows操作系统及其应用',
    description: '',
    data: windowsDB,
  },
  {
    name: 'word',
    type: 'choice',
    title: 'Word 文字编辑',
    description: '',
    data: wordDB,
  },
];
