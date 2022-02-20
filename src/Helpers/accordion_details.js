import SelectableText from "../Components/SelectableText/SelectableText";
import { sample_text } from "./sample-text";

export const accordion_config = [
  {
    name: "accordion_1",
    label: "First Accordion",
    hasChildren: true,
    children: [
      {
        name: "accordion_1-secondary_1",
        label: "First Child of First Accordion",
        hasChildren: true,
        children: [
          {
            name: "accordion_1-secondary_1-tertiary_1",
            label: "First Child of First Child of First Accordion",
            content: <SelectableText data={sample_text} />,
          },
          {
            name: "accordion_1-secondary_1-tertiary_2",
            label: "Second Child of First Child of First Accordion",
            content: "No Content Given",
          },
        ],
      },
      {
        name: "accordion-1-secondary_2",
        label: "Second Child of First Accordion",
        hasChildren: true,
        children: [
          {
            name: "accordion_1-secondary_1-tertiary_1",
            label: "First Child of Second Child of First Accordion",
            content: "No Content Given",
          },
          {
            name: "accordion_1-secondary_1-tertiary_2",
            label: "Second Child of Second Child of First Accordion",
            content: "No Content Given",
          },
        ],
      },
    ],
  },
  {
    name: "accordion_2",
    label: "Second Accordion",
    hasChildren: true,
    children: [
      {
        name: "accordion_1-secondary_1",
        label: "First Child of Second Accordion",
        hasChildren: true,
        children: [
          {
            name: "accordion_1-secondary_1-tertiary_1",
            label: "First Child of First Child of Second Accordion",
            content: "No Content Given",
          },
          {
            name: "accordion_1-secondary_1-tertiary_2",
            label: "Second Child of First Child of Second Accordion",
            content: "No Content Given",
          },
        ],
      },
      {
        name: "accordion-2-secondary_2",
        label: "Second Child of Second Accordion",
        hasChildren: true,
        children: [
          {
            name: "accordion_2-secondary_2-tertiary_1",
            label: "First Child of Second Child of Second Accordion",
            content: "No Content Given",
          },
        ],
      },
    ],
  },
  {
    name: "accordion_3",
    label: "Third Accordion",
    hasChildren: true,
    children: [
      {
        name: "accordion_3-secondary_1",
        label: "First Child of Third Accordion",
        hasChildren: true,
        children: [
          {
            name: "accordion_3-secondary_1-tertiary_1",
            label: "First Child of First Child of Third Accordion",
            content: "No Content Given",
          },
        ],
      },
      {
        name: "accordion-3-secondary_2",
        label: "Second Child of Third Accordion",
        hasChildren: true,
        children: [
          {
            name: "accordion_3-secondary_2-tertiary_1",
            label: "First Child of Second Child of Third Accordion",
            content: "No Content Given",
          },
        ],
      },
    ],
  },
];
