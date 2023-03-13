import './Create.css';
export default function Create() {
    return (
        <div className="form">
            <div className="form-toggle" />
            <div className="form-panel one">
                <div className="form-header">
                    <h1>Add drawing</h1>
                </div>
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Drawing name</label>
                            <input
                                type="text"
                                required="required"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="add">Add file</label>
                            <input
                                type="file"
                                name="add"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imgUrl">Image URL</label>
                            <input
                                type="text"
                                required="required"
                                name="imgUrl"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}