// import glamorous from 'glamorous'

// export const aStyle = glamorous.a({
//   fontFamily: 'Arial',
//   color: 'yellow',
//   marginRight: 15
// })

// export const MyStyledP = glamorous.p({
//   color: 'yellow'
// })

// below is styled-jsx which at the time of writing this
// method wasn't supported, so glamorous
export const button = `
  button { color: hotpink; }
  `

export default `
      h1, a, p {
        font-family: "Monoid";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `
