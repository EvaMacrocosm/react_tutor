import React from 'react';

export default class HomePage extends React.Component {
  static path = '/';

  render() {
    return (
      <div>
        <div className="alert alert-succses">главная страница</div>
      </div>
    );
  }
}
