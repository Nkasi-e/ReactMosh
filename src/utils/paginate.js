import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //   _.slice(items, startIndex);
  //In order to call a method using the chaining we need to convert the method to a lodash rapper
  return _(items).slice(startIndex).take(pageSize).value();
}
