export const defaultPadSnippet = "Welcome to Cognix!";

export const defaultPadContent = `# **Welcome to Cognix!** 🚀

---

Hey there, genius! 🎩✨ Ready to capture your million-dollar ideas, random midnight thoughts, or that *one* grocery list you always forget? Whether it's brilliant insights, quick reminders, or top-secret master plans (don’t worry, we won’t spill), your notes are safe and sound here.

So, type away, organize your thoughts, and let your creativity flow! 💡

P.S. Don’t let your best ideas vanish into the void—write them down before your brain pulls a *Ctrl + Alt + Delete*!

---

All the best!

from **Nikhil Sharma**`;

export const purifyConfig = {
 // Allow safe tags for text formatting, images, lists, tables, and code blocks
 ALLOWED_TAGS: [
  "a", "b", "i", "em", "strong", "u", "p", "br", "hr", "blockquote",
  "code", "pre", "span", "div", "ul", "ol", "li", "dl", "dt", "dd",
  "table", "thead", "tbody", "tfoot", "tr", "th", "td", "img", "figure", "figcaption",
  
  // Headings
  "h1", "h2", "h3", "h4", "h5", "h6",
  
  // Media elements
  "audio", "video", "source", "iframe",
  
  // Semantic elements
  "mark", "small", "sub", "sup", "del", "ins", "kbd",
  
  // Core structure
  "math", "mrow", "mfrac", "msqrt", "mroot",
  
  // Scripts
  "msub", "msup", "msubsup", "munder", "mover", "munderover",
  
  // Basic elements
  "mi", "mn", "mo", "mtext", "mspace",
  
  // Tables
  "mtable", "mtr", "mtd", "mlabeledtr",
  
  // Elementary math
  "mstack", "mlongdiv", "msgroup", "msrow", "mscarries", "mscarry", "msline",
  
  // Other
  "menclose", "mphantom", "merror", "mglyph", "maligngroup", "malignmark"
 ],
 
 // Allow necessary attributes for functionality while preventing JavaScript execution
 ALLOWED_ATTR: [
  "href", "target", "rel", // Links
  "src", "alt", "title", "width", "height", // Images & media
  "controls", "autoplay", "loop", "muted", "poster", // Audio & video
  "frameborder", "allowfullscreen", "sandbox", // iFrame security
  "colspan", "rowspan", "align", "border", "cellpadding", "cellspacing", // Table attributes
  "mathbackground", "mathcolor", "mathsize", "displaystyle", "scriptlevel",
  "depth", "lspace", "rspace", "voffset", "rowalign", "columnalign", "groupalign", "numalign", "denomalign",
  "bevelled", "linethickness", "form", "fence", "separator",
  "stretchy", "symmetric", "maxsize", "minsize", "largeop",
  "movablelimits", "accent", "subscriptshift", "supscriptshift", "accentunder",
  "notation", "mathvariant",
  "dir", "fontfamily", "fontweight", "fontstyle", "fontsize",
 ],
 
 // Forbid risky attributes to prevent injection attacks
 FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover", "onfocus", "style"],
 
 // Forbid potentially harmful tags (e.g., scripts, inline styles, objects)
 FORBID_TAGS: ["script", "style", "object", "foreignObject", "embed"],
 
 // Allow iframes only from trusted sources like YouTube and Vimeo
 ADD_TAGS: ["iframe"],
 ADD_ATTR: ["src", "width", "height", "frameborder", "allowfullscreen"],
 
 // Keep SVG safe if needed (optional)
 ALLOW_UNKNOWN_PROTOCOLS: true
};