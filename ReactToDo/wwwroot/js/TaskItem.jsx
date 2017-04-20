var TaskItem = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.Data.Description}</td>
                <td>{this.props.Data.CreationDate}</td>
            </tr>
        );
    }
});