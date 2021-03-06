const {Component, PropTypes} = React;

class TodoEditor extends Component {
	static propTypes = {
		onSave: PropTypes.func,
		onCancel: PropTypes.func,
	};
	
	constructor(props) {
		super(props);

		this.state = {
			value: props.value || ''
		};

		this.change = this.change.bind(this);
	}

	change(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		const {onSave, onCancel} = this.props;
		return (
			<Form onSubmit={() => onSave && onSave(this.state.value)}>
				<TodoContainer
					center={
						<div className="ui input left icon fluid small">
							<i className="pencil icon"></i>
							<input type="text" placeholder="Enter text here"
								value={this.state.value} onChange={this.change} />
						</div>
					}
					right={
						<div>
							<Button flavor="positive" submit>
								<i className="checkmark icon"></i> Save
							</Button>
							<Button onClick={() => onCancel && onCancel()}>
								<i className="cancel icon"></i> Cancel
							</Button>
						</div>
					}
				/>
			</Form>
		);
	}
};

window.TodoEditor = TodoEditor;