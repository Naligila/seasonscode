import "./index.css"

cosnst BannerCardItem = (props) =>{
    const {details} = props;
    const ( headerText,description,className)= details;

    return (
        <li className={`${className} banner-card-item`}>
           <div>
             <h1 className="heading">{headerText}</h1>
             <p className="description">{description}</p>
             <button className="show-more-btn">Show More</button>
           </div>

        </li>

    )
}
