import Job from "../Jobs/Job";
import './laboral.css';
import Modal from '../Jobs/Modal';
import styled from "styled-components";
import { laboralModel } from "./laboralModel";


function Laboral(){

    const initBoundings = {
      border: {
        top: '100vh',
        left: '0vw',
        width: '100%',
        height: '100%'
      },
      container: {
        top: '100%',
        left: '100%',
        width: '100%',
        height: '100%'
      }
    };

    const endBoundings = {
      border: {
        top: '0vh',
        left: '0vw',
        width: '100%',
        height: '100%'
      },
      container: {
        top: '100%',
        left: '100%',
        width: '100%',
        height: '100%'
      }
    };

    const boundings = {
      initBoundings,
      endBoundings
    };

    return(
        <div className="laboral">
            <div className="main-title">Laboral</div>
            <div className="jobs">
            {laboralModel.map((laboral, keyLaboral)=>(              
              <Modal
                key={keyLaboral}
                id={laboral.styles.modal.id}
                boundings={boundings}
              >
                <Job 
                  type={laboral.styles.job.type}
                  width={laboral.styles.job.width} 
                  height={laboral.styles.job.height}
                  title={laboral.styles.job.title}
                  imgSrc={laboral.styles.job.imgSrc}
                />
                <CustomModalContent 
                  companyName={laboral.companyName}
                  experience={laboral.experience}/>
              </Modal>
            ))}
            
            </div>
        </div>
    );
};

interface CustomModalContentBoxProps {

};

const CustomModalContentBox = styled.div<CustomModalContentBoxProps>`
  width: 86%;
  height: 80%;
  margin: 5%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: black;
`;

interface CustomTextProps{
  size: string;
  color?: string;
  weight: string;
  margin?: string;
}

const CustomTitle = styled.h1<CustomTextProps>`
  font-family: "Cuprum", sans-serif;
  font-size: ${props=> props.size};
  font-weight: ${props => props.weight};
  background: ${props => props.color || 'black'};
  margin: ${props => props.margin || 0};

  -webkit-background-clip: text;
  color: transparent;
`;

const CustomSubtitle = styled.h2<CustomTextProps>`
font-family: "Cuprum", sans-serif;
font-size: ${props=> props.size};
font-weight: ${props => props.weight};
background: ${props => props.color || 'black'};
margin: ${props => props.margin || 0};

-webkit-background-clip: text;
color: transparent;
`;


const CustomText = styled.p<CustomTextProps>`
  font-family: "Cuprum", sans-serif;
  font-size: ${props=> props.size};
  font-weight: ${props => props.weight};
  background: ${props => props.color || 'black'};
  margin: ${props => props.margin || 0};

  -webkit-background-clip: text;
  color: transparent;
`;

interface experience{
  subtitle: string;
  date: string;
  descriptions: string[];
}

interface CustomModalContentProps{
  companyName: string;
  experience: experience[];
};

function CustomModalContent({companyName, experience}: CustomModalContentProps){
  return(
    <>  
      <CustomModalContentBox>
        <CustomContainer>
          <CustomTitle
            size={"3em"} 
            color={"linear-gradient(217deg, rgb(0 0 0), rgb(255 238 238) 70.71%), linear-gradient(127deg, rgb(169 255 212 / 80%), #21e080 70.71%), linear-gradient(336deg, rgb(209 121 121 / 59%), rgb(223 19 115) 70.71%)"}
            weight={"800"}>
            {companyName}
          </CustomTitle>
          {experience.map((job, keyExperience)=>(
              <div key={keyExperience}>
                <CustomSubtitle 
                  size={"2em"}
                  color={"gray"}
                  weight={"800"}>
                    {job.subtitle}
                </CustomSubtitle>
                <h3>{job.date}</h3>
                <Description descriptions={job.descriptions}/>
              </div>
          ))}
        </CustomContainer>
      </CustomModalContentBox>
    </>
  )
}

interface descriptions{
  descriptions: string[];
}

function Description({descriptions}: descriptions){
  return(
    <>
      {descriptions.map((description, keyDescription)=>(
        <CustomText 
          key={keyDescription}
          size={"1.2em"}
          color={"gray"}
          weight={"400"}
          margin={"5%"}
          >
          {description}
        </CustomText>
      ))}
    </>
  )
}

export default Laboral;
