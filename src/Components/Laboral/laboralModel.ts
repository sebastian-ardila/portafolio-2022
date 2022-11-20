import veritranImage from '../../img/veritran.png';
import excelAscenImage from '../../img/excelascent.png';
import td7Image from '../../img/td7.png';
import onyxSoftImage from '../../img/onyxSoftSAS.png';

const styleSheet1Init: Partial<CSSStyleDeclaration> = {  
    "borderRadius":"10px",
    "background": "white",
  };
  
const styleSheet1End: Partial<CSSStyleDeclaration> = {
    "borderRadius":"10px",
    "background":"red",
};

const borderVeriTran = {
    "initStyles": styleSheet1Init, 
    "endStyles": styleSheet1End
 };

 const styleSheet2Init: Partial<CSSStyleDeclaration> = {
    "borderRadius":"10px",
    "background": "pink",
  };
  
const styleSheet2End: Partial<CSSStyleDeclaration> = {
    "borderRadius":"10px",
    "background":"red",
};
  
const borderExcelAscent = {
    "initStyles": styleSheet2Init, 
    "endStyles": styleSheet2End
};

const styleSheet3Init: Partial<CSSStyleDeclaration> = {
    "borderRadius":"10px",
    "background": "yellow"
  };
  ;
  
const styleSheet3End: Partial<CSSStyleDeclaration> = {
    "borderRadius":"10px",
    "background":"red",
};

const bordertd7 = {
    "initStyles": styleSheet3Init, 
    "endStyles": styleSheet3End
};

const styleSheet4Init: Partial<CSSStyleDeclaration> = {
    "borderRadius":"10px",
    "background": "blue"
  };

  
const styleSheet4End: Partial<CSSStyleDeclaration> = {
    "borderRadius":"10px",
    "background":"red"
};

const borderOnyxSoft = {
    "initStyles": styleSheet4Init, 
    "endStyles": styleSheet4End
};

export const laboralModel = [
    {   
        companyName: "VeriTran",
        experience: [
            {
                subtitle: "Software Engineer Frontend",
                date: "2020-Present",
                descriptions: ["Technological development of the Low Code visual platform in which applications\
                are created for financial entities, mainly digital banking. For this we used vanilla javascript\
                 at first and svg.js, then we migrate the code to React with Typescript keeping the TDD practice\
                  for components.",
                  "Migrate the visual canvas to a microfrontend connected with an iframe. Improve\
                  the development process through mocking the routes using agile technical oriented processes."
                ] 
            },
            {
                subtitle: "Implementation Consultant",
                date: "2019-2020",
                descriptions: ["Client Delivery Consultant and implementer of a webstie for Banco Estado - Chile,\
                using the VeriTran Low Code Platform and best frontend development practices taking care of the\
                 performance."
                ]
            }
        ],
        styles: {
            modal: {
                id: "modal-1",
                border: borderVeriTran,
                container: borderVeriTran
            },
            job: {
                type: "job-primary",
                width: "162px",
                height: "fit-content",
                title: "VeriTran",
                imgSrc: veritranImage                
            }
        }
    },
    {   
        companyName: "ExcelAscent",
        experience: [
            {
                subtitle: "Fullstack Developer",
                date: "2018-2019",
                descriptions: [
                    "Crypocurrency payment integration and backoffice development for crypto investment\
                 packages working in frontend, backend and the entire architecture under CEO supervision.",
                 "Implemented a ticket system with updated statuses in real time to provide good support to users.",
                 "Implemented a Cryptocurrency payment gateway API to recieve payments for investment packages.",
                ]
            }
        ],
        styles: {
            modal: {
                id: "modal-2",
                border: borderExcelAscent,
                container: borderExcelAscent
            },
            job: {
                type: "job-primary",
                width: "220px",
                height: "fit-content",
                title: "ExcelAscent",
                imgSrc: excelAscenImage                
            }
        }
    },
    {   
        companyName: "Tecnología Digital 7",
        experience: [
            {
                subtitle: "Fullstack Developer",
                date: "2018",
                descriptions: [
                    "Develop a graphic interface to display cryptocurrency prices in real time using \
                    socket.io and vanilla javascript.",
                    "Develop a tested API to deliver crypto-wallet information using \
                    Express.js and Mocha.js and MongoDB.",
                ]
            }
        ],
        styles: {
            modal: {
                id: "modal-3",
                border: bordertd7,
                container: bordertd7
            },
            job: {
                type: "job-primary",
                width: "220px",
                height: "fit-content",
                title: "Tecnología Digital 7",
                imgSrc: td7Image                
            }
        }
    },
    {   
        companyName: "Onyx Soft S.A.S",
        experience: [
            {
                subtitle: "Junior Developer",
                date: "2017",
                descriptions: [
                    "Develop new features using a super framework of Java called \
                    webdev for chain restaurants.",
                    "Implementation of application designs under de supervision of \
                    the CEO",
                ]
            }
        ],
        styles: {
            modal: {
                id: "modal-4",
                border: borderOnyxSoft,
                container: borderOnyxSoft
            },
            job: {
                type: "job-primary",
                width: "162px",
                height: "fit-content",
                title: "Onyx Soft S.A.S",
                imgSrc: onyxSoftImage                
            }
        }
    }
];