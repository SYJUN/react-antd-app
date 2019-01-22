import find from 'lodash/find';

export function decimalize(number, digit) {
  let _digit;

  if (digit) {
    _digit = digit;
  } else if (digit === 0) {
    _digit = 0;
  } else {
    _digit = 2;
  }

  if (number === '' || number === null) {
    return '';
  }

  const parsed = Number(number);

  if (isNaN(parsed)) {
    return '';
  }

  let reg = /(\d)(?=(\d{3})+\.)/g;
  if (_digit === 0) {
    reg = /(\d)(?=(\d{3})+$)/g;
  }

  // 处理负数的情况
  if (parsed < 0) {
    let positive = 0 - parsed;
    return '-' + positive.toFixed(_digit).replace(reg, '$1,');
  }

  return parsed.toFixed(_digit).replace(reg, '$1,');
}

export function currency(number, digit) {
  return `¥ ${decimalize(number, digit)}`;
}

export function currencyUnit(number, digit) {
  if (number === '' || number === null) return '';
  const parsed = Number(number);
  if (isNaN(parsed)) return '';
  let _digit;

  if (digit) {
    _digit = digit;
  } else if (digit === 0) {
    _digit = 0;
  } else {
    _digit = 2;
  }

  const mapping = [
    { num: 1e8, unit: '亿' },
    { num: 1e4, unit: '万' },
  ];

  const mapped = find(mapping, item => parsed >= item.num);

  if (mapped) {
    return `¥ ${(parsed / mapped.num).toFixed(_digit)}${mapped.unit}`;
  }

  return `¥ ${parsed.toFixed(_digit)}`;
}

// 新增金额格式化: ￥ 100,100.203 万
export function currencyUnitFmt(number, digit) {
  let _digit;

  if (digit) {
    _digit = digit;
  } else if (digit === 0) {
    _digit = 0;
  } else {
    _digit = 2;
  }

  if (number === '' || number === null) {
    return '';
  }

  const parsed = Number(number);

  if (isNaN(parsed)) {
    return '';
  }

  const mapping = [
    { num: 1e8, unit: '亿' },
    { num: 1e4, unit: '万' },
  ];

  let reg = /(\d)(?=(\d{3})+\.)/g;
  if (_digit === 0) {
    reg = /(\d)(?=(\d{3})+$)/g;
  }

  if (parsed < 0) {
    let positive = 0 - parsed;
    let mapped = find(mapping, item => positive >= item.num);
    if (mapped) {
      return `¥ -${((positive / mapped.num).toFixed(_digit)).replace(reg, '$1,')}${mapped.unit}`;
    }
    return `¥ -${positive.toFixed(_digit).replace(reg, '$1,')}`;
  } else {
    const mapped = find(mapping, item => parsed >= item.num);
    if (mapped) {
      return `¥ ${((parsed / mapped.num).toFixed(_digit)).replace(reg, '$1,')}${mapped.unit}`;
    }
    return `¥ ${parsed.toFixed(_digit).replace(reg, '$1,')}`;
  }
}

// 增加货物数量格式化
export function cargoUnitFmt(number, digit) {
  let _digit;

  if (digit) {
    _digit = digit;
  } else if (digit === 0) {
    _digit = 0;
  } else {
    _digit = 2;
  }

  if (number === '' || number === null) {
    return '';
  }

  const parsed = Number(number);

  if (isNaN(parsed)) {
    return '';
  }

  const mapping = [
    { num: 1e8, unit: '亿' },
    { num: 1e4, unit: '万' },
  ];

  if (parsed < 0) {
    let positive = 0 - parsed;
    let mapped = find(mapping, item => positive >= item.num);
    if (mapped) {
      return `-${((positive / mapped.num).toFixed(_digit))}${mapped.unit}`;
    }
    return `-${positive.toFixed(_digit)}`;
  } else {
    const mapped = find(mapping, item => parsed >= item.num);
    if (mapped) {
      return `${((parsed / mapped.num).toFixed(_digit))}${mapped.unit}`;
    }
    return parsed.toFixed(_digit);
  }
}
