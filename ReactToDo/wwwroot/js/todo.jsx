var TasksList = React.createClass({
    render: function () {
        return (
            <div className="tasksList">
                Here be tasks!
            </div>
        );
    }
});
ReactDOM.render(
    <TasksList />,
    document.getElementById('content')
);