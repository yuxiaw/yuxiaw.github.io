---
layout: page
title: Human-AI Collaborative Interaction
description: MGT Detection, Collaborative Annotation
img: assets/img/7.jpg
redirect: https://unsplash.com
importance: 3
category: work
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm-generate.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    LLM-based Assistant may generate misleading and unsafe content.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mgt.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Three tasks in machine-generated text detection.
</div>

{% raw %}

```html
@inproceedings{wang-etal-2024-m4gt,
    title = "{M}4{GT}-Bench: Evaluation Benchmark for Black-Box Machine-Generated Text Detection",
    author = "Wang, Yuxia  and
      Mansurov, Jonibek  and
      Ivanov, Petar  and
      Su, Jinyan  and
      Shelmanov, Artem  and
      Tsvigun, Akim  and
      Mohammed Afzal, Osama  and
      Mahmoud, Tarek  and
      Puccetti, Giovanni  and
      Arnold, Thomas  and
      Aji, Alham  and
      Habash, Nizar  and
      Gurevych, Iryna  and
      Nakov, Preslav",
    editor = "Ku, Lun-Wei  and
      Martins, Andre  and
      Srikumar, Vivek",
    booktitle = "Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    month = aug,
    year = "2024",
    address = "Bangkok, Thailand",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.acl-long.218/",
    doi = "10.18653/v1/2024.acl-long.218",
    pages = "3964--3992",
    abstract = "The advent of Large Language Models (LLMs) has brought an unprecedented surge in machine-generated text (MGT) across diverse channels. This raises legitimate concerns about its potential misuse and societal implications. The need to identify and differentiate such content from genuine human-generated text is critical in combating disinformation, preserving the integrity of education and scientific fields, and maintaining trust in communication. In this work, we address this problem by introducing a new benchmark based on a multilingual, multi-domain and multi-generator corpus of MGTs {---} M4GT-Bench. The benchmark is compiled of three tasks: (1) mono-lingual and multi-lingual binary MGT detection; (2) multi-way detection where one need to identify, which particular model generated the text; and (3) mixed human-machine text detection, where a word boundary delimiting MGT from human-written content should be determined. On the developed benchmark, we have tested several MGT detection baselines and also conducted an evaluation of human performance. We see that obtaining good performance in MGT detection usually requires an access to the training data from the same domain and generators. The benchmark is available at https://github.com/mbzuai-nlp/M4GT-Bench."
}
```

{% endraw %}
