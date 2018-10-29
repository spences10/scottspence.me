/** Credit Leigh Halliday
 * Great resources:
 * https://www.youtube.com/watch?v=28StAxSjyIU&t=2116s
 * https://www.youtube.com/watch?v=AUiUZ29pae4&t=369s
 */

// map == transform array elements one by one to produce new array
// reduce == transform array elements one by one to produce some new value
// filter == pick certain elements to exist in new array
// slice == build a new array with certain elements selected by index

/*
data should come back formatted like:
[
  { color: "#f1e05a", id: "JavaScript", label: "JavaScript", value: 3 },
  { color: "#563d7c", id: "CSS", label: "CSS", value: 3 },
  { color: "#e34c26", id: "HTML", label: "HTML", value: 3 },
  { color: "#701516", id: "Ruby", label: "Ruby", value: 2 }
]
*/

export const topLanguages = repositories => {
  const langObject = repositories.nodes.reduce(
    (langs, { languages }) => {
      return languages.nodes.reduce((repLangs, { name, color }) => {
        if (!repLangs[name]) {
          repLangs[name] = { count: 0, color }
        }
        repLangs[name].count += 1
        return repLangs
      }, langs)
    },
    {}
  )

  const langArray = formatLanguagesForChart(langObject)

  return langArray.sort((a, b) => b.value - a.value).slice(0, 5)
}

const entries = object =>
  Object.keys(object).map(key => [key, object[key]])

const formatLanguagesForChart = langObject =>
  entries(langObject)
    .map(([key, { count, color }]) => ({
      id: key,
      label: key,
      value: count,
      color
    }))
    .filter(data => data.color && data.value > 1)
