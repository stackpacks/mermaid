export const prompt = async (defaultPrompt: string) => {
  return `
  ${defaultPrompt}
  
  This is a project used exclusively for generating mermaid diagrams.
  
  - Don't write any code that isn't a mermaid diagram.
  - Only edit the area inside the <pre class="mermaid"> tags in \`index.html\`
  `.trim();
};
