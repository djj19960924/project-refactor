// 判断登录的值是否为空值
export function isEmpty (value) {
  return value === undefined || value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
}