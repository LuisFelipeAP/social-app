var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{H as n}from"./Header.af1ff8b5.js";import{j as s}from"./jsx-runtime.0e9c64b1.js";import"./Button.65fda512.js";import"./iframe.0d053b66.js";const u={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}},"logged-out":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),d=t.bind({});d.args={user:{name:"Jane Doe"}};const l=t.bind({});l.args={};const y=["LoggedIn","LoggedOut"];export{d as LoggedIn,l as LoggedOut,y as __namedExportsOrder,u as default};
//# sourceMappingURL=Header.stories.1aa3e1c4.js.map
