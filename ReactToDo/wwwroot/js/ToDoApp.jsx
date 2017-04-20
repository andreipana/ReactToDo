var ToDoApp = React.createClass({

    render: function () {
        return (
            <div>
                <TasksList Data={this.props.Data} />
                <AddTaskPanel />
            </div>
        );
    }
});

var data = [
    {
        Id: 1,
        Description: "Create a React component",
        CreationDate: "2017.01.01"
    },
    {
        Id: 2,
        Description: "Add server-side rendering",
        CreationDate: "2017.01.02"
    }
];

ReactDOM.render(
    <ToDoApp Data={data} />,
    document.getElementById('content')
);