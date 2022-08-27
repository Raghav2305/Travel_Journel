import "../CSS/App.css";


export default function Card(props){
    console.log(props);
    return (
        <div className="card">
            <div className="first-card">
        
            <b><hr  /></b>
            <a target="_blank" href={props.image}><img className="card-image" src={props.image} alt="foo" /></a>
            <div className="stats">
            <span><b>{props.name}</b></span>

            <p className="desc">
            {props.description}
            </p>
            </div>
            
            </div>  
                     
        </div>
        
    )
}
