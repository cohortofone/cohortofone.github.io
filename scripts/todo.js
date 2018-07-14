const e = React.createElement;

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	items: [
      	{ text: "Learn JavaScript", done: false },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ]
    }
  }
  
  render() {
    return (
      e(
        "div",
        null,
        e(
          "h2",
          null,
          "Todos:"
        ),
        e(
          "ol",
          null,
          this.state.items.map(function (item) {
            return e(
              "li",
              { key: item.id },
              e(
                "label",
                null,
                e("input", { type: "checkbox", disabled: true, readOnly: true, checked: item.done }),
                e(
                  "span",
                  { className: item.done ? "done" : "" },
                  item.text
                )
              )
            );
          })
        )
      )
    );
  }
}

ReactDOM.render(e(TodoApp), document.querySelector("#app"))
