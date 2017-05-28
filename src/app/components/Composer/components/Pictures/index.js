
// export
export class Images extends React.Component {

  /**
   * Deserialize the raw initial state.
   *
   * @type {Object}
   */

  state = {
    state: Raw.deserialize(initialState, { terse: true })
  };

  /**
   * Render the app.
   *
   * @return {Element} element
   */

  render = () => {
    return (
      <div>
        {this.renderToolbar()}
        {this.renderEditor()}
      </div>
    )
  }