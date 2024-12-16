import {
    CheckSquare,
    Code,
    Heading1,
    Heading2,
    Heading3,
    ImageIcon,
    List,
    ListOrdered,
    MessageSquarePlus,
    Text,
    TextQuote,
    Twitter,
    Youtube,
  } from "lucide-react";
  import { createSuggestionItems } from "novel/extensions";
  import { Command, renderItems } from "novel/extensions";
  import { uploadFn } from "./image-upload";
  
  export const suggestionItems = createSuggestionItems([
    {
      title: "发送反馈",
      description: "让我们知道如何改进",
      icon: <MessageSquarePlus size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).run();
        window.open("/feedback", "_blank");
      },
    },
    {
      title: "文本",
      description: "开始输入纯文本",
      searchTerms: ["段落", "文字"],
      icon: <Text size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleNode("paragraph", "paragraph").run();
      },
    },
    {
      title: "待办清单",
      description: "创建待办任务清单",
      searchTerms: ["待办", "任务", "列表", "复选框"],
      icon: <CheckSquare size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleTaskList().run();
      },
    },
    {
      title: "标题1",
      description: "大号标题",
      searchTerms: ["标题", "大", "主标题"],
      icon: <Heading1 size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run();
      },
    },
    {
      title: "标题2",
      description: "中号标题",
      searchTerms: ["副标题", "中"],
      icon: <Heading2 size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run();
      },
    },
    {
      title: "标题3",
      description: "小号标题",
      searchTerms: ["副标题", "小"],
      icon: <Heading3 size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run();
      },
    },
    {
      title: "无序列表",
      description: "创建简单的项目符号列表",
      searchTerms: ["无序", "点"],
      icon: <List size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      },
    },
    {
      title: "有序列表",
      description: "创建带编号的列表",
      searchTerms: ["有序", "数字"],
      icon: <ListOrdered size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run();
      },
    },
    {
      title: "引用",
      description: "插入引用文本",
      searchTerms: ["块引用"],
      icon: <TextQuote size={18} />,
      command: ({ editor, range }) =>
        editor.chain().focus().deleteRange(range).toggleNode("paragraph", "paragraph").toggleBlockquote().run(),
    },
    {
      title: "代码",
      description: "插入代码片段",
      searchTerms: ["代码块"],
      icon: <Code size={18} />,
      command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
    },
    {
      title: "图片",
      description: "从您的电脑上传图片",
      searchTerms: ["照片", "图片", "媒体"],
      icon: <ImageIcon size={18} />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).run();
        // 上传图片
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = async () => {
          if (input.files?.length) {
            const file = input.files[0];
            const pos = editor.view.state.selection.from;
            uploadFn(file, editor.view, pos);
          }
        };
        input.click();
      },
    },
    {
      title: "Youtube",
      description: "嵌入Youtube视频",
      searchTerms: ["视频", "油管", "嵌入"],
      icon: <Youtube size={18} />,
      command: ({ editor, range }) => {
        const videoLink = prompt("请输入Youtube视频链接");
        //来自 https://regexr.com/3dj5t
        const ytregex = new RegExp(
          /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
        );
  
        if (ytregex.test(videoLink)) {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setYoutubeVideo({
              src: videoLink,
            })
            .run();
        } else {
          if (videoLink !== null) {
            alert("请输入正确的Youtube视频链接");
          }
        }
      },
    },
    {
      title: "Twitter",
      description: "嵌入推文",
      searchTerms: ["推特", "嵌入"],
      icon: <Twitter size={18} />,
      command: ({ editor, range }) => {
        const tweetLink = prompt("请输入Twitter链接");
        const tweetRegex = new RegExp(/^https?:\/\/(www\.)?x\.com\/([a-zA-Z0-9_]{1,15})(\/status\/(\d+))?(\/\S*)?$/);
  
        if (tweetRegex.test(tweetLink)) {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setTweet({
              src: tweetLink,
            })
            .run();
        } else {
          if (tweetLink !== null) {
            alert("请输入正确的Twitter链接");
          }
        }
      },
    },
  ]);
  
  export const slashCommand = Command.configure({
    suggestion: {
      items: () => suggestionItems,
      render: renderItems,
    },
  });
