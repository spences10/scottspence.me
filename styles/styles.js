import { pink } from './colours'

export const button = `
  button { color: hotpink; }
  `

console.log('COLOUR IS: ', pink)

export default `
      h1, a, p, div {
        size: 50px;
        font-family: "Monoid";
        color: pink;
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
