# HTML (Hyper Text Markup Language)

# MetaData

- MetaData represents about the data
- MetaData enriches the data with information that makes it easier to find use and manage.


- In `<head>` we store - meta data, `<title>` tag as well as external sheets too.
- In `<body>` we store the full content of the web Page.
- We use `<!---->` to comment out something in HTML.
- Use `ctrl + / ` to quickly comment out the code in HTML and toggle it back. 

- Meta tags are mostly used in SEO (Search Engine Optimization) tools.
- Meta is a character set.
- `<meta name="robots" content="INDEX, FOLLOW">` is used to make our website visible in the search engine.
- `<meta name="robots" content="NOINDEX, NOFOLLOW">` is used to just do the vice-versa of the above one, like to make the website completely invisible and not to be followed by the search engine.
- `<link rel="stylesheet" href="Prasen.css">` is used to link an external CSS file in the HTML file.
- `<script src="Prasen.js"></script>` is used to link an external JavaScript file in the HTML File.

## Emmet

- Emmet is a powerful web development tool that helps developers write HTML and CSS code more efficiently.
- It provides a shortcut syntax to quickly generate complex code snippets with minimal typing.
- It works in various text editors and integrated Development Environments (IDE's)

## Boilerplate

- Boiler plate typically includes the basic structure and essential elements of an HTML Document

## HTML Tags -

- HTML tags are like insturctions that tell a web browser how to show content on a web Page.
- In other words HTML Tags are the building blocks of web Pages, They are used to structure and format the content within a Web document

1. `<!DOCTYPE HTML>` 
 - This declaration specifies the HTML Version being used. It is crucial for browser compability.
 - If it is longer and contains a link , then it's HTML 4

 2. `<html>` 
 - The opening tag that defines the root of an HTML Document
 
 3. `<head>`
 - The head section contains meta-information about the page, such as the page title, character encoding, stylesheet etc.
 
 4. `<meta>`
- This element provides metadata about HTML such as the page title, character encoding, stylesheets, scripts etc..

 5. `<title>`
 - The `</title>` element sets the title of the Web Page, which appears in the broswer's title bar or tab.

 6. `<body>`
 - The body section contains the visible content of Web Page.

 7. `<h1>`
 - It is the most big heading and thsi goes according to `<h1>` to `<h6>` the more number of the heading increases the size of the letter on heading also decreases.

8. `<p>` 
- This is used to write a paragraph
 
9. `Lorem`
- By using this element we can produce dummy texts in our HTML page. 
- ( In VS-Code you can use this `Lorem+(no.of dummy words)` and it will generate many dummy words according to your input ).

10. `<Strong>`
- It is used to make bold letters in Paragraphs. `<b>` is also used for it but "strong" tag is recommended for HTML 5.

11. `<em>`
- To make paragraph look something different like if we will use this tag and write something between this tag then it will be `Italic`.

12. `<br>`
- It is used to line break and it is a self opening and closing tag. By using this tag you can break the lines to write a line under another line.

13. `<hr>`
- It means horizontal rule
- By using this tags we can make ruler on the web page means it will make a horizontal line on your web page. It is also called as Horizontal Rule. 

14. `<a>`
- It is called as Anchor tag.
- It is used to create a Hyepr link on the web page in HTML.
- `<a href="https://google.com" target="_blank"> Click to go to google </a>`
- Point to be noted, here `<a>` - it's a tag. `href` - it's an attribute. 

15. `target="_blank"`
- It is a special keyword that will open link in a new tab everytime. 
- It means by putting it after the `href ` it will open the link on a new tab, when you will click on it.

16. `<img src ="(/Path of image, hosting img source)" alt ="loading">`
- It is used to host an image on the website

17. `alt ="loading" width ="1920" height ="1080">`
- we can set the widht and height of the image after putting the image source, so that it should be flexible on web page.

18. `<li>` 
- It is used to represent an item in a list. But it must be contained in a parent element, like an ordered list `(<ol>)` , an unordered list `(<ul>)` or a menu `(<menu)>` .

19. `<ul>`
- It defines an unordered(bulleted) list.
- Using `<ul>` tag together with `<li>` tag to create unordered list.

  `<body>`
     `<ul>`
     `<li>`First sentence `</li>`
     `<li>`Second Sentence `</li>`
     `</ul>`
     `<body>`

20. `<ol>`
- This tag defines an ordered list.
- Same process repeat like `<ul>`

    `<body>`
     `<ol>`First sentence `</ol>`
     `<ol>`Second Sentence `</ol>`
     `<body>`

## Attributes of `"</ul>"`

- disc 