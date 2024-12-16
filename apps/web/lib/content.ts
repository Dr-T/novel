export const defaultEditorContent = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "Novel 编辑器介绍" }],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            marks: [
              {
                type: "link",
                attrs: {
                  href: "https://github.com/steven-tey/novel",
                  target: "_blank",
                },
              },
            ],
            text: "Novel",
          },
          {
            type: "text",
            text: " 是一个类似 Notion 的所见即所得编辑器，具有 AI 驱动的自动完成功能。基于 ",
          },
          {
            type: "text",
            marks: [
              {
                type: "link",
                attrs: {
                  href: "https://tiptap.dev/",
                  target: "_blank",
                },
              },
            ],
            text: "Tiptap",
          },
          { type: "text", text: " + " },
          {
            type: "text",
            marks: [
              {
                type: "link",
                attrs: {
                  href: "https://sdk.vercel.ai/docs",
                  target: "_blank",
                },
              },
            ],
            text: "Vercel AI SDK",
          },
          { type: "text", text: "." },
        ],
      },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "安装" }],
      },
      {
        type: "codeBlock",
        attrs: { language: null },
        content: [{ type: "text", text: "npm i novel" }],
      },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "使用方法" }],
      },
      {
        type: "codeBlock",
        attrs: { language: null },
        content: [
          {
            type: "text",
            text: 'import { Editor } from "novel";\n\nexport default function App() {\n  return (\n     <Editor />\n  )\n}',
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "功能特性" }],
      },
      {
        type: "orderedList",
        attrs: { tight: true, start: 1 },
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "斜杠菜单和气泡菜单" }],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "AI 自动完成（输入 " },
                  { type: "text", marks: [{ type: "code" }], text: "++" },
                  {
                    type: "text",
                    text: " 激活，或从斜杠菜单中选择）",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "图片上传（拖放/复制粘贴，或从斜杠菜单中选择）",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "从命令斜杠菜单添加推文：",
                  },
                ],
              },
              {
                type: "twitter",
                attrs: {
                  src: "https://x.com/elonmusk/status/1800759252224729577",
                },
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "使用 LaTeX 表达式的数学符号：",
                  },
                ],
              },
              // LaTeX 示例保持不变
            ],
          },
        ],
      },
      {
        type: "image",
        attrs: {
          src: "https://public.blob.vercel-storage.com/pJrjXbdONOnAeZAZ/banner-2wQk82qTwyVgvlhTW21GIkWgqPGD2C.png",
          alt: "横幅图片",
          title: "横幅图片",
          width: null,
          height: null,
        },
      },
      { type: "horizontalRule" },
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "了解更多" }],
      },
      {
        type: "taskList",
        content: [
          {
            type: "taskItem",
            attrs: { checked: false },
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "在 " },
                  {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "https://github.com/steven-tey/novel",
                          target: "_blank",
                        },
                      },
                    ],
                    text: "GitHub",
                  },
                  { type: "text", text: " 上为我们点星" },
                ],
              },
            ],
          },
          {
            type: "taskItem",
            attrs: { checked: false },
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "安装 " },
                  {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "https://www.npmjs.com/package/novel",
                          target: "_blank",
                        },
                      },
                    ],
                    text: "NPM 包",
                  },
                ],
              },
            ],
          },
          {
            type: "taskItem",
            attrs: { checked: false },
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: "https://vercel.com/templates/next.js/novel",
                          target: "_blank",
                        },
                      },
                    ],
                    text: "部署到 Vercel",
                  },
                   { type: "text", text: " to Vercel" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
