export const generateUsername = () => {
  const prefixes = ["unique", "rare", "exceptional"];
  const suffixes = ["entity", "individual", "subject", "one"];
  const suf = suffixes[Math.floor(Math.random() * (suffixes.length - 0)) + 0];
  const pre = prefixes[Math.floor(Math.random() * (prefixes.length - 0)) + 0];
  const name = pre + "-" + suf;
  return name;
  //   this.setState({ username: name });
};
