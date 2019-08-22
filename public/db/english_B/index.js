import vocabularyEnglishDB from './vocabulary-english.db';
import englishChineseTranslation from './english-chinese-translation.db';

export default [
  {
    name: 'vocabulary_english',
    type: 'choice',
    title: '词汇与结构',
    description: '',
    data: vocabularyEnglishDB,
  },
  {
    name: 'english_chinese_translation',
    type: 'translation',
    title: '英译汉',
    description: '',
    data: englishChineseTranslation,
  },
];
