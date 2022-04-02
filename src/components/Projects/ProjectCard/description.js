import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import generation from '../../../Assets/generationpixel.gif';
import zero from '../../../Assets/0.png';
import one from '../../../Assets/10.png';
import second from '../../../Assets/49.png';
import {Row,Col} from 'react-bootstrap'
import { Player } from 'video-react';

import nonlinear from '../../../Assets/nonlinear_video.mp4';
import app_nonlinear from '../../../Assets/app_nonlinear.png';
import sample from '../../../Assets/sample.mp4';
import sample_poster from '../../../Assets/sample.png';

import Few from './few.js'

class Description extends React.Component {

  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const modalStyles = {

      overlay: {
        padding: "1px",
        margin: "-10px"
      },

      content: {
      },

    };
    return (
      <div>
      <a
        className="btn PrimaryBtn"
        onClick={this.toggleModal}
        target="_blank"
        rel="noopener noreferrer">
        Description ▼
      </a>
        <CSSTransition
          in={this.state.isOpen}
          timeout={300}
          classNames="dialog"
        >
          <Modal
            closeTimeoutMS={500}
            isOpen={this.state.isOpen}
            ariaHideApp={false}
            style={modalStyles}>
          <a
            className="btn PrimaryBtn"
            onClick={this.toggleModal}
            target="_blank"
            rel="noopener noreferrer">
              Go back
            </a>

            {this.props.proj=="generative" &&
            <div className="modal_content">
              <p className="proj_title">Generative Neural Networks</p>
              <hr/>
              <p>Project realized at Aalto University as homework for the course "Deep Learning", February 2020.</p>
              <hr/>
              <Row>
              <Col xs={12} sm={12} md={7} lg={8} xl={10}><p className="proj_subtitle">The homework was about the devolpment of two generative model. The first one, called <b>conditional pixel convolutional neural network</b>, consisted
              in learning how to generate an image, pixel by pixel, computing <a className="keywords">the conditional probability over the preceding pixel.</a>
              This probability is obtained with a deep convolutional neural network
                whose levels are masked with a <a class="keywords">binary mask</a> of the same size of the kernel (with 1s in the cells from
                the beginning to the middle one) .
                The network itself is made of a stack 8 masked convolutional layer, using <a class="keywords">2d batch normalization</a>
                and <a class="keywords">ReLU</a> non-linearity. Moreover, to condition the output a one-hot coded vector (multiplied by a parameter of a <a class="keywords">fully connected layer</a> of the desidered class
                is added to the input of each layer in the <a class="keywords">forward</a> phase.
              </p></Col>
              <Col xs={12} sm={11} md={5} lg={4} xl={2} className="text-center">
                <img src={generation} style={{marginBottom:"15px"}}/>
              </Col>
              </Row>
              <hr/>
              <Row>
              <Col xs={12} sm={12} md={7} lg={8} xl={10}><p className="proj_subtitle">The second one, called <b>deep convolutional generative adversarial network</b>,
              was proposed in the paper <a target="_blank" rel="noopener noreferrer" href={'https://arxiv.org/pdf/1511.06434.pdf'}>
              Unsupervised Representation Learning whit Deep Convolutional Generative Adversarial Network</a> by Alec Radford, Luke Metz and Soumith Chintala.
              The objective of this model is to produce image that emulates <a className="keywords">MNIST database</a> (i.e. hand-written digits). To do so we trained two different networks:
              the <a className="keywords">generator</a>, whose aim is to produce new images to 'fool' the second one, the <a className="keywords">discriminator</a>. The latter has to recognize which images
              are produced by the generator and which ones are taken from the original MNIST dataset.
              </p></Col>
              <Col xs={12} sm={11} md={5} lg={4} xl={2} className="text-center">
                <img src={second} style={{marginBottom:"15px"}}/>
              </Col>
              </Row>
              </div>
            }
            {this.props.proj=="nonlinear" &&
            <div className="modal_content">
              <p className="proj_title">Nonlinear climbing video indexing</p>
              <hr/>
              <p>Master thesis, 30 CFU, realized in collaboration with Aalto University. The project was supervised by <a href="https://users.aalto.fi/~lehtinj7/" target="_blank" rel="noopener noreferrer">Jaakko Lehtinen</a>.</p>
              <hr/>
              <Row>
              <p>
              Human Pose Estimation is one of the most promising research area in the
              field that links together Artificial Intelligence and Computer Vision. Its appli-
              cations are countless since it mimics one of the principal human capabilities:
              understanding the physical space that surrounds us, and the interaction of
              the context with people. Sport is the field that can most benefit from this
              technology since it involves dynamic movements of individuals. The project is the research and the development of a fully-working application
              that exploits human pose estimation to perform <a className="keywords">nonlinear queries</a> to retrieve
              the exact pose and movements that the user is looking for. I applied this
              framework to climbing, in which the training phase involves mostly figure out
              how to perform a certain pose by looking at how other climbers have done it.
              </p>
              <video style={{marginBottom:"10px"}} controls poster={app_nonlinear}>
                <source src={nonlinear} type="video/mp4"/>
               </video>
              <a href="https://docs.google.com/presentation/d/1UMt51EBX_Ovc9OgfL3ah4fRgmr5b9ON-AFRy6UkOCPI/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><u>Here the slides of the final defense!</u></a>
              </Row>
            </div>}
            {this.props.proj=="few" &&
            <div className="modal_content">
              <p className="proj_title">Few Shot Learning</p>
              <hr/>
              <p>Project realized at Aalto University as homework for the course "Deep Learning", February 2020. Demo not available on mobile media.</p>
              <hr/>
              <Row>
                <Few/>
              </Row>
            </div>}
            {this.props.proj=="ciccionet" &&
            <div className="modal_content">
              <p className="proj_title">CicioNet</p>
              <hr/>
              <p>Project realized at Politecnico di Torino as course project for the course "Machine Learning for Multimedia", February 2021. It was developed in a team of three people.</p>
              <hr/>
              <Row>
              <p>
              The application makes the user able to control a web page (that we chose to be Wikipedia, but can be easily applied to any web page) using hand gestures.
              </p>
              <p>
              The model was developed using TensorFlow APIs for object recognition; we built the entire dataset (about 5000 annotated images), using real gesture pictures and fake ones, realized with 3D graphics.
              <a href="Gesture_Recognition_For_Navigating_Web_Pages.pdf" download>Here the paper </a> (Italian).
              </p>
              <video style={{marginBottom:"10px"}} controls poster={sample_poster}>
                <source src={sample} type="video/mp4"/>
               </video>
              </Row>
            </div>}
            {this.props.proj=="dante" &&
            <div className="modal_content">
              <p className="proj_title">DanteBert</p>
              <hr/>
              <p>Experiment mixing technical tools with art, most recent research in NLP and past literature.</p>
              <hr/>
              <Row>
                <p>
                I've finetuned a Bert model, provided by HuggingFace, with a corpus containing all the literature production of Dante, build up by me.
                The aim of the project was to find out which features of Dante's production the transformer model was able to extract. It seems that the model, pretrained with
                a huge italian corpus, is able to imitate Dante style with a fine tuning. The experiment is still at the beginning, and it's going on!
                </p>
                <Row className="justify-content-center">
                <Col xs={12} sm={12} md={6} lg={5} xl={3} className="info">
                <a className="input">Input:</a>  E colei che amai
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="info">
                <a className="input">Result:</a> E colei che amai <i>uopo più si vuoli, d’altrui lume già bianche e fioche, quasi come piante novelle rinognate per l’acqua fosser pronte.e disse: Piglia quel seme a li occhi; volgi ’l viso, e fammi nota la larghezza di questa nutrice».S’el s’aunasse ancor tutta la gente che già, in su la fortunata terra di Puglia, fu del suo sangue</i>
                </Col>
                </Row>
              </Row>
            </div>}
            <a
              className="btn PrimaryBtn"
              onClick={this.toggleModal}
              target="_blank"
              rel="noopener noreferrer">
                Go back
              </a>

          </Modal>
        </CSSTransition>
      </div>
    );
  }
}

export default Description;
