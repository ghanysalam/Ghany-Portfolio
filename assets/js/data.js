const educationData = [
  {
    icon: "⚙️",
    year: "Feb 2026 – Apr 2026",
    degree: "Data Engineering Zoomcamp",
    institution: "DataTalks.Club",
    detail: "End-to-end data pipelines, modern data stack (GCP, Terraform, Docker, dbt, Kestra), Star Schema data modeling, and batch processing.",
    badges: [
      { text: "Completed", class: "eb-navy" }
    ],
    animationClass: "d1"
  },
  {
    icon: "🤖",
    year: "Nov 2025 – Jan 2026",
    degree: "IBM AI Engineering Professional",
    institution: "Coursera (IBM)",
    detail: "Advanced deep learning, computer vision (CNN, ViT), TensorFlow/PyTorch, transfer learning, and production AI engineering practices.",
    badges: [
      { text: "Completed", class: "eb-navy" }
    ],
    animationClass: "d2"
  },
  {
    icon: "📊",
    year: "Jul 2023 – Jan 2024",
    degree: "Data Science & Machine Learning Bootcamp",
    institution: "Purwadhika Digital Technology School",
    detail: "Intensive hands-on program covering Data Science and Machine Learning, statistical modeling, SQL, Python, and business-case project delivery.",
    badges: [
      { text: "Score: 82.97 / 100", class: "eb-teal" }
    ],
    animationClass: "d3"
  },
  {
    icon: "🎓",
    year: "2018 – 2022",
    degree: "Bachelor of Information Systems",
    institution: "UPN Veteran Jakarta",
    detail: "Focused on data analytics and statistical methods. Coursework in Predictive Analytics, Business Intelligence, Statistics & Probability, and Database Systems.",
    badges: [
      { text: "GPA 3.76 / 4.00", class: "eb-gold" },
      { text: "Cum Laude", class: "eb-teal", style: "margin-left:6px" }
    ],
    animationClass: "d4"
  }
];

const experienceData = [
  {
    title: "Credit Insurance Analytics — Unsecured & Secured Loans",
    desc: "Gathered, cleaned, and analyzed data across the full credit insurance lifecycle, collaborating with credit and risk divisions to surface risk patterns that enhanced the health of the loan portfolio.",
    metric: null,
    animationClass: "d2"
  },
  {
    title: "Credit Default Risk — Mortality Classification Model",
    desc: "Developed a Logistic Regression classification model to identify debtors at high risk of loan default caused by death, enabling proactive risk management and credit insurance coverage strategies.",
    metric: null,
    animationClass: "d3"
  },
  {
    title: "Enterprise KPI Dashboard — 150+ Branch Network",
    desc: "Engineered a Python data pipeline combining multiple sources, powering a Tableau dashboard tracking KPIs across 150+ branches.",
    metric: "↑ Minus KPI: 17 branches → 1 branch (94% improvement in 3 months)",
    animationClass: "d4"
  },
  {
    title: "Partner Portfolio Optimization — Life Insurance Credit",
    desc: "Evaluated and benchmarked health portfolios across all insurance partners to identify top-tier providers. Strategically selected partners based on data-driven health metrics to optimize bank procurement strategies.",
    metric: "↑ 15% cost efficiency improvement",
    animationClass: "d5"
  },
  {
    title: "Debtor Health Analytics — Claims Reduction",
    desc: "Analyzed debtor health risk profiles to generate actionable insights for the risk monitoring and credit divisions. Implemented systematic health portfolio analysis to identify patterns and mitigate potential losses.",
    metric: "↑ 17% outstanding claims reduction",
    animationClass: "d6"
  },
  {
    title: "Reporting Automation — Excel to Python + Tableau Pipeline",
    desc: "Transformed daily and weekly reporting from manual Excel workflows into a seamless Python and Tableau integration, eliminating hours of repetitive work.",
    metric: "↑ 60% time efficiency improvement",
    animationClass: "d7"
  }
];

const skillsData = [
  {
    icon: "⚙️",
    title: "Data Engineering & Analytics",
    tags: [
      { name: "dbt", class: "st-teal" },
      { name: "BigQuery", class: "st-teal" },
      { name: "Snowflake", class: "st-teal" },
      { name: "Apache Airflow", class: "st-teal" },
      { name: "Apache Flink", class: "st-teal" },
      { name: "Python", class: "st-teal" },
      { name: "Pandas", class: "st-teal" },
      { name: "SQL (PostgreSQL)", class: "st-ink" },
      { name: "Debezium (CDC)", class: "st-ink" },
      { name: "MinIO (S3)", class: "st-ink" },
      { name: "Star Schema", class: "st-ink" },
      { name: "ELT Processes", class: "st-ink" },
      { name: "PySpark", class: "st-ink" }
    ],
    animationClass: "d1"
  },
  {
    icon: "📈",
    title: "Machine Learning",
    tags: [
      { name: "Regression", class: "st-navy" },
      { name: "Classification", class: "st-navy" },
      { name: "Clustering", class: "st-navy" },
      { name: "Time Series", class: "st-navy" },
      { name: "scikit-learn", class: "st-ink" },
      { name: "Feature Engineering", class: "st-ink" }
    ],
    animationClass: "d2"
  },
  {
    icon: "🧠",
    title: "Deep Learning & AI",
    tags: [
      { name: "TensorFlow/Keras", class: "st-rose" },
      { name: "PyTorch", class: "st-rose" },
      { name: "CNN", class: "st-rose" },
      { name: "Vision Transformer (ViT)", class: "st-rose" },
      { name: "Hybrid CNN–ViT", class: "st-rose" },
      { name: "Transfer Learning", class: "st-ink" },
      { name: "LLMs", class: "st-ink" },
      { name: "LangChain", class: "st-ink" }
    ],
    animationClass: "d3"
  },
  {
    icon: "💬",
    title: "Natural Language Processing",
    tags: [
      { name: "NLP", class: "st-gold" },
      { name: "TF-IDF", class: "st-gold" },
      { name: "Sentiment Analysis", class: "st-gold" },
      { name: "Topic Modeling", class: "st-gold" },
      { name: "Hugging Face", class: "st-ink" },
      { name: "Prompt Engineering", class: "st-ink" }
    ],
    animationClass: "d4"
  },
  {
    icon: "📊",
    title: "Data Visualization & BI",
    tags: [
      { name: "Tableau", class: "st-teal" },
      { name: "Power BI", class: "st-teal" },
      { name: "Matplotlib", class: "st-ink" },
      { name: "Seaborn", class: "st-ink" },
      { name: "Executive Dashboards", class: "st-ink" }
    ],
    animationClass: "d5"
  },
  {
    icon: "☁️",
    title: "Cloud & Data Infrastructure",
    tags: [
      { name: "GCP (Google Cloud)", class: "st-navy" },
      { name: "Snowflake", class: "st-navy" },
      { name: "BigQuery", class: "st-navy" },
      { name: "Terraform", class: "st-navy" },
      { name: "Docker", class: "st-ink" },
      { name: "MinIO", class: "st-ink" },
      { name: "Kestra", class: "st-ink" },
      { name: "GitHub Actions (CI/CD)", class: "st-ink" },
      { name: "Git", class: "st-ink" }
    ],
    animationClass: "d6"
  }
];

const projectsData = [
  {
    category: ["data-engineering", "analytics"],
    image: "assets/images/projects/banking-modern-data-stack.png",
    alt: "Banking Modern Data Stack architecture",
    tags: [
      { name: "Data Engineering", class: "pt-navy" },
      { name: "Streaming", class: "pt-teal" },
      { name: "Snowflake", class: "pt-gold" }
    ],
    title: "Banking Modern Data Stack",
    desc: "End-to-end modern data stack for the banking domain — CDC streaming from PostgreSQL via Kafka + Debezium into MinIO, orchestrated by Airflow, transformed in dbt (Star Schema + SCD Type-2), landed in Snowflake, and delivered through a Banking KPI dashboard. CI/CD enforced via GitHub Actions.",
    impact: "CDC Streaming · SCD Type-2 · Star Schema · Banking KPI Dashboard · CI/CD via GitHub Actions",
    link: "https://github.com/ghanysalam/banking-data-engineering"
  },
  {
    category: "data-engineering",
    image: "assets/images/projects/nyc-taxi-pipeline.png",
    alt: "NYC Taxi Data Pipeline architecture",
    tags: [
      { name: "Data Engineering", class: "pt-navy" },
      { name: "dbt", class: "pt-teal" },
      { name: "BigQuery", class: "pt-gold" }
    ],
    title: "NYC Taxi Data Pipeline (Analytics Engineering)",
    desc: "Built an automated end-to-end data pipeline for NYC Taxi data using Docker, Terraform, and Kestra as the orchestration engine. Implemented dbt for Star Schema modeling in BigQuery to optimize downstream analytics processes.",
    impact: "Automated ELT pipeline · Star Schema in BigQuery · Orchestration (Docker/Terraform/Kestra)",
    link: "https://github.com/ghanysalam/data-engineering-bootcamp"
  },
  {
    category: "analytics",
    image: "assets/images/projects/transjakarta.jpg",
    alt: "Public transit bus analytics",
    tags: [
      { name: "Analytics", class: "pt-navy" },
      { name: "Operations", class: "pt-teal" }
    ],
    title: "Transjakarta Route Optimization",
    desc: "Passenger dissatisfaction and lost revenue were traced to a single congested corridor. Statistical analysis of rider behavior unlocked route optimizations revealing a potential 400% revenue growth opportunity on specific route.",
    impact: "102 → 27 min travel time reduction · ~400% revenue growth potential identified",
    link: "https://github.com/ghanysalam/Capstone_2-Transjakarta_Transactions_Analysis"
  },
  {
    category: "analytics",
    image: "assets/images/projects/pizza_sales.jpg",
    alt: "Pizza sales analysis",
    tags: [
      { name: "Analytics", class: "pt-navy" },
      { name: "SQL", class: "pt-teal" },
      { name: "Power BI", class: "pt-rose" }
    ],
    title: "Pizza Sales Analysis",
    desc: "Analyzed 48k+ sales records using T-SQL and Power BI to identify revenue drivers and peak demand. Built an interactive dashboard to map product performance, enabling data-driven menu optimization and growth.",
    impact: "Friday peak: 3,538 orders & Thai Chicken Pizza $43K top earner",
    link: "https://docs.google.com/presentation/d/1_tRyyec1AwL7moIbwWBYIMQw6jLWC5NR/edit?usp=drive_link&ouid=104958758027957392129&rtpof=true&sd=true",
    isPresentation: true
  },
  {
    category: "computer-vision",
    image: "assets/images/projects/agriculture-land-classification.jpg",
    alt: "Satellite land classification",
    tags: [
      { name: "Computer Vision", class: "pt-rose" },
      { name: "Deep Learning", class: "pt-navy" }
    ],
    title: "Agriculture Land Classification (Satellite Imagery)",
    desc: "Manual land-use surveys are too slow and costly for large-scale agricultural planning. A CNN + Vision Transformer hybrid classifies 6,000 satellite images with near-perfect precision across Keras and PyTorch frameworks.",
    impact: "99.9% accuracy · ROC-AUC 1.00 · CNN vs CNN-ViT benchmarked on Keras & PyTorch",
    link: "https://github.com/ghanysalam/Land-Classification-Satellite-Imagery-CNN-CNN-ViT-with-Keras-PyTorch"
  },
  {
    category: "computer-vision",
    image: "assets/images/projects/smart-waste-sorting.jpg",
    alt: "Waste classification recycling",
    tags: [
      { name: "Computer Vision", class: "pt-rose" },
      { name: "Transfer Learning", class: "pt-teal" }
    ],
    title: "Waste Products Classification",
    desc: "Waste misclassification raises recycling costs and environmental impact. A VGG16 transfer learning model automatically distinguishes organic from recyclable waste.",
    impact: "87% test accuracy · Macro F1-score 0.87 · Production-ready VGG16 CNN pipeline",
    link: "https://github.com/ghanysalam/Classify-Waste-Products-Using-Transfer-Learning"
  },
  {
    category: "nlp",
    image: "assets/images/projects/twitter-sentiment-analysis.jpg",
    alt: "Social media sentiment analysis",
    tags: [
      { name: "NLP", class: "pt-gold" },
      { name: "Sentiment Analysis", class: "pt-teal" }
    ],
    title: "Public Opinion Classification from 1.6 Million Tweets",
    desc: "Manual social listening can't scale to millions of posts, leaving brands blind to sentiment shifts. An automated NLP pipeline using TF-IDF and Logistic Regression delivers real-time insight at 80% accuracy.",
    impact: "80% accuracy on 1.6M tweets · Replaces hours of manual monitoring with instant, scalable insight",
    link: "https://github.com/ghanysalam/Twitter-Sentiment-Analysis-using-Machine-Learning"
  },
  {
    category: "predictive",
    image: "assets/images/projects/bank-campaigns.jpg",
    alt: "Bank marketing campaign analytics",
    tags: [
      { name: "Predictive Analytics", class: "pt-navy" },
      { name: "Banking", class: "pt-gold" }
    ],
    title: "Bank Marketing Campaigns: Term Deposit Prediction",
    desc: "Mass-market campaigns for term deposits burn budget on disinterested customers. A predictive model using demographics and economic indicators slashes targeting costs while increasing conversion rates.",
    impact: "$60,358 additional savings · 17% cost reduction vs. traditional targeting methods",
    link: "https://github.com/PurwadhikaDev/BetaGroup_JC_DS_OL_11_FinalProject"
  },
  {
    category: "predictive",
    image: "assets/images/projects/insurance-claims.jpg",
    alt: "Travel insurance analytics",
    tags: [
      { name: "Predictive Analytics", class: "pt-teal" },
      { name: "Insurance", class: "pt-gold" }
    ],
    title: "Travel Insurance Claims Classification",
    desc: "Blanket insurance policies ignore individual risk profiles, eroding profitability. A claim-prediction model identifies high-risk policyholders, enabling precision targeting that unlocks measurable profit growth.",
    impact: "+59% profit uplift · Optimized claim management & targeted marketing resource allocation",
    link: "https://github.com/ghanysalam/Capstone-3-Travel-Insurance-Prediction-Claim"
  }
];
