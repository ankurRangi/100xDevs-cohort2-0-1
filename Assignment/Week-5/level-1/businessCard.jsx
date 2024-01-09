export function BusinessCard(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3>Interests</h3>
            <li>
                {props.interest.map( (item) => (
                    <li key={item}>{item}</li>
                ))}
            </li>
            <div>
            <a href={props.linkedin} target="_blank">Linkedin</a>
            <a href={props.twitter} target="_blank">Twitter</a>
            </div>
        </div>
    )
}