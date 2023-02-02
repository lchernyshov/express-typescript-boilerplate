const formatTime = (num: number) => (num < 10 ? `0${num}` : num);

export const logger = (msg: string) => {
  const date = new Date();

  const hh = formatTime(date.getHours());
  const mm = formatTime(date.getMinutes());
  const ss = formatTime(date.getSeconds());
  const ms = formatTime(date.getMilliseconds());

  console.log(`⚡️[${hh}:${mm}:${ss}:${ms}]: ${msg}`);
};
