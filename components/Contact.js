var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'https://static.thenounproject.com/png/27737-200.png'}/>
        <p className={'contactLabel'}>
            Imię: {this.props.item.firstName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
        </a>
    </div>
    )
  },
});