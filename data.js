/* =====================================================================
   COURSE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit for a new course.
   Everything on the page (title, menu, sections, people, tables) is
   built from the settings below.

   Quick rules:
   - Text goes inside quotes "..." or backticks `...` (backticks allow
     multiple lines and HTML like <b>, <a href="">, <ul><li>).
   - Every item in a list ends with a comma.
   - To hide a section without deleting it, set  hidden: true
   - See GUIDE.md for every option, with examples.
   ===================================================================== */

const COURSE = {

  /* ---------- 1. General settings ---------- */
  shortName: "DL",                           // shown at the top-left of the menu bar
  title: "Deep Learning",                    // big title at the top of the page
  subtitle: "Graduate Course · 3 Credits · 12 Weeks · Python & PyTorch",
  themeColor: "#4338ca",                     // main color (any CSS color)
  direction: "ltr",                          // "ltr" for English, "rtl" for Persian/Arabic

  // Extra buttons on the right side of the menu bar (e.g. Telegram, Quera, LMS)
  menuLinks: [
    { text: "Telegram Channel", link: "https://t.me/dl4051" },
    { text: "Telegram Group", link: "https://t.me/+KyaulG0n3xZhY2U8" },
  ],

  footer: "© 2026 Deep Learning Course Team",

  /* ---------- 2. Sections ----------
     Sections appear on the page in this order.
     Each section needs:  id, title, type
     type can be: "text", "people", "cards", "table"
     menu: false  → don't show it in the top menu
     hidden: true → don't show it at all
  */
  sections: [

    /* ---- Description (type: text) ---- */
    {
      id: "description",
      title: "Description",
      type: "text",
      menu: false,
      content: `
        <p>
          This course provides a comprehensive introduction to the <b>theory, implementation, and
          practical applications</b> of modern deep learning. It begins with the fundamental principles
          of neural networks and gradually progresses to advanced architectures for computer vision,
          speech processing, natural language processing, generative modeling, graph learning, and
          <b>large language models</b>.
        </p>
        <p>
          The course emphasizes both theoretical understanding and hands-on implementation. Students
          will learn not only how to use existing deep learning libraries, but also how fundamental
          components such as backpropagation, optimization algorithms, convolution, attention, and
          sequence modeling work internally.
        </p>
        <p>
          The course structure is inspired by the graduate-level
          <a href="https://deeplearning.cs.cmu.edu/" target="_blank">11-785 Introduction to Deep Learning</a>
          course at Carnegie Mellon University.
        </p>
      `,
    },

    /* ---- People (type: people) ---- */
    {
      id: "people",
      title: "People",
      type: "people",
      groups: [
        {
          title: "Instructor",
          people: [
            { name: "Dr. Marzieh Davoodabadi", photo: "assets/images/Dr.M.Davoodabadi.jpg" },
          ],
        },
        {
          title: "Head Teaching Assistant",
          people: [
            { name: "Mohammadmostafa Rostamkhani", photo: "assets/images/Mohammadmostafa Rostamkhani.png" },
          ],
        },
        {
          title: "Teaching Assistants",
          people: [
            { name: "Amir Jebbeli", photo: "assets/images/Amir Jebbeli.jpg" },
            { name: "Aida Khaleghi", photo: "assets/images/Aida Khaleghi.jpg" },
            { name: "Alireza Asl Nemati", photo: "assets/images/Alireza Asl Nemati.jpg" },
            { name: "Arezoo Kamaneh", photo: "assets/images/Arezoo Kamaneh.jpg" },
            { name: "Aysa Mayahinia", photo: "assets/images/Aysa Mayahinia.jpg" },
            { name: "Donya Esfandiarpoor" },
            { name: "Fahimeh Valizade" },
            { name: "Hadis Mirzaie", photo: "assets/images/Hadis Mirzaie.jpg" },
            { name: "Hamidreza Eskandari", photo: "assets/images/Hamidreza Eskandari.jpg" },
            { name: "Javad Faraji", photo: "assets/images/Javad Faraji.png" },
            { name: "Mahdi Oshani", photo: "assets/images/Mahdi Oshani.jpg" },
            { name: "Mahyar Rajaei", photo: "assets/images/Mahyar Rajaei.jpg" },
            { name: "Mohammad Bakhtiarizadeh", photo: "assets/images/Mohammad Bakhtiarizadeh.jpg" },
            { name: "Mohammad Haghighat", photo: "assets/images/Mohammad Haghighat.jpg" },
            { name: "Mojtaba Hadei" },
            { name: "Parsa Zargar", photo: "assets/images/Parsa Zargar.jpg" },
            { name: "Roham Izadidoost", photo: "assets/images/Roham izadidoost.jpg" },
            { name: "Saba Sattary", photo: "assets/images/Saba Sattary.jpg" },
            { name: "Sina Taheri", photo: "assets/images/Sina Taheri.jpg" },
            { name: "Somayeh Rezaie", photo: "assets/images/Somayeh Rezaie.jpg" },
          ],
        },
      ],
    },

    /* ---- Contact (type: text) ---- */
    {
      id: "contact",
      title: "Contacting the Course Team",
      type: "text",
      menu: false,
      content: `
        <p>
          Announcements are posted on the <a href="https://t.me/dl4051" target="_blank">Telegram channel</a>.
          Please ask your questions in the <a href="https://t.me/+KyaulG0n3xZhY2U8" target="_blank">Telegram group</a>,
          so everyone can benefit from the answers.
        </p>
      `,
    },

    /* ---- Learning objectives (type: text) ---- */
    {
      id: "objectives",
      title: "Learning Objectives",
      type: "text",
      menu: false,
      content: `
        <p>By the end of the course, students should be able to:</p>
        <ol class="two-col">
          <li>Explain the fundamental principles of neural networks and deep learning.</li>
          <li>Derive and implement the backpropagation algorithm.</li>
          <li>Train neural networks using modern optimization algorithms.</li>
          <li>Analyze and solve optimization and generalization problems.</li>
          <li>Implement Multilayer Perceptrons (MLPs) using PyTorch.</li>
          <li>Design and train Convolutional Neural Networks (CNNs).</li>
          <li>Understand and implement recurrent neural networks and sequence models.</li>
          <li>Explain the principles of attention and Transformer architectures.</li>
          <li>Understand the architecture and training of Large Language Models (LLMs).</li>
          <li>Apply transfer learning and parameter-efficient fine-tuning methods.</li>
          <li>Understand autoencoders, VAEs, GANs, diffusion models, and normalizing flows.</li>
          <li>Design Graph Neural Networks for graph-structured data.</li>
          <li>Understand the fundamentals of deep reinforcement learning.</li>
          <li>Evaluate deep learning models using appropriate experimental methodology.</li>
          <li>Perform hyperparameter tuning, ablation studies, and error analysis.</li>
          <li>Implement a complete deep learning project from problem formulation to evaluation.</li>
        </ol>
      `,
    },

    /* ---- Details (type: cards) ---- */
    {
      id: "details",
      title: "Details",
      type: "cards",
      cards: [
        {
          title: "Course Info",
          content: `
            <ul>
              <li><b>Level:</b> Graduate</li>
              <li><b>Duration:</b> 12 weeks</li>
              <li><b>Credits:</b> 3</li>
              <li><b>Classes:</b> Sun, Tue, Thu · 7:30–9:00</li>
              <li><b>Language:</b> Python</li>
              <li><b>Framework:</b> PyTorch</li>
            </ul>
          `,
        },
        {
          title: "Prerequisites",
          content: `
            <b>Mathematics:</b> linear algebra, matrix and vector operations, probability and statistics,
            partial derivatives and the chain rule, basic optimization.<br>
            <b>Programming:</b> Python 3, NumPy, Pandas, basic OOP and data visualization.<br>
            <b>Machine Learning:</b> regression, classification, train/validation/test sets, loss functions,
            over/underfitting, cross-validation.
          `,
        },
        {
          title: "Grading",
          content: `
            <ul>
              <li>Weekly Quizzes &amp; Participation: 10%</li>
              <li>Homework / Programming Assignments: 30%</li>
              <li>Midterm Exam: 20%</li>
              <li>Final Exam: 25%</li>
              <li>Final Project &amp; Presentation: 15%</li>
            </ul>
          `,
        },
        {
          title: "Software & Tools",
          content: `
            <div class="tags">
              <span>Python</span><span>NumPy</span><span>PyTorch</span><span>TorchVision</span>
              <span>Hugging Face Transformers</span><span>Matplotlib</span><span>Jupyter / Colab</span>
              <span>Git &amp; GitHub</span><span>Kaggle</span>
            </div>
            GPU environments such as Google Colab or university GPU servers are encouraged.
          `,
        },
        {
          title: "Homeworks",
          content: `
            Eight implementation-heavy assignments in four pairs: neural network fundamentals,
            optimization &amp; CNNs, sequence modeling, and Transformers &amp; LLMs.
            Key components are implemented from scratch in <b>NumPy</b> and in <b>PyTorch</b>.
          `,
        },
        {
          title: "Evaluation Philosophy",
          content: `
            <ul>
              <li><b>Understanding:</b> explain backpropagation, CNNs, LSTMs, attention, Transformers, VAEs, GANs, diffusion, GNNs.</li>
              <li><b>Implementation:</b> build key components with NumPy and PyTorch.</li>
              <li><b>Research:</b> design experiments, compare baselines, run ablations, analyze failures, critique papers.</li>
            </ul>
          `,
        },
      ],
    },

    /* ---- Schedule (type: table) ---- */
    {
      id: "schedule",
      title: "Schedule",
      type: "table",
      columns: ["Week", "Topic", "Key Concepts", "Practical"],
      rows: [
        ["1-1", "<b>Introduction to Deep Learning</b>", "History of neural networks, connectionism, perceptron, MLPs, why deep networks, DL vs. traditional ML", "Python &amp; PyTorch review, tensor operations, a simple neural network"],
        ["1-2", "<b>Neural Networks &amp; Universal Approximation</b>", "Artificial neurons, activation functions (Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax), universal approximation, depth vs. width", "MLP from scratch in NumPy, comparing activations"],
        ["2", "<b>Learning &amp; Empirical Risk Minimization</b>", "Supervised learning, ERM, regression and classification losses, cross-entropy, maximum likelihood", "Implementing loss functions, training a simple classifier"],
        ["3", "<b>Gradient Descent &amp; Backpropagation</b>", "Batch, stochastic and mini-batch GD, computational graphs, chain rule, forward and backward propagation", "Backpropagation from scratch, numerical gradient checking"],
        ["4", "<b>Optimization &amp; Training Deep Networks</b>", "Loss landscapes, saddle points, vanishing/exploding gradients, Momentum, Nesterov, AdaGrad, RMSProp, Adam, AdamW, LR scheduling", "Comparing optimizers, learning-rate experiments, hyperparameter tuning"],
        ["5", "<b>Regularization &amp; Generalization</b>", "Bias-variance trade-off, L1/L2, weight decay, dropout, batch normalization, data augmentation, early stopping", "Ablation study, comparing regularization techniques"],
        ["6", "<b>Convolutional Neural Networks</b>", "Convolution, kernels, stride, padding, pooling, receptive fields, parameter sharing; LeNet, AlexNet, VGG, Inception, ResNet", "CNN image classification in PyTorch"],
        ["7-1", "<b>Recurrent Neural Networks</b>", "Unrolling RNNs, backpropagation through time, LSTM, GRU, bidirectional RNNs", "RNN / LSTM in PyTorch"],
        ["7-2", "<b>Sequence-to-Sequence Models</b>", "Encoder-decoder, machine translation, speech recognition, CTC loss, beam search, decoding strategies", "Character-level language model, beam-search decoding"],
        ["8", "<b>Attention &amp; Transformers</b>", "Query/Key/Value, scaled dot-product and multi-head attention, positional encoding; Transformer, BERT, GPT, T5", "Implement self-attention, build a small Transformer"],
        ["9", "<b>Large Language Models</b>", "Pretraining, tokenization and BPE, scaling laws, in-context learning, instruction tuning, RLHF, DPO, alignment, hallucination, evaluation", "Hugging Face Transformers, running a pretrained LM"],
        ["10", "<b>Efficient Adaptation of Large Models</b>", "Transfer learning, fine-tuning, LoRA, QLoRA, prefix and prompt tuning, quantization, knowledge distillation", "Fine-tuning a pretrained Transformer, LoRA adaptation"],
        ["11", "<b>Representation Learning &amp; Generative Models</b>", "Autoencoders (sparse, denoising), VAEs, ELBO, latent representations, normalizing flows", "Implement a VAE, visualize the latent space"],
        ["12", "<b>GANs &amp; Diffusion Models</b>", "Generator/discriminator, minimax objective, mode collapse, conditional GANs; forward/reverse diffusion, DDPM, text-to-image", "Implement a simple GAN, experiment with a pretrained diffusion model"],
      ],
    },

    /* ---- Optional advanced topics (type: text) ---- */
    {
      id: "advanced",
      title: "Optional Advanced Topics",
      type: "text",
      menu: false,
      content: `
        <p>Depending on available time, selected lectures or seminars may cover:</p>
        <div class="tags">
          <span>Vision Transformers</span><span>Multimodal Models</span><span>CLIP</span>
          <span>Vision-Language Models</span><span>Retrieval-Augmented Generation</span>
          <span>Multimodal LLMs</span><span>Mixture-of-Experts</span><span>Model Compression</span>
          <span>Knowledge Distillation</span><span>Federated Learning</span><span>Self-Supervised Learning</span>
          <span>Contrastive Learning</span><span>Deep Reinforcement Learning</span><span>AI Agents</span>
          <span>Neural Architecture Search</span><span>Explainable AI</span><span>Responsible &amp; Trustworthy DL</span>
        </div>
      `,
    },

    /* ---- Slides (type: table with links) ----
       A cell can be plain text, or a link:  { text: "PDF", link: "files/slides/01.pdf" }
    */
    {
      id: "slides",
      title: "Slides",
      type: "table",
      columns: ["Week", "Topic", "Link"],
      rows: [
        // ["1-1", "Introduction to Deep Learning", { text: "PDF", link: "files/slides/01-intro.pdf" }],
      ],
    },

    /* ---- Videos (empty table → shows "Will be added soon") ---- */
    {
      id: "videos",
      title: "Videos",
      type: "table",
      columns: ["Week", "Topic", "Link"],
      rows: [],
    },

    /* ---- Homeworks ---- */
    {
      id: "homeworks",
      title: "Homeworks",
      type: "table",
      columns: ["Number", "Topic", "Release", "Deadline", "Link"],
      rows: [
        ["HW 1", "Neural Network Fundamentals: MLP from scratch, forward propagation", "TBA", "TBA", "—"],
        ["HW 2", "Neural Network Fundamentals: backpropagation, gradient checking, PyTorch", "TBA", "TBA", "—"],
        ["HW 3", "Optimization: implementing optimization algorithms, hyperparameter tuning", "TBA", "TBA", "—"],
        ["HW 4", "CNNs: architecture design, image classification", "TBA", "TBA", "—"],
        ["HW 5", "Sequence Modeling: RNN / LSTM, sequence classification", "TBA", "TBA", "—"],
        ["HW 6", "Sequence Modeling: Seq2Seq, attention, beam search", "TBA", "TBA", "—"],
        ["HW 7", "Transformers: implementation, pretrained model usage", "TBA", "TBA", "—"],
        ["HW 8", "LLMs: fine-tuning, LoRA / QLoRA, model evaluation", "TBA", "TBA", "—"],
        // When released, replace "—" with a link:  { text: "Questions", link: "files/homeworks/hw1.pdf" }
      ],
    },

    /* ---- Project (type: text) ---- */
    {
      id: "project",
      title: "Project",
      type: "text",
      content: `
        <p>
          Each student or team completes a <b>research-oriented deep learning project</b>,
          worth 15% of the final grade together with the final presentation. The project should include:
        </p>
        <ol class="two-col">
          <li>Problem definition</li>
          <li>Literature review</li>
          <li>Dataset preparation</li>
          <li>Baseline model</li>
          <li>Proposed approach</li>
          <li>Experimental design</li>
          <li>Ablation study</li>
          <li>Evaluation</li>
          <li>Error analysis</li>
          <li>Final report</li>
          <li>Oral presentation</li>
        </ol>
        <h3>Suggested Areas</h3>
        <div class="tags">
          <span>Computer Vision</span><span>NLP</span><span>Speech Recognition</span>
          <span>Time-Series Forecasting</span><span>LLMs</span><span>Multimodal Learning</span>
          <span>Generative AI</span><span>Medical AI</span><span>Graph Neural Networks</span>
          <span>Recommendation Systems</span><span>Deep Reinforcement Learning</span><span>AI Agents</span>
        </div>
      `,
    },

    /* ---- Resources (type: text) ---- */
    {
      id: "resources",
      title: "Resources",
      type: "text",
      content: `
        <p>
          Because deep learning changes rapidly, the course does not rely on a single textbook.
          Recommended references:
        </p>
        <ol>
          <li><a href="https://www.deeplearningbook.org/" target="_blank"><i>Deep Learning</i></a>, Ian Goodfellow, Yoshua Bengio, Aaron Courville</li>
          <li><a href="https://d2l.ai/" target="_blank"><i>Dive into Deep Learning</i></a>, Aston Zhang, Zachary C. Lipton, Mu Li, Alexander J. Smola</li>
          <li><a href="https://udlbook.github.io/udlbook/" target="_blank"><i>Understanding Deep Learning</i></a>, Simon J. D. Prince</li>
          <li>Selected papers from NeurIPS, ICML, ICLR, ACL, EMNLP, CVPR, ICCV and ECCV</li>
        </ol>
      `,
    },

  ],
};
