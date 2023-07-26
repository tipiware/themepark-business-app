export default function slugify(string) {
  const lowercase = string.toLowerCase();
  const trim = lowercase.trim();
  const replace = trim.replace(/\s+/g, "-");
  return replace;
}
