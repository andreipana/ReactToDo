var AddTaskPanel = React.createClass({
    render: function () {

        return (
            <div className="AddTaskPanel">
                <button className="btn btn-primary glyphicon glyphicon-plus" />
                <div>
                    <label htmlFor="description">New To Do task description</label>
                    <input type="text" className="form-control" id="description" aria-describedby="basic-addon3" />
                </div>
            </div>
        );
    }
});