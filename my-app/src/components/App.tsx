import React from "react";
import { connect } from "react-redux";

import { ToDo, fetchTodos, deleteTodo } from "../actions/todos";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ToDo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      fetching: false,
    };
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onRowClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderTodos = (): JSX.Element[] => {
    return this.props.todos.map((item: ToDo) => (
      <div key={item.id} onClick={() => this.onRowClick(item.id)}>
        {item.title}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? <div>LOADING</div> : null}
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: ToDo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
