---
layout: page
title: LLM Multi-Objective Optimization
description: Reasoning, Safety, Factuality, Empathy
img: assets/img/3.jpg
importance: 2
category: work
giscus_comments: true
---

{% raw %}

```html
@inproceedings{wang-etal-2024-answer,
    title = "Do-Not-Answer: Evaluating Safeguards in {LLM}s",
    author = "Wang, Yuxia  and
      Li, Haonan  and
      Han, Xudong  and
      Nakov, Preslav  and
      Baldwin, Timothy",
    editor = "Graham, Yvette  and
      Purver, Matthew",
    booktitle = "Findings of the Association for Computational Linguistics: EACL 2024",
    month = mar,
    year = "2024",
    address = "St. Julian{'}s, Malta",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.findings-eacl.61/",
    pages = "896--911",
    abstract = "With the rapid evolution of large language models (LLMs), new and hard-to-predict harmful capabilities are emerging. This requires developers to identify potential risks through the evaluation of ``dangerous capabilities'' in order to responsibly deploy LLMs. Here we aim to facilitate this process. In particular, we collect an open-source dataset to evaluate the safeguards in LLMs, to facilitate the deployment of safer open-source LLMs at a low cost. Our dataset is curated and filtered to consist only of instructions that responsible language models should not follow. We assess the responses of six popular LLMs to these instructions, and we find that simple BERT-style classifiers can achieve results that are comparable to GPT-4 on automatic safety evaluation. Our data and code are available at https://github.com/Libr-AI/do-not-answer"
}

@inproceedings{wang-etal-2024-factuality,
    title = "Factuality of Large Language Models: A Survey",
    author = "Wang, Yuxia  and
      Wang, Minghan  and
      Manzoor, Muhammad Arslan  and
      Liu, Fei  and
      Georgiev, Georgi Nenkov  and
      Das, Rocktim Jyoti  and
      Nakov, Preslav",
    editor = "Al-Onaizan, Yaser  and
      Bansal, Mohit  and
      Chen, Yun-Nung",
    booktitle = "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing",
    month = nov,
    year = "2024",
    address = "Miami, Florida, USA",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.emnlp-main.1088/",
    doi = "10.18653/v1/2024.emnlp-main.1088",
    pages = "19519--19529",
    abstract = "Large language models (LLMs), especially when instruction-tuned for chat, have become part of our daily lives, freeing people from the process of searching, extracting, and integrating information from multiple sources by offering a straightforward answer to a variety of questions in a single place. Unfortunately, in many cases, LLM responses are factually incorrect, which limits their applicability in real-world scenarios. As a result, research on evaluating and improving the factuality of LLMs has attracted a lot of research attention recently. In this survey, we critically analyze existing work with the aim to identify the major challenges and their associated causes, pointing out to potential solutions for improving the factuality of LLMs, and analyzing the obstacles to automated factuality evaluation for open-ended text generation. We further offer an outlook on where future research should go."
}

@inproceedings{manzoor-etal-2024-machines,
    title = "Can Machines Resonate with Humans? Evaluating the Emotional and Empathic Comprehension of {LM}s",
    author = "Manzoor, Muhammad Arslan  and
      Wang, Yuxia  and
      Wang, Minghan  and
      Nakov, Preslav",
    editor = "Al-Onaizan, Yaser  and
      Bansal, Mohit  and
      Chen, Yun-Nung",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2024",
    month = nov,
    year = "2024",
    address = "Miami, Florida, USA",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.findings-emnlp.861/",
    doi = "10.18653/v1/2024.findings-emnlp.861",
    pages = "14683--14701",
    abstract = "Empathy plays a pivotal role in fostering prosocial behavior, often triggered by the sharing of personal experiences through narratives. However, modeling empathy using NLP approaches remains challenging due to its deep interconnection with human interaction dynamics. Previous approaches, which involve fine-tuning language models (LMs) on human-annotated empathic datasets, have had limited success. In our pursuit of improving empathy understanding in LMs, we propose several strategies, including contrastive learning with masked LMs and supervised fine-tuning with large language models. While these methods show improvements over previous methods, the overall results remain unsatisfactory. To better understand this trend, we performed an analysis which reveals a low agreement among annotators. This lack of consensus hinders training and highlights the subjective nature of the task. We also explore the cultural impact on annotations. To study this, we meticulously collected story pairs in Urdu language and find that subjectivity in interpreting empathy among annotators appears to be independent of cultural background. Our systematic exploration of LMs' understanding of empathy reveals substantial opportunities for further investigation in both task formulation and modeling."
}
```

{% endraw %}
