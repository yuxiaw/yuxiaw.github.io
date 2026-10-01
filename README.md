# yuxiaw.github.io

A plain static homepage. No Jekyll, no Ruby, no build step.

```
index.html        page skeleton (rarely touched)
content.js        ALL content: bio, news, directions, projects, people, papers  ← edit this
app.js            turns content.js into the page (rarely touched)
style.css         colours and layout (palette at the top)
assets/photo.jpg  your portrait
assets/people/    student photos (square, ~300px)
.nojekyll         tells GitHub Pages to serve files as-is
```

## Everyday updates

**Add news:** open `content.js`, copy a line in `news`, paste it at the top of the list, change the date and text.

**Add a paper:** copy one `{ ... },` block in `papers`, paste it at the top, fill in the fields.
Set `selected: true` to show it under "Selected". Any new word in `tags` automatically becomes a filter button.

**Add a student:** drop a square photo into `assets/people/`, then copy one person block in `people` and edit it.

**Add your CV:** upload `assets/cv.pdf` and set the CV link in `links` to `"assets/cv.pdf"`.

You can edit directly on github.com (open the file, click the pencil icon, commit). The site refreshes within a minute or two.

## Preview locally

```
python3 -m http.server
```
then open http://localhost:8000
