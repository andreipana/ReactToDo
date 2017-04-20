var TasksList = React.createClass({
    render: function () {
        var listItems = this.props.Data.map((task) => {
            return <TaskItem Data={task} key={task.Id} />
        });

        return (
            <div>
                <span>{this.props.Data.length} tasks</span>
                <table>
                    <thead>
                        <tr>
                            <th>To do</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
});