import Job from "../Jobs/Job";
import './laboral.css';
import veritran from '../../img/veritran.png';
import excelAscent from '../../img/excelascent.png';
import td7 from '../../img/td7.png'
import onyxSoft from '../../img/onyxSoftSAS.png'

function Laboral(){

    const veritranDescription = [
        {
          title: "Implementation Consultant",
          dateFrom: "March 18, 2019",
          dateTo: "December 31, 2019"
        },
        {
          title: "Software Engineer",
          dateFrom: "January 1, 2020",
          dateTo: "Present"
        }
      ];
    
      const excelAscentDescription = [
        {
          title: "Full Stack Developer",
          dateFrom: "",
          dateTo: ""
        }
      ];
    
      const tecnologiaDigital7Description = [
        {
          title: "Backend Developer",
          dateFrom: "",
          dateTo: ""
        }
      ];
    
      const onyxSoftwareDescription = [
        {
          title: "Software Developer",
          dateFrom: "",
          dateTo: ""
        }
      ]

    return(
        <div className="laboral">
            <div className="main-title">Laboral Experience</div>
            <div className="jobs">
            <Job 
                type={"job-primary"}
                width={'162px'} 
                height={'fit-content'}
                title={"VeriTran"}
                src={veritran}
                description={veritranDescription}
            />
            <Job 
                type={"job-primary"}
                width={'220px'} 
                height={'fit-content'}
                title={"ExcelAscent"}
                src ={excelAscent}
                description={excelAscentDescription}
            />
            <Job 
                type={"job-primary"}
                width={'220px'} 
                height={'fit-content'}
                title={"Tecnología Digital 7"}
                src={td7}
                description={tecnologiaDigital7Description}
            />
            <Job 
                type={"job-primary"}
                width={'162px'} 
                height={'fit-content'}
                title={"Onyx Soft"}
                src={onyxSoft}
                description={onyxSoftwareDescription}
            />
            </div>
        </div>
    );
};

export default Laboral;
