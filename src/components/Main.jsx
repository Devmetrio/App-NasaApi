export default function Main(props) {
    const {data} = props;
    return (
        <div className="imgContainer">
            <img className="bgImage" src={data.hdurl} alt={data.title || 'bg-img'}></img>
        </div>
    )
}