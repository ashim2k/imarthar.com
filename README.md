# Imar Thar

**A Digital Infrastructure Platform for Bishnupriya Manipuri Language Preservation and Computational Linguistics**

Imar Thar (*My Mother Tongue*) is an open-source, community-driven digital ecosystem engineered for the preservation, documentation, and computational processing of the Bishnupriya Manipuri language. The platform delivers Natural Language Processing (NLP)–oriented tools, a multilingual translation engine, structured digital corpora, and open-access linguistic resources for linguists, researchers, developers, translators, and native speakers.

---

## Core Features

### Multilingual Corpus-Based Translation Module

Supports bidirectional translation between Bishnupriya Manipuri and:

- Bengali
- English
- Hindi
- Spanish
- French
- Chinese

**Technical Capabilities:**

- Real-time live search (debounced query resolution)
- Instant translation rendering
- Autocomplete suggestion engine (prefix-matching algorithm)
- Bidirectional language swapping
- Clipboard API integration (copy-to-clipboard)
- Corpus-based exact and fuzzy-matching translation engine

---

## Platform Tools & Modules

- Speech Corpus Collection Framework
- Transliteration Engine (script-mapping system)
- Multilingual Translator
- Digital Lexicon / Dictionary Module
- Corpus Export & Download Utility
- Text-to-Speech (TTS) Synthesis Module
- Virtual/Online Keyboard (Unicode Input Method Editor)
- Spell Checker (rule-based validation engine)

---

## Blog & Research Publication

The platform publishes content covering:

- Bishnupriya Manipuri linguistics
- Computational linguistics research
- Cultural heritage and ethnolinguistic context
- Digital language preservation methodology

---

## Technology Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic structure) |
| Styling | CSS3 (responsive, mobile-first design) |
| Scripting | Vanilla JavaScript (ES6+) |
| Data Layer | CSV-based structured language corpus |
| Encoding | Full Unicode (UTF-8) support |
| UI Iconography | Tabler Icons |
| Architecture | Client-side rendering (CSR), no backend dependency |

---

## Project Architecture

```text
/
├── index.html                 # Landing page
├── tools.html                 # Tools dashboard
├── translation.html           # Translation module
├── dictionary.html            # Lexicon interface
├── transliteration.html       # Script-mapping module
├── speech-corpus.html         # Speech data collection
├── language-corpus.html         # Language data collection
├── corpus.html                # Corpus export utility
├── keyboard.html               # Virtual keyboard (IME)
├── spellcheck.html            # Spell-checking engine
├── tts.html                   # Text-to-Speech interface
│
├── blogs/                     # Academic & cultural content
│   ├── post-1.html
│   ├── post-2.html
│   └── ...
│
├── bm_corpus_multilang.csv    # Core language dataset
├── css/                       # Stylesheet modules
├── js/                        # Client-side logic
└── assets/                    # Static resources (images, fonts, etc.)
```

---

## Translation Engine Architecture

The translation system is powered by an **in-memory multilingual CSV corpus**, supporting the following computational characteristics:

- High-speed corpus lookup (linear scan / indexed lookup)
- Exact phrase-matching algorithm
- Prefix-based autocomplete suggestions
- Multi-language pair support (n-to-n mapping)
- Clipboard API integration
- Dynamic language selection (runtime configuration)

The engine loads the entire corpus into client-side memory on page load and processes search queries in real time, ensuring low-latency performance without server round-trips.

---

## Mission & Objectives

The core mission of Imar Thar is to preserve and modernize the Bishnupriya Manipuri language through free, accessible, and open digital resources.

**Strategic Objectives:**

- Preserve linguistic heritage
- Build open language corpora
- Support linguistic research
- Develop AI/ML-based language technologies
- Encourage open-source community participation
- Promote digital literacy in Bishnupriya Manipuri

---

## Future Roadmap & R&D Pipeline

- AI-powered Neural Machine Translation (NMT)
- Optical Character Recognition (OCR) engine
- Automatic Speech Recognition (ASR)
- Large Language Model (LLM) integration
- Grammar Checker (syntax validation engine)
- Morphological Analyzer (word-structure parsing)
- Native mobile applications (iOS/Android)
- Public REST API
- AI-based voice synthesis models
- Educational resource modules

---

## Contributing

Community contributions are welcome. Ways to contribute:

- Expanding the language corpus
- Bug reporting (issue tracking)
- Improving translation quality
- Code contributions (pull requests)
- Writing technical documentation
- Publishing educational content

---

## Developer

**Kungo Thang**

Dedicated to preserving the Bishnupriya Manipuri language through open technology.

---

## License

The project license will be announced in a future release.

---

## Website

https://imarthar.com
