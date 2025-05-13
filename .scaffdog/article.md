---
name: "article"
description: 'Generate article markdown'
root: 'src/contents/articles/'
output: '.'
---

# `{{ randomBytes }}.md`

```markdown
---
title: ""
description: ""
thumbnail: ""
createdAt: {{ date "YYYY-MM-DD" }}
updatedAt: {{ date "YYYY-MM-DD" }}
---
```
