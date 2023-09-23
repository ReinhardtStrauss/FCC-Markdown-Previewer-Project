import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";




const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


\r

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>  
 
      <div><h1 id="MDText">Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>

<table>
<tr>
<th></th>
</tr>
<tr>
<th><a href="https://react.dev" target="_blank">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="reactlogo logo" alt="React logo" />
    </a></th>
<th><a href="https://vitejs.dev" target="_blank">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" className="vitelogo logo" alt="Vite logo" />
    </a></th>
    <th><a href="https://w3schools.com/css" target="_blank">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" className="css3logo logo" alt="CSS3 logo" />
    </a></th>
</tr>

<tr>
<td><h1 className="techstack">React</h1></td>
<td><h1 className="techstack">Vite</h1></td>
<td><h1 className="techstack">CSS 3</h1></td>
</tr>
</table>

      <div>
  </div>

    </>
  );
}

export default App;
