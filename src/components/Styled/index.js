import styled, {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
:root {
  --appBGFrom: hsl(214, 47%, 23%);
  --appBGTo: hsl(237, 49%, 15%);
  --text: white;
  --headerBorder: hsl(217, 16%, 45%);
  --scoreTitle: hsl(229, 25%, 31%);
  --score: rgb(86, 84, 104);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Barlow Semi Condensed', sans-serif;
  min-height: 100vh;
  background-image: radial-gradient(var(--appBGFrom), var(--appBGTo));
  padding: 2em 0;
}

.App {
  width: min(95%, 710px);
  margin: 0 auto;
}
`;

export {
  Global
};
