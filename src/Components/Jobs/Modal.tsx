import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface AnimationProps{
  active?: boolean;
  type?: string;
};

interface BoundingOptions {
  border: BoundingProps;
  container: BoundingProps;
};

interface BoundingModel {
  initBoundings: BoundingOptions;
  endBoundings: BoundingOptions;
};

interface CloseOptions {
  closeButtonStyles?: Partial<CSSStyleDeclaration>;
  position?: string;
  onCloseButton?: {};
};


type ModalProps = {
  children: React.ReactElement[];
  id: string;
  boundings?: BoundingModel;
  closeOptions?: CloseOptions;
};

interface TargetModalProps{
  show: boolean;
}

interface ExpandibleWrapperProps{
  backgroundColor: string;
}

interface ExpandibleContentProps{
  show: boolean;
  backgroundColor: string;
}

interface BoundingProps{
  top: string;
  left: string;
  width: string;
  height: string;
}


interface GlobalStylesProps{
  backgroundBorder: string;
  border?: BoundingProps;
  container?: BoundingProps;
  id: string;
  show: boolean;
}

interface CloseModalProps{
  location: string;
}


const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

    h1{
      margin: 0;
    }
    .transiction-click-${props => props.id}{
      transition: background-color 0.5s, top 0.5s, left 0.5s;
    }
    .modal-effect-${props => props.id}{
      background-color: ${props => props.show ? 
        props?.backgroundBorder: ""};
      position: fixed;
      display: flex;
      top: ${props => props.border?.top || "0vh"};
      left: ${props => props.border?.left || "-100vw"};
      width: ${props => props.border?.width};
      height: ${props => props.border?.width};
    }
}
`;

const TargetModal = styled.div<TargetModalProps>`
  cursor: pointer;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: fit-content;
  height: fit-content;
`;

const ExpandibleWrapper = styled.div<ExpandibleWrapperProps>`
  z-index: 999;
  padding: 0%;
  background: ${props=> props.backgroundColor};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
`;

const ExpandibleContent = styled.div<ExpandibleContentProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${props=> props.backgroundColor};
  border-radius: 10px;
  width: 100%;
  height: 70%;
  margin: 10%;
`;

const CloseModal = styled.div<CloseModalProps>`
  margin: 5px;
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: #282c34;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: none;
  object-position: 5px 10%;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = ({children, id, boundings}: ModalProps) => {
  const getModalWrapper = (id:string)=> document.getElementById(id) as HTMLElement || document.createElement('div');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [styles, setStyles] = useState<BoundingOptions>({
    border:{top:'',left:'',width:'',height:''}, 
    container:{top:'',left:'',width:'',height:''}
  });
  

  const modalManager = ()=>{
    setShowModal(prev => !prev);
  };

  useEffect(()=>{
    if(showModal === true){
      const expandibleItem = document.getElementById("expandible-wrapper-"+id);
      expandibleItem?.classList.add("transiction-click-"+id);
      if(boundings?.endBoundings){
        const endStyles = boundings?.endBoundings;
        setStyles(endStyles);
      }
    }else{
      if(boundings?.initBoundings){
        const initStyles = boundings?.initBoundings;
        setStyles(initStyles);
        const expandibleComponent: HTMLElement = getModalWrapper("expandible-wrapper-"+id); 
        const bodyElement = document.querySelector('root');
        bodyElement?.appendChild(expandibleComponent);  
      }
    }
  }, [showModal, id]);
  
  return (
    <>
      <GlobalStyles id={id} show={showModal} border={styles.border} container={styles.container} backgroundBorder={'gray'}/>
      <TargetModal onClick={modalManager} show={showModal} id={"target-"+id}>
        {children[0]}
      </TargetModal>
      <ExpandibleWrapper backgroundColor={"linear-gradient(217deg, rgb(255 255 255 / 80%), rgb(255 0 0 / 6%) 70.71%),\
        linear-gradient(127deg, rgb(241 221 235 / 80%), rgb(86 209 86 / 16%) 70.71%),\
        linear-gradient(336deg, rgb(255 255 255 / 80%), rgb(68 68 168 / 29%) 70.71%)"} className={"modal-effect-"+id} id={"expandible-wrapper-"+id}>
        <ExpandibleContent backgroundColor={"#ffffffeb"} show={showModal}>
          <CloseModal onClick={modalManager} location={"right"}>
            X
          </CloseModal>          
          <ModalContent>
            {children[1]}
          </ModalContent>
        </ExpandibleContent>
      </ExpandibleWrapper>
    </>
  )
}

export default Modal
