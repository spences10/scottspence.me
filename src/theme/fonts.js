/**
 * Awesome helper function from Marc Schipperheyn
 * https://github.com/mschipperheyn 👌
 *
 */

export function fontFace(
  name,
  src,
  fontWeight = 'normal',
  fontStyle = 'regular'
) {
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require('../fonts/' + src + '.eot')});
        src: url(${require('../fonts/' +
          src +
          '.eot')}?#iefix) format("embedded-opentype"),
              url(${require('../fonts/' +
                src +
                '.woff')}) format("woff"),
              url(${require('../fonts/' +
                src +
                '.ttf')}) format("truetype"),
              url(${require('../fonts/' +
                src +
                '.svg')}#${name}) format("svg");

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
  `
}
