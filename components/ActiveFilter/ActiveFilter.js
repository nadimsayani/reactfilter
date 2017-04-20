import React, { PropTypes } from 'react';

export default class ActiveFilter extends React.Component {
  constructor(props) {
    super(props)
    // this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  // let onRemoveClick = (e) => {
  //   console.log(e)
  //   this.target.remove()
  // }

  render() {
    return(
        <div>
          {this.props.label}
          <a>
            // onClick={onRemoveClick}>
            Close</a>
          <style jsx>{`
            div {
              display: inline;
              width: 200px;
              margin: 5px;
              padding: 10px;
              border-style: solid;
              border-width: 1px;
              border-radius: 15px;
              border-color: red;
            }

            a {
              margin-left: 15px;
              font-size : small;
            }
            `}</style>
        </div>
    )
  }
}


	//ActiveFilter.propTypes = {
	//	label: PropTypes.string.isRequired,
	//	onRemoveCick: PropTypes.func.isRequired
	//}
