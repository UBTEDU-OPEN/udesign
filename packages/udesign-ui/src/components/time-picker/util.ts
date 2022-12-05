// 时间格式校验
export const isValidateTime = (val: string) => {
  let flag = false;
  if (val) {
    let valArr = val.split(':');
    if (valArr.length === 3) {
      if (valArr[0].length === 2 && Number(valArr[0]) >= 0 && Number(valArr[0]) <= 23 && valArr[1].length === 2 && Number(valArr[1]) >= 0 && Number(valArr[1]) <= 59 && valArr[2].length === 2 && Number(valArr[2]) >= 0 && Number(valArr[2]) <= 59) {
        flag = true;
      }
    }
  }
  return flag;
};
