import { Box, Typography, Card } from "@mui/material";
import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CardLessonDescription_Member: React.FC = () => {
  const mkdStr = `# Dillinger
## _The Last Markdown Editor, Ever_


Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF`;
  return (
    <Box>
      <Card>
        <div data-color-mode="dark" className="wmde-markdown-var">
          <MDEditor.Markdown style={{ padding: 15 }} source={mkdStr} />
        </div>
      </Card>
    </Box>
  );
};

export default CardLessonDescription_Member;
