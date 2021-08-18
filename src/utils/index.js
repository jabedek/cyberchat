export const generateUsername = () => {
  const prefixes = ["unique", "rare"];
  const suffixes = ["entity", "subject"];
  const suf = suffixes[Math.floor(Math.random() * (suffixes.length - 0)) + 0];
  const pre = prefixes[Math.floor(Math.random() * (prefixes.length - 0)) + 0];
  const name = pre + "-" + suf + "-" + getRandomInt(100, 999);
  return name;
};

function getRandomInt(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
    Math.ceil(min)
  );
}
