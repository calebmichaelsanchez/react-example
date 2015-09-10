import React from "react"
import HeadParams from "../lib/HeadParams"

class Html extends React.Component {
  render(){
    return (
      <html>
      <head>
        <title>{this.props.headParams.title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta name="description" content={this.props.headParams.description} />
        <title>Underbelly Creative</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body dangerouslySetInnerHTML={{__html: this.props.markup}}>
        <script src="bundle.js" async></script>
      </body>
      </html>
    )
  }
};
Html.propTypes = {
  headParams: React.PropTypes.instanceOf(HeadParams)
};

export default Html;