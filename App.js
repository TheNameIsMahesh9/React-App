{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}

const header = React.createElement("div",
    {
        id: "parent"
    }, React.createElement("div",
        {
            id: "child"
        }, [React.createElement("h1",
            {
            }, 'header1'), React.createElement("h2",
                {

                }, 'header2')]))



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header)