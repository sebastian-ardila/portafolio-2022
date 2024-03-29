import './job.css';


interface DescriptionJob{
    title: string;
    dateFrom: string;
    dateTo: string;
}

interface JobInterface{
    type: string;
    width: string;
    height: string;
    title: string;
    imgSrc: string;
};
function Job({type, width, height, title, imgSrc}: JobInterface){

    const imgStyle = {
        'backgroundImage': `url(${imgSrc})`,
        'backgroundSize': '40px 40px',
        'width': '40px',
        'height': '40px',
        'border': '2px solid rgb(163 163 163 / 24%)',
        'borderRadius': '5px',
        'margin': '10px'
    };

    return(
        <div 
        className={type} 
        style={{width: width, height: height}}>
            <div className="job-padding">
                <div className={"job-card-title"}>
                    {title}
                </div>
                <div className="job-card-body">
                    <div style={imgStyle}/>   
                    <div style={{"width": "60%"}}>
                        <div className="job-fakeDescription job-fakeDescription-first"/>
                        <div className="job-fakeDescription job-fakeDescription-second"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
