const toDay = new Date(2023,7,23);

const nenGappi = () => {
  const FullYear = toDay.getFullYear();
  const Month = toDay.getMonth() +1;
  const Day = toDay.getDate();

  const kekka = FullYear + '年' + Month + '月' +Day + '日';

  console.log(kekka);
}

nenGappi();