const AI_TOOLS = [
    // ===== CHATBOTS =====
    {
        id: 1, name: "ChatGPT", description: "Advanced conversational AI for writing, analysis, coding, math, and creative tasks using natural language.",
        category: "Chatbot", tags: ["conversation", "writing", "coding", "analysis"], pricing: "Freemium", url: "https://chat.openai.com",
        features: ["Natural language conversations", "Code generation & debugging", "Content creation", "Data analysis", "Image understanding"],
        icon: "💬", rating: 4.8, featured: true, trending: true
    },
    {
        id: 2, name: "Claude", description: "Anthropic's AI assistant designed for thoughtful conversations with a focus on safety, long context, and code.",
        category: "Chatbot", tags: ["conversation", "analysis", "writing", "coding"], pricing: "Freemium", url: "https://claude.ai",
        features: ["200K context window", "Document analysis", "Code generation", "Creative writing", "Research assistance"],
        icon: "🤖", rating: 4.7, featured: true, trending: true
    },
    {
        id: 3, name: "Gemini", description: "Google's multimodal AI for search, reasoning, coding, and creative tasks — deeply integrated with Google Workspace.",
        category: "Chatbot", tags: ["multimodal", "search", "reasoning", "google"], pricing: "Freemium", url: "https://gemini.google.com",
        features: ["Multimodal input", "Google integration", "Long context", "Code execution", "Image generation"],
        icon: "✨", rating: 4.6, featured: true, trending: true
    },
    {
        id: 4, name: "Perplexity", description: "AI-powered search engine with cited sources, follow-up questions, and focus modes for deep research.",
        category: "Chatbot", tags: ["search", "research", "answers", "citations"], pricing: "Freemium", url: "https://perplexity.ai",
        features: ["Source citations", "Follow-up questions", "Focus modes", "File analysis", "Collections"],
        icon: "🔍", rating: 4.6, featured: false, trending: true
    },
    {
        id: 5, name: "Grok", description: "xAI's witty AI chatbot with real-time X (Twitter) data access and unfiltered personality.",
        category: "Chatbot", tags: ["conversation", "real-time", "x", "unfiltered"], pricing: "Paid", url: "https://grok.x.ai",
        features: ["Real-time data", "X integration", "Image generation", "Unfiltered mode", "DeepSearch"],
        icon: "🧠", rating: 4.3, featured: false, trending: true
    },
    // ===== IMAGE =====
    {
        id: 6, name: "Midjourney", description: "Industry-leading AI image generation creating stunning artwork and visuals from text descriptions.",
        category: "Image", tags: ["art", "image generation", "design", "creative"], pricing: "Paid", url: "https://midjourney.com",
        features: ["Text-to-image", "Style variations", "Upscaling", "Image blending", "Pan & zoom"],
        icon: "🎨", rating: 4.9, featured: true, trending: false
    },
    {
        id: 7, name: "DALL·E 3", description: "OpenAI's image generation model creating realistic images and art from natural language descriptions.",
        category: "Image", tags: ["image generation", "art", "creative", "openai"], pricing: "Freemium", url: "https://openai.com/dall-e-3",
        features: ["High-resolution images", "Text rendering", "Style control", "ChatGPT integration", "Safety filters"],
        icon: "🖼️", rating: 4.5, featured: false, trending: false
    },
    {
        id: 8, name: "Stable Diffusion", description: "Open-source image generation model with full customization, local deployment, and community models.",
        category: "Image", tags: ["open-source", "image generation", "customizable", "local"], pricing: "Free", url: "https://stability.ai",
        features: ["Open-source", "Local deployment", "Fine-tuning", "ControlNet", "Community models"],
        icon: "🌀", rating: 4.4, featured: false, trending: false
    },
    {
        id: 9, name: "Ideogram", description: "AI image generator specializing in accurate text rendering and typography within images.",
        category: "Image", tags: ["text rendering", "typography", "image generation"], pricing: "Freemium", url: "https://ideogram.ai",
        features: ["Text-in-image accuracy", "Multiple styles", "High resolution", "Magic Prompt", "Remix"],
        icon: "🔤", rating: 4.4, featured: false, trending: true
    },
    {
        id: 10, name: "Leonardo AI", description: "AI-powered creative platform for generating production-quality images, textures, and game assets.",
        category: "Image", tags: ["game assets", "textures", "image generation", "design"], pricing: "Freemium", url: "https://leonardo.ai",
        features: ["Game asset generation", "Real-time canvas", "Texture generation", "Fine-tuned models", "Motion"],
        icon: "🎭", rating: 4.5, featured: false, trending: false
    },
    // ===== VIDEO =====
    {
        id: 11, name: "Runway Gen-3", description: "AI video generation and editing platform for cinematic-quality content from text, images, or video.",
        category: "Video", tags: ["video", "editing", "generation", "creative"], pricing: "Freemium", url: "https://runwayml.com",
        features: ["Text-to-video", "Image-to-video", "Video editing", "Motion brush", "Background removal"],
        icon: "🎬", rating: 4.5, featured: true, trending: false
    },
    {
        id: 12, name: "HeyGen", description: "AI video generation with realistic talking avatars for marketing, training, and personalized videos.",
        category: "Video", tags: ["avatar", "talking head", "marketing", "personalized"], pricing: "Freemium", url: "https://heygen.com",
        features: ["AI avatars", "Voice cloning", "Multi-language", "Video translation", "Interactive avatars"],
        icon: "🧑‍💼", rating: 4.6, featured: true, trending: true
    },
    {
        id: 13, name: "Pika", description: "AI video generation tool that creates and edits videos from text or images with cinematic effects.",
        category: "Video", tags: ["video generation", "effects", "creative", "editing"], pricing: "Freemium", url: "https://pika.art",
        features: ["Text-to-video", "Image-to-video", "Video expansion", "Lip sync", "Scene modify"],
        icon: "⚡", rating: 4.3, featured: false, trending: true
    },
    {
        id: 14, name: "Kling AI", description: "Revolutionary AI video generator creating high-quality, long-duration videos with physics-aware motion.",
        category: "Video", tags: ["video generation", "long-form", "realistic", "physics"], pricing: "Freemium", url: "https://klingai.com",
        features: ["Long video generation", "Physics simulation", "Camera controls", "High resolution", "Fast rendering"],
        icon: "🎥", rating: 4.4, featured: false, trending: true
    },
    {
        id: 15, name: "Synthesia", description: "Professional AI video platform with 200+ digital avatars for training, marketing, and corporate comms.",
        category: "Video", tags: ["avatar", "presentation", "corporate", "training"], pricing: "Paid", url: "https://synthesia.io",
        features: ["200+ AI avatars", "140+ languages", "Custom templates", "Brand kits", "Script-to-video"],
        icon: "📹", rating: 4.4, featured: false, trending: false
    },
    {
        id: 16, name: "Opus Clip", description: "AI-powered tool that repurposes long videos into viral short clips for social media platforms.",
        category: "Video", tags: ["clips", "social media", "repurpose", "shorts"], pricing: "Freemium", url: "https://opus.pro",
        features: ["Auto clip detection", "Virality score", "Captions", "B-roll", "Multi-platform export"],
        icon: "✂️", rating: 4.5, featured: false, trending: true
    },
    {
        id: 17, name: "Invideo AI", description: "AI video creator that generates complete videos with script, voiceover, and footage from a text prompt.",
        category: "Video", tags: ["video creation", "script", "voiceover", "automated"], pricing: "Freemium", url: "https://invideo.io",
        features: ["Prompt-to-video", "AI script writing", "Stock footage", "Voice synthesis", "Easy editing"],
        icon: "📽️", rating: 4.3, featured: false, trending: false
    },
    {
        id: 18, name: "CapCut AI", description: "Free video editor with AI-powered features including auto-captions, background removal, and effects.",
        category: "Video", tags: ["editing", "captions", "effects", "free"], pricing: "Free", url: "https://capcut.com",
        features: ["Auto captions", "Background removal", "AI effects", "Text-to-speech", "Templates"],
        icon: "🎞️", rating: 4.4, featured: false, trending: false
    },
    // ===== AUDIO =====
    {
        id: 19, name: "ElevenLabs", description: "Industry-leading AI voice synthesis and cloning with the most natural-sounding speech in 29+ languages.",
        category: "Audio", tags: ["voice", "speech", "text-to-speech", "cloning"], pricing: "Freemium", url: "https://elevenlabs.io",
        features: ["Voice cloning", "Text-to-speech", "29+ languages", "Voice library", "API access"],
        icon: "🎙️", rating: 4.8, featured: true, trending: true
    },
    {
        id: 20, name: "Suno", description: "AI music generation creating original songs with vocals, instruments, and lyrics from simple text prompts.",
        category: "Audio", tags: ["music", "generation", "vocals", "creative"], pricing: "Freemium", url: "https://suno.ai",
        features: ["Full song generation", "Custom lyrics", "Multiple genres", "Vocal synthesis", "Instrumental tracks"],
        icon: "🎵", rating: 4.6, featured: false, trending: true
    },
    {
        id: 21, name: "Murf AI", description: "Professional AI voice generator for creating studio-quality voiceovers for videos, presentations, and e-learning.",
        category: "Audio", tags: ["voiceover", "professional", "e-learning", "studio"], pricing: "Freemium", url: "https://murf.ai",
        features: ["120+ AI voices", "Voice cloning", "Pitch & speed control", "Video synchronization", "API"],
        icon: "🔊", rating: 4.3, featured: false, trending: false
    },
    {
        id: 22, name: "Krisp", description: "AI-powered noise cancellation app that removes background noise, echo, and voices from calls.",
        category: "Audio", tags: ["noise cancellation", "meetings", "calls", "productivity"], pricing: "Freemium", url: "https://krisp.ai",
        features: ["Noise cancellation", "Echo removal", "Meeting transcription", "Meeting notes", "Call recording"],
        icon: "🔇", rating: 4.5, featured: false, trending: false
    },
    {
        id: 23, name: "Whisper", description: "OpenAI's open-source speech recognition for accurate multilingual transcription and translation.",
        category: "Audio", tags: ["transcription", "speech-to-text", "open-source", "multilingual"], pricing: "Free", url: "https://openai.com/research/whisper",
        features: ["Multilingual support", "Accurate transcription", "Open-source", "Timestamp generation", "Translation"],
        icon: "🎧", rating: 4.4, featured: false, trending: false
    },
    // ===== CODE =====
    {
        id: 24, name: "GitHub Copilot", description: "AI pair programmer suggesting code completions, entire functions, and helping developers write code faster.",
        category: "Code", tags: ["coding", "autocomplete", "developer", "productivity"], pricing: "Paid", url: "https://github.com/features/copilot",
        features: ["Code suggestions", "Multi-language", "IDE integration", "Chat assistance", "PR summaries"],
        icon: "👨‍💻", rating: 4.7, featured: true, trending: false
    },
    {
        id: 25, name: "Cursor", description: "AI-first code editor built for intelligent code writing, editing, and understanding with deep codebase awareness.",
        category: "Code", tags: ["editor", "coding", "ai-powered", "developer"], pricing: "Freemium", url: "https://cursor.com",
        features: ["AI code editing", "Codebase understanding", "Multi-file edits", "Terminal integration", "Agent mode"],
        icon: "⌨️", rating: 4.7, featured: true, trending: true
    },
    {
        id: 26, name: "Bolt.new", description: "AI-powered full-stack web app builder in the browser — prompt, edit, and deploy without leaving the page.",
        category: "Code", tags: ["full-stack", "web app", "builder", "no-setup"], pricing: "Freemium", url: "https://bolt.new",
        features: ["Prompt-to-app", "In-browser dev", "Live preview", "One-click deploy", "Package management"],
        icon: "⚡", rating: 4.5, featured: false, trending: true
    },
    {
        id: 27, name: "Vercel v0", description: "AI-powered UI generator that creates React components and full pages from text descriptions and screenshots.",
        category: "Code", tags: ["ui", "react", "components", "frontend"], pricing: "Freemium", url: "https://v0.dev",
        features: ["Text-to-UI", "React/Next.js", "Screenshot-to-code", "Iterative editing", "Shadcn integration"],
        icon: "🔺", rating: 4.4, featured: false, trending: true
    },
    {
        id: 28, name: "Lovable", description: "AI software engineer that builds full-stack web apps from natural language with real-time collaboration.",
        category: "Code", tags: ["full-stack", "web app", "natural language", "deployment"], pricing: "Freemium", url: "https://lovable.dev",
        features: ["Natural language coding", "Full-stack apps", "GitHub integration", "Supabase backend", "Live preview"],
        icon: "💜", rating: 4.3, featured: false, trending: true
    },
    {
        id: 29, name: "Replit AI", description: "AI coding assistant in an online IDE for building, collaborating, and deploying applications instantly.",
        category: "Code", tags: ["coding", "ide", "deployment", "collaborative"], pricing: "Freemium", url: "https://replit.com",
        features: ["AI code generation", "Instant deployment", "Collaboration", "Database integration", "Mobile coding"],
        icon: "💻", rating: 4.3, featured: false, trending: false
    },
    // ===== TEXT & WRITING =====
    {
        id: 30, name: "Jasper", description: "Enterprise AI content platform for marketing teams to create on-brand blog posts, ads, and copy at scale.",
        category: "Text", tags: ["writing", "marketing", "content", "copywriting"], pricing: "Paid", url: "https://jasper.ai",
        features: ["Blog post generation", "Ad copy", "Brand voice", "Templates", "Team collaboration"],
        icon: "✍️", rating: 4.4, featured: false, trending: false
    },
    {
        id: 31, name: "Grammarly", description: "AI writing assistant that improves grammar, clarity, tone, and style across all your writing surfaces.",
        category: "Text", tags: ["grammar", "writing", "editing", "productivity"], pricing: "Freemium", url: "https://grammarly.com",
        features: ["Grammar checking", "Tone detection", "Clarity improvements", "Plagiarism detection", "Style suggestions"],
        icon: "📖", rating: 4.6, featured: true, trending: false
    },
    {
        id: 32, name: "Copy.ai", description: "AI copywriting workflow tool for generating marketing content, emails, and sales copy at scale.",
        category: "Text", tags: ["copywriting", "marketing", "email", "social media"], pricing: "Freemium", url: "https://copy.ai",
        features: ["Marketing copy", "Email generation", "Blog writing", "Social media posts", "Workflow automation"],
        icon: "📋", rating: 4.2, featured: false, trending: false
    },
    {
        id: 33, name: "Writesonic", description: "AI writer and SEO platform for generating optimized articles, landing pages, and ad copy instantly.",
        category: "Text", tags: ["seo", "articles", "landing pages", "ads"], pricing: "Freemium", url: "https://writesonic.com",
        features: ["SEO-optimized articles", "Landing page copy", "Ad generation", "Brand voice", "Fact-checking"],
        icon: "✏️", rating: 4.3, featured: false, trending: false
    },
    // ===== DESIGN =====
    {
        id: 34, name: "Figma AI", description: "AI design features within Figma for generating layouts, prototypes, and design variations intelligently.",
        category: "Design", tags: ["design", "ui/ux", "prototyping", "collaboration"], pricing: "Freemium", url: "https://figma.com",
        features: ["AI-generated layouts", "Auto-fill mockups", "Design suggestions", "Asset generation", "Rename layers"],
        icon: "🎯", rating: 4.6, featured: true, trending: false
    },
    {
        id: 35, name: "Canva AI", description: "AI-powered creative suite with Magic Design, text-to-image, background removal, and auto-presentations.",
        category: "Design", tags: ["design", "templates", "social media", "graphics"], pricing: "Freemium", url: "https://canva.com",
        features: ["Magic Design", "Background remover", "Text-to-image", "Brand kit", "AI presentations"],
        icon: "🎨", rating: 4.5, featured: false, trending: false
    },
    {
        id: 36, name: "Adobe Firefly", description: "Adobe's generative AI for creating images, text effects, and vectors within Creative Cloud apps.",
        category: "Design", tags: ["design", "image generation", "adobe", "creative"], pricing: "Freemium", url: "https://firefly.adobe.com",
        features: ["Text-to-image", "Generative fill", "Text effects", "Vector generation", "Creative Cloud integration"],
        icon: "🔥", rating: 4.5, featured: false, trending: false
    },
    {
        id: 37, name: "Framer AI", description: "AI website builder that designs and publishes complete, responsive websites from text prompts.",
        category: "Design", tags: ["website", "builder", "responsive", "no-code"], pricing: "Freemium", url: "https://framer.com",
        features: ["Prompt-to-website", "Responsive design", "CMS integration", "Custom animations", "SEO tools"],
        icon: "🌐", rating: 4.4, featured: false, trending: true
    },
    // ===== PRODUCTIVITY =====
    {
        id: 38, name: "Notion AI", description: "AI writing and organization assistant built into Notion for summarizing, brainstorming, and drafting.",
        category: "Productivity", tags: ["writing", "notes", "organization", "productivity"], pricing: "Freemium", url: "https://notion.so/product/ai",
        features: ["Summarization", "Action items extraction", "Translation", "Tone adjustment", "Content drafting"],
        icon: "📝", rating: 4.5, featured: false, trending: false
    },
    {
        id: 39, name: "Otter.ai", description: "AI meeting assistant that records, transcribes, and summarizes meetings with action items in real-time.",
        category: "Productivity", tags: ["meetings", "transcription", "notes", "collaboration"], pricing: "Freemium", url: "https://otter.ai",
        features: ["Real-time transcription", "Meeting summaries", "Action items", "Speaker identification", "Integrations"],
        icon: "🦦", rating: 4.4, featured: false, trending: false
    },
    {
        id: 40, name: "Gamma", description: "AI presentation builder generating beautiful slideshows, documents, and webpages from simple prompts.",
        category: "Productivity", tags: ["presentations", "slides", "documents", "design"], pricing: "Freemium", url: "https://gamma.app",
        features: ["AI-generated slides", "Beautiful templates", "Interactive content", "Analytics", "One-click redesign"],
        icon: "📊", rating: 4.5, featured: false, trending: true
    },
    {
        id: 41, name: "Tome", description: "AI-native storytelling format that generates narratives, presentations, and documents with multimedia.",
        category: "Productivity", tags: ["storytelling", "presentations", "multimedia", "documents"], pricing: "Freemium", url: "https://tome.app",
        features: ["AI storytelling", "Auto layout", "Multimedia integration", "Collaboration", "Analytics"],
        icon: "📕", rating: 4.2, featured: false, trending: false
    },
    {
        id: 42, name: "Beautiful.ai", description: "AI presentation software that automatically designs professional slides as you add content.",
        category: "Productivity", tags: ["presentations", "auto-design", "professional", "slides"], pricing: "Paid", url: "https://beautiful.ai",
        features: ["Smart templates", "Auto-formatting", "Team library", "Real-time collaboration", "Analytics"],
        icon: "💎", rating: 4.3, featured: false, trending: false
    },
    {
        id: 43, name: "Taskade", description: "AI-powered productivity workspace with agents that automate tasks, manage projects, and generate content.",
        category: "Productivity", tags: ["project management", "agents", "automation", "workspace"], pricing: "Freemium", url: "https://taskade.com",
        features: ["AI agents", "Project templates", "Mind maps", "Workflow automation", "Team collaboration"],
        icon: "✅", rating: 4.3, featured: false, trending: false
    },
    // ===== AUTOMATION =====
    {
        id: 44, name: "Zapier AI", description: "AI-powered automation connecting 7000+ apps with intelligent workflows built from natural language.",
        category: "Automation", tags: ["automation", "workflow", "integration", "no-code"], pricing: "Freemium", url: "https://zapier.com/ai",
        features: ["AI-powered workflows", "7000+ app integrations", "Natural language automation", "Chatbot builder", "Tables"],
        icon: "⚡", rating: 4.5, featured: true, trending: false
    },
    {
        id: 45, name: "Make (Integromat)", description: "Visual automation platform with AI capabilities building complex multi-step workflows connecting apps.",
        category: "Automation", tags: ["automation", "workflow", "visual", "integration"], pricing: "Freemium", url: "https://make.com",
        features: ["Visual workflow builder", "1500+ app connections", "AI modules", "Error handling", "Scheduling"],
        icon: "🔧", rating: 4.4, featured: false, trending: false
    },
    {
        id: 46, name: "n8n", description: "Open-source fair-code workflow automation with AI agent nodes for building complex automated processes.",
        category: "Automation", tags: ["automation", "open-source", "workflow", "self-hosted"], pricing: "Free", url: "https://n8n.io",
        features: ["Self-hostable", "400+ integrations", "AI agent nodes", "Code flexibility", "Community workflows"],
        icon: "🔄", rating: 4.5, featured: false, trending: true
    },
    {
        id: 47, name: "Motion AI", description: "AI calendar and project manager that auto-schedules tasks, meetings, and deadlines for peak productivity.",
        category: "Automation", tags: ["calendar", "scheduling", "project management", "ai-planner"], pricing: "Paid", url: "https://usemotion.com",
        features: ["AI auto-scheduling", "Task prioritization", "Project management", "Calendar optimization", "Team coordination"],
        icon: "📅", rating: 4.3, featured: false, trending: false
    },
    // ===== DATA & RESEARCH =====
    {
        id: 48, name: "Hugging Face", description: "Open-source AI platform hosting 500K+ models, datasets, and spaces for ML development and deployment.",
        category: "Data", tags: ["open-source", "models", "datasets", "machine learning"], pricing: "Free", url: "https://huggingface.co",
        features: ["500K+ models", "Datasets hub", "Spaces", "Inference API", "Community collaboration"],
        icon: "🤗", rating: 4.7, featured: true, trending: false
    },
    {
        id: 49, name: "Tableau AI", description: "AI analytics platform transforming raw data into interactive visualizations and predictive insights.",
        category: "Data", tags: ["analytics", "visualization", "business intelligence", "data"], pricing: "Paid", url: "https://tableau.com",
        features: ["AI-driven insights", "Natural language queries", "Interactive dashboards", "Data preparation", "Predictive analytics"],
        icon: "📊", rating: 4.4, featured: false, trending: false
    },
    {
        id: 50, name: "Pictory", description: "AI video creation platform for turning long articles and scripts into short branded videos automatically.",
        category: "Video", tags: ["article-to-video", "branding", "marketing", "automated"], pricing: "Freemium", url: "https://pictory.ai",
        features: ["Article-to-video", "Auto highlights", "Branding tools", "AI voice", "Stock media library"],
        icon: "🖌️", rating: 4.2, featured: false, trending: false
    },
    // ===== MARKETING =====
    {
        id: 51, name: "AdCreative.ai", description: "AI ad creative generator producing high-converting ad banners, texts, and social media creatives.",
        category: "Marketing", tags: ["advertising", "creatives", "conversion", "social media"], pricing: "Paid", url: "https://adcreative.ai",
        features: ["Ad creative generation", "Conversion optimization", "Competitor analysis", "Social media posts", "A/B testing"],
        icon: "📢", rating: 4.3, featured: false, trending: true
    },
    {
        id: 52, name: "Surfer SEO", description: "AI-powered SEO tool for optimizing content, researching keywords, and outranking competitors organically.",
        category: "Marketing", tags: ["seo", "content optimization", "keywords", "rankings"], pricing: "Paid", url: "https://surferseo.com",
        features: ["Content editor", "SERP analysis", "Keyword research", "Content audit", "AI writing"],
        icon: "🏄", rating: 4.4, featured: false, trending: false
    },
    // ===== EDUCATION =====
    {
        id: 53, name: "Synthesia Learning", description: "AI-powered learning video platform for interactive corporate training and educational content.",
        category: "Education", tags: ["training", "e-learning", "corporate", "video"], pricing: "Paid", url: "https://synthesia.io/learning",
        features: ["AI training videos", "Interactive quizzes", "Progress tracking", "Multi-language", "LMS integration"],
        icon: "🎓", rating: 4.3, featured: false, trending: false
    },
    {
        id: 54, name: "Kahoot! AI", description: "AI quiz and game creation platform for engaging classroom and corporate learning experiences.",
        category: "Education", tags: ["quizzes", "gamification", "learning", "engagement"], pricing: "Freemium", url: "https://kahoot.com",
        features: ["AI quiz generation", "Interactive games", "Reports & analytics", "Templates", "Integration"],
        icon: "🎮", rating: 4.4, featured: false, trending: false
    },
    // ===== 3D & MODELING =====
    {
        id: 55, name: "Luma AI", description: "AI 3D capture and generation platform turning photos and text into photorealistic 3D models and scenes.",
        category: "3D & Modeling", tags: ["3d", "capture", "photogrammetry", "generation"], pricing: "Freemium", url: "https://lumalabs.ai",
        features: ["Photo-to-3D", "Text-to-3D", "NeRF capture", "Interactive scenes", "API access"],
        icon: "🧊", rating: 4.4, featured: false, trending: true
    },
    {
        id: 56, name: "Meshy", description: "AI 3D model generator creating textured meshes from text prompts or images in minutes.",
        category: "3D & Modeling", tags: ["3d models", "texturing", "game assets", "generation"], pricing: "Freemium", url: "https://meshy.ai",
        features: ["Text-to-3D", "Image-to-3D", "Auto texturing", "Multiple formats", "Game-ready meshes"],
        icon: "🔮", rating: 4.2, featured: false, trending: true
    },
    // ===== RESEARCH =====
    {
        id: 57, name: "Elicit", description: "AI research assistant that finds, summarizes, and extracts data from academic papers for literature reviews.",
        category: "Research", tags: ["academic", "papers", "literature review", "data extraction"], pricing: "Freemium", url: "https://elicit.com",
        features: ["Paper search", "Abstract summaries", "Data extraction", "Systematic reviews", "Citation management"],
        icon: "🔬", rating: 4.5, featured: false, trending: false
    },
    {
        id: 58, name: "Consensus", description: "AI search engine for scientific research that surfaces evidence-based answers from peer-reviewed papers.",
        category: "Research", tags: ["science", "evidence-based", "peer-reviewed", "answers"], pricing: "Freemium", url: "https://consensus.app",
        features: ["Evidence-based answers", "Copilot for research", "Paper analysis", "Study snapshots", "Citation formats"],
        icon: "📚", rating: 4.3, featured: false, trending: false
    },
    {
        id: 59, name: "Descript", description: "AI-powered video and podcast editor — edit media by editing text transcripts, remove filler words instantly.",
        category: "Video", tags: ["editing", "podcast", "transcription", "audio"], pricing: "Freemium", url: "https://descript.com",
        features: ["Text-based editing", "AI voice cloning", "Filler word removal", "Screen recording", "Auto captions"],
        icon: "🎞️", rating: 4.5, featured: false, trending: false
    },
    {
        id: 60, name: "Fireflies.ai", description: "AI meeting notetaker that auto-records, transcribes, and summarizes meetings across all video platforms.",
        category: "Productivity", tags: ["meetings", "notetaker", "transcription", "summary"], pricing: "Freemium", url: "https://fireflies.ai",
        features: ["Auto-join meetings", "Smart search", "AI summaries", "Action items", "CRM integration"],
        icon: "🔥", rating: 4.4, featured: false, trending: false
    }
];

const CATEGORIES = [
    { name: "All", icon: "🌐", color: "#6366f1" },
    { name: "Chatbot", icon: "💬", color: "#8b5cf6" },
    { name: "Image", icon: "🖼️", color: "#ec4899" },
    { name: "Video", icon: "🎬", color: "#f43f5e" },
    { name: "Audio", icon: "🎵", color: "#f97316" },
    { name: "Code", icon: "💻", color: "#06b6d4" },
    { name: "Text", icon: "✍️", color: "#10b981" },
    { name: "Design", icon: "🎨", color: "#a855f7" },
    { name: "Productivity", icon: "📈", color: "#3b82f6" },
    { name: "Automation", icon: "⚡", color: "#eab308" },
    { name: "Data", icon: "📊", color: "#14b8a6" },
    { name: "Marketing", icon: "📢", color: "#ef4444" },
    { name: "Education", icon: "🎓", color: "#22c55e" },
    { name: "Research", icon: "🔬", color: "#0ea5e9" },
    { name: "3D & Modeling", icon: "🧊", color: "#d946ef" }
];
