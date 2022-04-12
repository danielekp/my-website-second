import generative from "../Assets/generative.jpg"
import nonlinear from "../Assets/nonlinear.jpg"
import few from "../Assets/few.jpg"
import dantebert from "../Assets/dantebert.jpg"
import ciccionet from "../Assets/gestures_recognition_article.jpg"
import dreams from "../Assets/blueeyedfrancaisette.png"
import semanticsearch from "../Assets/semanticsearch.png"
import spellchecker from "../Assets/spell.png"

// --------------------------------------- Project List
export const ProjectList = [
  {
    img: nonlinear,
    title: "Nonlinear Climbing Video Indexing",
    description: "Master thesis made in collaboration with Aalto University, supervised by Jaakko Lehtinen. Web-based application to retrieve part of videos with nonlinear queries based on spatial area and body key points.",
    labels: ["AI","ComputerVision", "FullStack"],
    github_url: "https://github.com/danielekp/nonlinear-climbing-video-indexing",
    id_proj: "nonlinear",
  },
  {
    img: semanticsearch,
    title: "Computer-Assisted Solr Query Generation",
    description: "Project developed at IX session at PiSchool. Application for suggestions and autocompletion of a Solr query exploiting semantic search, with Transformers embeddings.",
    labels: ["AI","NLP", "FullStack"],
    id_proj: "semantic",
  },
  {
    img: few,
    title: "Few Shot Neural Network (and live demo)",
    description: "Few shot neural network with live demo for character recognition.",
    labels: ["AI","ComputerVision"],
    github_url: "https://github.com/danielekp/few-shot-learning",
    id_proj: "few",
  },
  {
    img: dantebert,
    title: "Dantesque Transformer",
    description: "GPT-2 based generative network writing in Dante's style.",
    labels: ["AI","Art","NLP"],
    github_url: "https://github.com/danielekp/dantebert",
    id_proj: "dante",
    hf: "https://huggingface.co/spaces/Daniele/forma-locutionis"
  },
  {
    img: spellchecker,
    title: "Italian Spellchecker - T5",
    description: "Italian spellchecker treated as a seq2seq model. It is built on top of T5.",
    labels: ["AI","NLP"],
    id_proj: "spell",
    hf: "https://huggingface.co/Daniele/italian-spellchecker",
  },
  {
    img: ciccionet,
    title: "CiccioNet",
    description: "Application to control web page (Wikipedia) using hand gestures.",
    labels: ["AI","ComputerVision"],
    github_url: "https://github.com/cicciok19/ML_project",
    id_proj: "ciccionet",
  },
  {
    img: dreams,
    title: "AI-driven art",
    description: "Images generated exploring the latest advancements in artificial neural networks.",
    labels: ["AI","ComputerVision","Art"],
    id_proj: "dreams",
  },
  {
    img: generative,
    title: "Generative Neural Networks",
    description: "From scratch development of conditional pixelCNN model and DCGAN.",
    labels: ["AI","ComputerVision"],
    github_url: "https://github.com/danielekp/generative-networks",
    id_proj: "generative",
  }
];

// --------------------------------------- Skills

export const stackList = [
];
