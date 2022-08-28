const 탁주 = ['탁주', '생탁주', '살균탁주', '전통 수제 탁주', '생막걸리'];
const 약주 = ['청주', '살균약주', '약주(생약주)', '약주'];
const 증류주 = ['증류주', '소주', '일반증류주', '증류식소주'];
const 과실주 = ['과실주 (포도)', '과실주'];

const normalizeType = (type: string) => {
  if (탁주.includes(type)) {
    return '탁주';
  }
  if (약주.includes(type)) {
    return '약주';
  }
  if (증류주.includes(type)) {
    return '증류주';
  }
  if (과실주.includes(type)) {
    return '과실주';
  }

  return '기타';
};

export { normalizeType };
