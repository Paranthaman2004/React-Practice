const styles = {
    base: {
      background: "orange",
      border: 0,
      borderRadius: 4,
      color: "white",
      display: "block",
      margin: "20px auto",
      padding: "1.5em",
      ":hover": {
        backgroundColor: "red",
        cursor: "pointer"
      },
      ":focus": {
        backgroundColor: "green",
        color: "black"
      },
      ":active": {
        backgroundColor: "yellow"
      }
    }
  };
  
  class Button extends React.Component {
    render() {
      return <button style={styles.base}>{this.props.children}</button>;
    }
  }
  
  Button = Radium(Button);