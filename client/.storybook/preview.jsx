import React from "react";
import { MemoryRouter } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const routerDecorator = (StoryFn) => {
  <MemoryRouter initialEntries={["/"]}>
    <StoryFn />
  </MemoryRouter>
}

export const decorators = [routerDecorator];
