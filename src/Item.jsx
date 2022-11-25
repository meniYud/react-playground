
const Item = (props) => {
    return <div>
        <h2>{props.name}</h2>
        <h2>{props.sn}</h2>
        <h2>{props.isAvailable}</h2>
    </div>
};

export default Item;