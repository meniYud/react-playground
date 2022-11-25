const Item = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h2", {}, props.sn),
        React.createElement("h2", {}, props.isAvailable),
    ]);
}
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Playground"),
            React.createElement(Item, {name: "some item", sn: '1234', isAvailable: true}),
            React.createElement(Item, {name: "some other item", sn: 'dg5s6', isAvailable: false}),
            React.createElement(Item, {name: "another item", sn: '1s3d4f5g', isAvailable: true}),
        ]
    )
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))